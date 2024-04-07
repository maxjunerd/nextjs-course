import { NextResponse } from "next/server";

const posts = [
  {
    title: "Max",
    description: "Amazing Post",
    id: 1,
  },
  {
    title: "Mild",
    description: "Amazing Post",
    id: 2,
  },
];

export async function GET(request: Request, context: any) {
  const { params } = context;

  return NextResponse.json({
    post: posts.find((x: any) => x.id.toString() === params.id.toString()),
  });
}
