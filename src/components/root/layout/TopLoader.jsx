"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const TopLoader = () => {
  return (
    <ProgressBar
      height="2.6px "
      color="#1970d5"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default TopLoader;
