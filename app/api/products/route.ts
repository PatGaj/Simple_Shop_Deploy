export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageParam = parseInt(searchParams.get("page") || "1");
    const limitParam = parseInt(searchParams.get("limit") || "6");
    const categoryParam = searchParams.get("category");
    const brandParam = searchParams.get("brand");
    const sortedParam = searchParams.get("sorted");
    const maxPriceParam = searchParams.get("maxPrice");
    const minPriceParam = searchParams.get("minPrice");

    const skipItems = (pageParam - 1) * limitParam;
    const sortedByPrice = sortedParam === "highest_price" ? "desc" : "asc";

    const filters: {
      category?: { name: string };
      brand?: { name: string };
      price?: { gte?: number; lte?: number };
    } = {};
    if (categoryParam) {
      filters.category = {
        name: categoryParam,
      };
    }
    if (brandParam) {
      filters.brand = {
        name: brandParam,
      };
    }
    if (minPriceParam || maxPriceParam) {
      filters.price = {};
      if (minPriceParam) {
        filters.price.gte = parseInt(minPriceParam);
      }
      if (maxPriceParam) {
        filters.price.lte = parseInt(maxPriceParam);
      }
    }

    const totalCount = await prisma.product.count({
      where: filters,
    });

    const totalPages = Math.ceil(totalCount / limitParam);

    const products = await prisma.product.findMany({
      where: filters,
      select: {
        id: true,
        name: true,
        price: true,
        imageUrl: true,
        discount: true,
        category: {
          select: {
            name: true,
          },
        },
      },
      orderBy: sortedParam === "latest" ? { createdAt: "asc" } : { price: sortedByPrice },
      skip: skipItems,
      take: limitParam,
    });

    return NextResponse.json({ products, totalPages, currentPage: pageParam, totalItems: totalCount });
  } catch (error) {
    console.error("Błąd:", error);
    return NextResponse.json(
  { error: (error as Error).message },
  { status: 500 }
);
  }
}
