import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const allIds = await prisma.product.findMany({
      select: { id: true },
    });

    const shuffled = allIds.sort(() => 0.5 - Math.random());
    const selectedIds = shuffled.slice(0, 6).map((p) => p.id);

    const products = await prisma.product.findMany({
      where: {
        id: { in: selectedIds },
      },
      select: {
        id: true,
        name: true,
        imageUrl: true,
        price: true,
        description: true,
        discount: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Błąd:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
