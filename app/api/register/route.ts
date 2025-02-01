import { NextResponse } from "next/server";
import registerSchema from "@/lib/schema/registerSchema";
import { prisma } from "@/prisma/client";
import { Prisma } from "@prisma/client";

const handleValidationError = (errors: unknown) => {
  return NextResponse.json(
    {success: false, error: "Not valid information", details: errors},
    {status: 400},
  );
};

const handleDatabaseError = (error: Prisma.PrismaClientKnownRequestError) => {
  if (error.code === "P2002") {
    return NextResponse.json(
      {success: false, error: "User Alerdy exist", message: "Unique constraint violation", code: error.code},
      {status: 409},
    );
  }

  return NextResponse.json(
    {success: false, error: "Database Error", code: error.code},
    {status: 500},
  );
};

const handleGenericError = () => {
  return NextResponse.json(
    {success: false, error: "Internal Server Error"},
    {status: 500},
  );
};

export async function POST(request: Request) {
  try {
    const rawData = await request.json();
    const parsed = await registerSchema.safeParseAsync(rawData);

    if (!parsed.success) {
      return handleValidationError(parsed.error.errors);
    }

    const user = await prisma.user.create({
      data: parsed.data,
    });

    return NextResponse.json(
      {success: true, data: user},
      {status: 201},
    );
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return handleDatabaseError(error);
    }

    return handleGenericError();
  }
}