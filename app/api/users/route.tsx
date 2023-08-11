import connectToDB from "../Db/Db";
import User from "@/app/api/models/User";
import { NextResponse, NextRequest } from "next/server";


export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { name, email, company, designation, industry, service,message } = reqBody;

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exits" },
        { status: 400 }
      );
    }
    let sentUser;
    if(!message){
      sentUser = await User.create({
        name,
        email,
        company,
        designation,
        industry,
        service
      });
    }
    else{
      sentUser = await User.create({
        name,
        email,
        message
      });
    }
    return NextResponse.json(
      { message: "success", sentUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch prompts created by user" },
      {
        status: 500,
      }
    );
  }
};
connectToDB();
