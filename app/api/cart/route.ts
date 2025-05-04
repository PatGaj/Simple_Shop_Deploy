import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      return new NextResponse("Invalid body format", { status: 400 });
    }

    const products = await prisma.product.findMany({
      where: {
        id: { in: body },
      },
      select: {
        id: true,
        name: true,
        imageUrl: true,
        price: true,
        stock: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Cart API error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
