import "./SectionWrapper.css";

const SectionWrapper = ({ children, title, id }) => {
  return (
    <section id={id} className="py-20 px-6 max-w-6xl mx-auto">
      {title && (
        <h2 className="section-title text-3xl font-bold mb-12 text-center">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;
