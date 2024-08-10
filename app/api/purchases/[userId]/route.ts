import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

// 購入履歴検索
export async function GET(request: Request, { params }: { params: { userId: string } }) {
  const userId = params.userId;

  try {
    const purchases = await prisma.purchase.findMany({
      where: {
        userId: userId,
      },
    });

    return NextResponse.json(purchases);
  } catch (error) {
    return NextResponse.json(error);
  }
}
