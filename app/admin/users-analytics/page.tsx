"use client";
import DashboardHeader from "../../../app/components/Admin/DashboardHeader";
import Heading from "../../../app/utils/Heading";
import React from "react";
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
import UserAnalytics from "@/app/components/Admin/Analytics/UserAnaytics";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="EduLearn - Admin"
        description="EduLearn is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
      <div className="flex h-screen">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%] ">
          <DashboardHeader />
          <UserAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;
