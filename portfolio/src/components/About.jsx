import React from "react";

const About = () => {
  return (
    <div className="bg-darkblue h-auto py-8 bg-purple-200 text-black ">
      <div className="flex flex-col items-center md:gap-2 px-10 max-w-4xl mx-auto">
        <div>
          <div className="w-[200px] h-30 mt-3">
            <img />
          </div>
        </div>
        <div className="p-2">
          <div className="text-white-300 my-3">
            <h3 className="text-4xl font-semibold mb-5 font-abc gap-10">
              About<span className="text-purple-600 ">Me</span>
            </h3>
            <p className=" text-justify leading-7 w--11/12 mx-auto font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              minus culpa! Maiores quod enim laboriosam nam provident dolore
              reprehenderit? Suscipit neque veniam doloremque nam. Ullam
              adipisci, eligendi quas vitae veniam unde distinctio? Hic,
              corporis magni.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center ml-10">
          <h3 className="text-center font-abc text-2xl mr-15">Languages</h3>
          <div className="flex flex-row justify-center gap-2 mt-3 font-abc">
            <h2 className="text-white bg-slate-400 rounded-full px-5 py-1">
              English
            </h2>
            <h2 className="text-white bg-slate-500 rounded-full px-5 py-1">
              Telugu
            </h2>
            <h2 className="text-white bg-slate-400 rounded-full px-5 py-1">
              Hindi
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
