import { prisma } from "@/prisma";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest, context: any) {
  console.debug("albums/show", request);
  const { bandId } = context.params;
  const band = await prisma.band.findUnique({ where: { id: bandId } });

  if (!band) {
    return NextResponse.json({ band: null }, { status: 404 });
  }

  return NextResponse.json({ band: band });
}

export async function PUT(request: NextRequest, context: any) {
  console.debug("albums/update", request);
  const { bandId } = context.params;
  const band = await prisma.band.findUnique({ where: { id: bandId } });
  const body = await request.json();

  if (!band) {
    return NextResponse.json({ band: null }, { status: 404 });
  }
  // TODO: add validation (zod ?)

  const result = await prisma.band.update({
    where: { id: bandId },
    data: body,
  });

  return NextResponse.json({ band: result });
}

export async function DELETE(request: NextRequest, context: any) {
  console.debug("albums/destroy", request.nextUrl.href);
  const { bandId } = context.params;
  const band = await prisma.band.findUnique({ where: { id: bandId } });

  if (!band) {
    return NextResponse.json({ band: null }, { status: 404 });
  }

  const result = await prisma.band.delete({ where: { id: bandId } });
  console.debug("result", result);

  return NextResponse.json({
    meta: {
      operation: "delete",
      status: "success",
      record: result,
    },
    band: null,
  });
}
