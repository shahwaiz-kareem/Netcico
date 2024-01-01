const Container = ({ children }) => {

  return (
    <div className="flex flex-col gap-2  h-full justify-between w-full mx-auto  ">
      {children}
    </div>
  )
}

export default Container
