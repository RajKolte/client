"use client";
import React from "react";
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";

import OrdersAnalytics from "../../components/Admin/Analytics/OrdersAnalytics";

import DashboardHeader from "../../../app/components/Admin/DashboardHeader";

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
          <OrdersAnalytics />
        </div>
      </div>
    </div>
  );
};

export default page;