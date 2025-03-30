import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;

  return NextResponse.json({ youSent: name });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const test = searchParams.get("test");
  console.log("test parameter:", test);
  return NextResponse.json({ message: "Hello World2" });
}


