"use client";
import React from "react";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import Heading from "@/app/utils/Heading";
import AdminSidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import AllInvoices from "@/app/components/components/Admin/Order/AllInvoices";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
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
          <DashboardHeader />
          <AllInvoices
        </div>
      </div>
    </div>
  );
};

export default page;
