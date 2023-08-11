import React from "react";
import dynamic from "next/dynamic";
const Waitlist = dynamic(() => import("./components/Wailist/Waitlist"));

const HomePage = () => {
  return (
    <div>
      <Waitlist />
    </div>
  );
};

export default HomePage;
