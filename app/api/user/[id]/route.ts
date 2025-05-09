
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Nieautoryzowany" }, { status: 401 });
  }

  const requestedId = Number(params.id);
  const currentUserId = Number(session.user.id);

  
  if (requestedId !== currentUserId) {
    return NextResponse.json({ message: "Brak dostępu" }, { status: 403 });
  }

  
  const user = await prisma.user.findUnique({
    where: { id: requestedId },
    select: {
      id: true,
      email: true,
      firstName: true,
      phone: true,
      country: true,
      addresses: {
        select: {
          id: true,
          country: true,
          province: true,
          city: true,
          postalCode: true,
        },
      },
      orders: {
        orderBy: { createdAt: "desc" },
        include: {
          items: {
            include: {
              product: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json({ message: "Użytkownik nie znaleziony" }, { status: 404 });
  }

 
  return NextResponse.json(user);
}
