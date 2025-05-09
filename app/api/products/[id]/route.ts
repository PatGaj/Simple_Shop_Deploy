import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Nieautoryzowany" }, { status: 401 });
  }

  const requestedId = Number(params.id);
  const currentUserId = Number(session.user.id);

  if (requestedId !== currentUserId) {
    return NextResponse.json({ message: "Brak dostępu" }, { status: 403 });
  }

  try {
    const product = await prisma.product.findUnique({
      where: { id: requestedId },
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
          select: {
            name: true,
          },
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
