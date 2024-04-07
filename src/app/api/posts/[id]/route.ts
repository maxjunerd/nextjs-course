import { NextResponse } from "next/server";
import data from "@/data.json";

export async function GET(request: Request, context: any) {
  const { params } = context;
  // console.log(data);

  const posts = data.filter(
    (post) => post.id.toString() === params.id.toString()
  );

  return NextResponse.json(posts);
}
