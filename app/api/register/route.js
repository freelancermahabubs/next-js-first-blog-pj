import {NextResponse} from "next/server";

import User from "@/models/user";
import bcrypt from "bcrypt";
import dbConnect from "@/utills/dbConnect";

export async function POST(req) {
  const _req = await req.json();

  await dbConnect();

  try {
    const {name, email, password} = _req;
    // check if user with email already exists
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return NextResponse.json({err: "Email already exists"}, {status: 409});
    } else {
      await new User({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      }).save();

      return NextResponse.json({
        success: "Registration successful",
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({err: "Server error. Try again"}, {status: 500});
  }
}
