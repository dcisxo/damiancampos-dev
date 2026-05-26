import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

const Resume = () => {
  return (
    <SectionWrapper title="Resume">
      <div className="flex flex-col items-center gap-6">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-medium"
        >
          Download Resume (PDF)
        </a>
        <div className="w-full max-w-4xl border border-gray-800 rounded-xl overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Damian Campos Resume"
            className="w-full"
            style={{ height: "80vh" }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Resume;
