"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const SuccessPage = () => {
  const formContainerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  return (
    <div className="bg-gradient-to-r from-blue-800 h-[100vh] via-purple-700 to-pink-600">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formContainerVariants}
        className="flex h- items-center justify-center h-[100vh] text-white"
      >
        <div className="text-center">
          <h1 className="text-3xl font-extrabold mb-4">
            You are now on the waitlist!
          </h1>
          <p className="text-lg mb-6">
            Revolutionize the way your products are tested.
          </p>
          <Link href="/" > Back to Form<FontAwesomeIcon className="ml-2" icon={faArrowAltCircleLeft}></FontAwesomeIcon></Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
