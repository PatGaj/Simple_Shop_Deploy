import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fields = searchParams.get("fields");
  type SelectFields = {
    id?: boolean;
    name?: boolean;
    imageUrl?: boolean;
  };

  let selectFields: SelectFields = { id: true };

  if (fields) {
    const requestedFields = fields.split(",");
    if (requestedFields.includes("name")) selectFields.name = true;
    if (requestedFields.includes("imageUrl")) selectFields.imageUrl = true;
  } else {
    selectFields = {
      id: true,
      name: true,
      imageUrl: true,
    };
  }

  try {
    const brands = await prisma.brand.findMany({
      select: selectFields,
    });

    return NextResponse.json(brands);
  } catch (error) {
    console.error("Błąd:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
