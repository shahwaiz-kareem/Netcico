"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import UserDropdown from "./UserDropdown";

import { useSession } from "next-auth/react";

const AccountM = ({}) => {
  const context = useContext(AppContext);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user && !localStorage.getItem("user_id")) {
      localStorage.setItem("user_access_id", session.user.id);
    }
  }, [session?.user?.id]);

  const { showDropdown } = context;

  return <UserDropdown show={showDropdown} session={session} />;
};

export default AccountM;
