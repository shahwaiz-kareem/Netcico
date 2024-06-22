const GridContainer = ({ children }) => {
  return (
    <section className=" grid sm:grid-cols-1 gap-6 mt-1 md:grid-cols-2 lg:grid-cols-3  w-full px-2">
      {children}
    </section>
  );
};

export default GridContainer;
