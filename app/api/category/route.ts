import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fields = searchParams.get("fields");
  type SelectFields = {
    id?: boolean;
    name?: boolean;
    imageUrl?: boolean;
    iconUrl?:boolean
    description?: boolean;
  };

  let selectFields: SelectFields = { id: true };

  if (fields) {
    const requestedFields = fields.split(",");
    if (requestedFields.includes("name")) selectFields.name = true;
    if (requestedFields.includes("imageUrl")) selectFields.imageUrl = true;
    if (requestedFields.includes("iconUrl")) selectFields.iconUrl = true;
    if (requestedFields.includes("description")) selectFields.description = true;
  } else {
    selectFields = {
      id: true,
      name: true,
      imageUrl: true,
      iconUrl: true,
      description: true,
    };
  }

  try {
    const category = await prisma.category.findMany({
      select: selectFields,
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error("Błąd:", error);
    return NextResponse.json(
  { error: (error as Error).message },
  { status: 500 }
);
  }
}
