import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const {
      userId,
      address,
      totalAmount,
      items, 
    }: {
      userId: number;
      address: string;
      totalAmount: number;
      items: {
        productId: number;
        quantity: number;
        note?: string;
        protection: boolean;
      }[];
    } = await request.json();

    
    if (!userId || !address || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Niepoprawne dane zamówienia" },
        { status: 400 }
      );
    }

   
    const order = await prisma.order.create({
      data: {
        userId,
        status: "PENDING",    
        address,
        totalAmount,
        items: {
          create: items.map((it) => ({
            product: { connect: { id: it.productId } },
            quantity: it.quantity,
            note: it.note ?? null,
            protection: it.protection,
          })),
        },
      },
      include: {
        items: true, 
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("Błąd tworzenia zamówienia:", error);
return NextResponse.json(
  { error: (error as Error).message },
  { status: 500 }
);
  }
}
