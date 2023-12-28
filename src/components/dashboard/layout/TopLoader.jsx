"use client"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const TopLoader = () => {
  return (
    <ProgressBar
      height="2px"
      color="#fff"
      options={{ showSpinner: false }}
      shallowRouting
    />
  )
}

export default TopLoader
