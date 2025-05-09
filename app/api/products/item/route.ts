import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        name: true,
        description: true,
        exploreInfo: true,
        price: true,
        discount: true,
        stock: true,
        imageUrl: true,
        category: { select: { name: true } },
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
