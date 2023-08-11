import connectToDB from "../Db/Db";
import User from "@/app/api/models/User";
import { NextResponse, NextRequest } from "next/server";


export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { name, email, company, designation, industry, service } = reqBody;

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exits" },
        { status: 400 }
      );
    }

    if (!name || !email || !company || !designation || !industry || !service) {
      return NextResponse.json(
        { message: "Please fill all the details" },
        { status: 400 }
      );
    }
    let nodemailer = require("nodemailer");

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "reactshopecommerce@gmail.com",
        pass: "jbasnsvkukreoxai",
      },
    });

  

    const mailOptions = {
      from: "reactshopecommerce@gmail.com",
      to: email,
      subject: "Welcome to our Waitlist",
      html: `
        <p>Thank you for joining our waitlist!</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Company: ${company}</p>
        <p>Designation: ${designation}</p>
        <p>Industry: ${industry}</p>
        <p>Service: ${service}</p>
      `,
    };

    transporter.sendMail(mailOptions);

    const createdUser = await User.create({
      name,
      email,
      company,
      designation,
      industry,
      service,
    });
    return NextResponse.json(
      { message: "success", createdUser },
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
