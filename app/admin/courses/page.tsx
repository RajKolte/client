"use client";
import DashboardHero from "../../../app/components/Admin/DashboardHero";
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";
import React from "react";
import AdminProtected from "../../../app/hooks/adminProtected";
import AllCourses from "../../components/Admin/Course/AllCourses";

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
      <div className="flex h-screen">
        <div className=" 1500px:w-[16%] w-1/5 dark:text-white text-black">
          <AdminSidebar />
        </div>
        <div className="w-[80%] dark:text-white">
          <DashboardHero />
          <AllCourses />
        </div>
      </div>
      {/* {</AdminProteced>} */}
    </div>
  );
};

export default page;
