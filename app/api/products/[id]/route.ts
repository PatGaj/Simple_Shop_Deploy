
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { id } = req.query;
  if (Array.isArray(id) || isNaN(Number(id))) {
    return res.status(400).send("Invalid product ID");
  }

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
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!product) {
      return res.status(404).send("Product not found");
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).send("Internal Server Error");
  }
}
