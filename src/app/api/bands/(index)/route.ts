import { prisma } from "@/prisma";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.debug("[bands/index]", request.nextUrl.href);
  const bands = await prisma.band.findMany();

  return NextResponse.json({ bands: bands });
}

export async function POST(request: NextRequest) {
  console.debug("[bands/create]", request.nextUrl.href);
  const body = await request.json();

  // TODO: add validation (zod ?)

  const band = await prisma.band.create({
    data: {
      name: body.name,
    },
  });

  return NextResponse.json({ band: band });
}
