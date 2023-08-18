import connectToDB from "../Db/Db";
import User from "@/app/api/models/User";
import { NextResponse, NextRequest } from "next/server";


export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { User_type,name, email, company, designation, industry, service,message } = reqBody;

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
        User_type,
        name,
        email,
        company,
        designation,
        industry,
        service
      });
      return NextResponse.json(
        { message: "success", sentUser },
        { status: 200 }
      );
    }
    else{
      sentUser = await User.create({
        User_type,
        name,
        email,
        message
      });
      return NextResponse.json(
        { message: "success", sentUser },
        { status: 200 }
      );
    }

  } catch (error) {
    if(error instanceof Error){
    return NextResponse.json(
      { message: error.message},
      {
        status: 500,
      }
    );
  }
}
};
connectToDB();
