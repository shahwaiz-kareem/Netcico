const Wrapper = ({ children }) => {
  return (
    <section className="flex flex-row flex-wrap max-sm:mx-auto  max-lg:px-2">
      {children}
    </section>
  );
};

export default Wrapper;
