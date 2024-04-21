"use client";
import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import Profile from "../components/Profile/Profile";
import { useSelector } from "react-redux";
import { userLoggedOut } from "@/redux/features/auth/authSlice";

type Props = {};

const Page: FC = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div>
      <Protected>
        <Heading
          title={`${user?.name} profile - EduLearn`}
          description="EduLearn is a platform for students to learn and get help from teachers"
          keywords="Programming, MERN, Redux, Machine Learning"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={userLoggedOut} />
      </Protected>
    </div>
  );
};

export default Page;
