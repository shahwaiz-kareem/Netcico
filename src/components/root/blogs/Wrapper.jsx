import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <section className="flex flex-row flex-wrap max-sm:mx-auto gap-4 max-lg:px-2">
      {children}
    </section>
  )
}

export default Wrapper
