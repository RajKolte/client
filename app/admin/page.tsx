"use client";
import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/Sidebar/AdminSidebar";
//import AdminProteced from "../hooks/adminProtected";
import DashboardHero from "../components/Admin/DashboardHero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      {/* <AdminProteced> */}
      <Heading
        title="EduLearn - Admin"
        description="EduLearn is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
      <div className="flex h-[200vh]">
        <div className=" 1500px:w-[16%] w-1/5 dark:text-white text-black">
          <AdminSidebar />
        </div>
        <div className="w-[80%] dark:text-white">
          <DashboardHero isDashboard={true} />
        </div>
      </div>
      {/* {</AdminProteced>} */}
    </div>
  );
};

export default page;
