"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Form = () => {
  const router = useRouter();
  const industryType = [
    "Finance",
    "Technology, IT",
    "Marketing",
    "Banking",
    "Insurance",
    "Market Research",
    "E-Commerce",
    "Education and Training",
    "FMCG",
    "Media and Entertainment",
    "Services",
  ];
  const service = ["Survey", "Testing + Feedback", "Focus groups"];

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [company, setcompany] = useState("");
  const [designation, setdesignation] = useState("");
  const [industry, setindustry] = useState("");
  const [services, setservices] = useState("");

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const sentData = {
      name: name,
      email: email,
      company: company,
      designation: designation,
      industry: industry,
      service: services,
    };

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sentData),
      });

      const data = await response.json();
      console.log(data);

      if (
        !email ||
        !name ||
        !designation ||
        !service ||
        !industry ||
        !company
      ) {
        toast.error("Please fill the credentials", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // To keep the toaster open until the user closes it manually
        });
      } else {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailRegex.test(email)) {
          if (data.message === "Please fill all the details") {
            toast.error(`${data.message}!`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000, // To keep the toaster open until the user closes it manually
            });
          } else if (data.message === "User already exits") {
            toast.error("You have already joined our Waitlist", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000, // To keep the toaster open until the user closes it manually
            });
          } else {
            toast.success("You have successfully joined our Wailist", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000, // To keep the toaster open until the user closes it manually
            });
            router.push("/components/Success");
          }
        } else {
          toast.error("Wrong email format", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // To keep the toaster open until the user closes it manually
          });
        }
      }
    } catch (error) {}
  };

  const formContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const inputAnimation = {
    rest: { scale: 1 },
    hover: { scale: 0.98 },
    focus: { scale: 0.99 },
  };

  const buttonAnimation = {
    rest: { scale: 1 },
    hover: { scale: 0.98 },
    press: { scale: 0.95 },
  };

  return (
    <motion.div
      className="shadow-2xl   xs:py-[1.1rem] ss:py-7 mt-[-1.6rem] rounded-md flex items-center justify-center bg-white"
      initial="hidden"
      animate="visible"
      variants={formContainerVariants}
    >
      <form className="container xs:space-y-4 ss:space-y-7   xs:px-[1rem] md:px-0 lg:px-4 xl:px-[5rem] 2xl:px-[9rem] flex flex-col items-center ">
        <h1 className= "text-2xl ss:text-3xl font-extrabold  bg-gradient-to-r from-blue-800 via-purple-900 to-pink-900 text-transparent bg-clip-text">
          Join the Waitlist
        </h1>
        <h2 className="  bg-gradient-to-r font-bold from-blue-800 via-p via-blue-600 to-purple-700 xs:text-md ss:text-lg text-transparent bg-clip-text">
          Join today for early access & discounted pricing.
        </h2>
        <div className="xs:space-y-2 md:space-y-5 lg:space-y-3">
          <div className="FullName">
            <label
              className='block mb-2 text-sm ss:text-md after:content-["*"] font-semibold after:text-red-600 '
              htmlFor="FullName"
            >
              Full Name{" "}
            </label>
            <motion.input
              onChange={(e) => setname(e.target.value)}
              type="email"
              className="p-2 ss:p-3 border placeholder:text-sm ss:placeholder:text-md border-black w-[100%] rounded-sm"
              id="FullName"
              name="FullName"
              value={name}
              placeholder="Full Name "
              whileHover="hover"
              whileFocus="focus"
              variants={inputAnimation}
            />
          </div>
          <div className="Email">
            <label
              className='block mb-2 text-sm ss:text-md  after:content-["*"] font-semibold after:text-red-600'
              htmlFor="email"
            >
              Email
            </label>
            <motion.input
              onChange={(e) => setemail(e.target.value)}
              type="email"
              className="p-2 ss:px-3 ss:py-3 border placeholder:text-sm ss:placeholder:text-md border-black w-[100%] rounded-sm"
              id="email"
              name="email"
              value={email}
              placeholder="Email "
              whileHover="hover"
              whileFocus="focus"
              variants={inputAnimation}
            />{" "}
          </div>
          <div className=" xs:space-y-3 ss:space-y-0 ss:grid ss:gap-3 ss:grid-flow-col">
            <div className="Company">
              <label
                className='block mb-2 text-sm ss:text-md after:content-["*"] font-semibold after:text-red-600'
                htmlFor="Company"
              >
                Company
              </label>
              <motion.input
                type="text"
                id="Company"
                name="Company"
                placeholder="Company"
                value={company}
                whileHover="hover"
                whileFocus="focus"
                variants={inputAnimation}
                onChange={(e) => setcompany(e.target.value)}
                className="p-2 ss:px-3 ss:py-3 border placeholder:text-sm ss:placeholder:text-md border-black w-[100%] rounded-sm"
              />
            </div>
            <div className="Designation">
              <label
                className='block mb-2 text-sm ss:text-md after:content-["*"] font-semibold after:text-red-600'
                htmlFor="Company"
              >
                Designation in company
              </label>
              <motion.input
                type="text"
                id="Designation"
                name="Designation"
                placeholder="Designation"
                value={designation}
                whileHover="hover"
                whileFocus="focus"
                variants={inputAnimation}
                onChange={(e) => setdesignation(e.target.value)}
                className="p-2 ss:px-3 ss:py-3 border placeholder:text-sm ss:placeholder:text-md border-black w-[100%] rounded-sm"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className='after:content-["*"] text-sm ss:text-md after:text-red-600 font-semibold'>
              Industry
            </h3>
            <motion.select
              value={industry}
              onChange={(e) => setindustry(e.target.value)}
              className="p-2 text-sm ss:text-md ss:px-3 ss:py-3 border border-black w-[100%] rounded-sm"
              name=""
              id=""
              whileHover="hover"
              whileFocus="focus"
              variants={inputAnimation}
            >
              <option value="" disabled selected hidden>
                Select an industry
              </option>
              {industryType.map((element, index) => (
                <option key={index} value={`${element}`}>
                  {element}
                </option>
              ))}
            </motion.select>
          </div>
          <div className="space-y-4">
            <h3 className='after:content-["*"] text-sm ss:text-md after:text-red-600 font-semibold'>
              What is the type of services are you looking for?{" "}
            </h3>
            <motion.select
              value={services}
              onChange={(e) => setservices(e.target.value)}
              className="p-2 text-sm ss:text-md ss:px-3 ss:py-3 border border-black w-[100%] rounded-sm"
              name=""
              id=""
              whileHover="hover"
              whileFocus="focus"
              variants={inputAnimation}
            >
              <option value="" disabled selected hidden>
                Select a service
              </option>
              {service.map((element, index) => (
                <option key={index} value={`${element}`}>
                  {element}
                </option>
              ))}
            </motion.select>
          </div>

          <div className="w-[100%]">
            <motion.button
              onClick={handleSubmit}
              className="mt-8 bg-gradient-to-r from-blue-800 via-p via-blue-700 to-purple-700 text-white flex justify-center items-center rounded-sm py-3 w-[100%] hover:"
              whileHover="hover"
              whileTap="press"
              variants={buttonAnimation}
            >
              Join Waitlist
            </motion.button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </motion.div>
  );
};

export default Form;
