import { connectDB } from "@/lib/connectDB";
import Sin from "@/lib/model/sin";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const data = await Sin.aggregate([
      { $sample: { size: 10 } },
    ]);
    return NextResponse.json({ data: data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json(); // Parse JSON data from request body
    const { title, content } = body; // Destructure title and content from parsed JSON
    // Use title and content to create or save a new blog post
   
    await Sin.create({ Title: title, Desc: content });
    return NextResponse.json({ message: "Post created successfully!" });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.error();
  }
}
