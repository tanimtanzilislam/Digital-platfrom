import banner from "../../assets/banner.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-between px-[200px] mt-[100px]">
      
      {/* Left Content */}
      <div>
        <button className="btn btn-active bg-[#E1E7FF] rounded-full">
          <span className="bg-gradient-to-r from-[#4F39F6] to-[#7C3AED] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </span>
        </button>

        <h1 className="text-5xl font-extrabold mt-6">
          Supercharge Your
        </h1>
        <h1 className="text-5xl font-extrabold">
          Digital Workflow
        </h1>

        <p className="mt-4 text-gray-600">
          Access premium AI tools, design assets, templates, and productivity
        </p>
        <p className="text-gray-600">
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Explore Products
          </button>

          <button className="btn btn-outline btn-primary rounded-full">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img src={banner} alt="Banner" className="w-[550px]" />
      </div>

    </div>
  );
};

export default Hero;