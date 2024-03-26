import connectToDB from "@/database";
import User from "@/models/User";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();
    console.log("%c Line:12 🥕 username", "color:#33a5ff", username);

    const checkUser = await User.findOne({ username });
    console.log("%c Line:15 🍯 checkUser", "color:#465975", checkUser);

    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "User name is not present !Please try again",
      });
    }

    // const hashPassword = await hash(checkUser.password, 12);
    // const checkPassword = await compare(password, hashPassword);

    if (checkUser.password !== password) {
      return NextResponse.json({
        success: false,
        message: "Wrong password. Please try again",
      });
    }
    return NextResponse.json({
      success: true,
      message: "Login successfull",
    });
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something goes wrong !Please try again",
    });
  }
}
