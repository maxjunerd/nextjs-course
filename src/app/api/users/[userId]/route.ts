import data from "@/data.json";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const user = data.filter((x) => params.userId === x.id.toString())[0];
  console.log(user);
  return NextResponse.json(user);
}
