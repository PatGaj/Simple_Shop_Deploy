import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {

  const id = Number(params.id);

  try {
    const product = await prisma.product.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        description: true,
        exploreInfo: true,
        price: true,
        discount: true,
        stock: true,
        imageUrl: true,
        category: {
          select: { name: true },
        },
      },
    });

    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Błąd:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
