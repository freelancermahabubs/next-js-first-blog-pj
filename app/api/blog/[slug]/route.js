import {NextResponse} from "next/server";

import Blog from "../../../../models/blog";
import dbConnect from "@/utills/dbConnect";

export async function GET(req, context) {
  await dbConnect();
  // console.log("context to get single blog => ", context.params);
  try {
    const blog = await Blog.findOne({slug: context.params.slug}).populate(
      "postedBy",
      "name"
    );
    return NextResponse.json(blog, {status: 200});
  } catch (err) {
    console.log(err);
    return NextResponse.json({err: err.message}, {status: 500});
  }
}
