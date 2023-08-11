import React from "react";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("../Form/Form"));
const Features = dynamic(() => import("../Features/Features"));
import { motion } from "framer-motion";

const Waitlist = () => {
  return (
    <div className="  xs:py-3 ss:py-4 lg:min-h-[100vh] flex xs:space-y-8 xs:flex-col xs:px-3 ss:px-7  xs:bg-gradient-to-b xs:from-blue-800 xs:via-purple-700 xs:to-pink-600 xl:bg-gradient-to-r xl:from-blue-800 xl:via-purple-700 xl:to-pink-600 lg:flex-row lg:items-start justify-between  ">
      <div className=" lg:w-[48vw] lg:mt-6">
        <Features />
      </div>
      <div className=" ">
        <Form />
      </div>
    </div>
  );
};

export default Waitlist;
