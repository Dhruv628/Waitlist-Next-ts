"use client";

import React from "react";
import {
  faCircleCheck,
  faCheck,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const First = () => {
  const features = [
    "Our platform provides companies with efficient tools for the purpose of testing.",
    " Real users and UX experts test products, offering various perspectives to improve understanding of user interaction.",
    "We empower companies to take control of product development by streamlining the feedback and testing process.",
    " This enables companies to create products that meet customer needs.",
  ];

  const featureVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const headingVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={headingVariants}
      className="px-4 flex flex-col justify-center py-4 xs:space-y-4 ss:space-y-8 text-white"
    >
      <div className="heading flex items-center space-x-3">
        <div className=" text-xl ss:text-2xl lg:text-3xl">
          <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
        </div>

        <div
          className=" xs:text-3xl ss:text-4xl font-extrabold  tracking-wider "
          style={{ fontFamily: "'Trebuchet MS', 'sans-serif'" }}
        >
          GroVr
        </div>
      </div>
      <h1
        className="xs:text-3xl flex flex-col ss:text-4xl font-bold"
        style={{ lineHeight: "1.3" }}
      >
        Join our waitlist to revolutionize the way your products are tested just
        at $270/mo.
      </h1>
      <h3 className=" font-semibold">What we do at GroVr:</h3>
      <div className="features space-y-4">
        {features.map((feature, index) => (
          <motion.div
            className="featureItems flex space-x-2items-center"
            key={index}
            initial="hidden"
            animate="visible"
            variants={featureVariants}
          >
            <div
              className="featureItems flex space-x-2items-center"
              key={index}
            >
              <div>
                <FontAwesomeIcon
                  className="h-7 w-7  "
                  icon={faCircleCheck}
                ></FontAwesomeIcon>
              </div>
              <div>{feature}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default First;
