import { NextResponse } from "next/server";
import { getBlogById } from "@/lib/mongo/backend";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const blog = await getBlogById(params.blogID);

  return NextResponse.json(blog);
}
