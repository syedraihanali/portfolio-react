import React from "react";
import Movie from "../assets/portfolio/movie-site.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Movie,
      live:"https://movie-site-byraihan.vercel.app/",
      code:"https://github.com/syedraihanali/simple-movie-site"
    },
    {
      id: 2,
      src: reactParallax,
      live:"",
      code:""
    },
    {
      id: 3,
      src: navbar,
      live:"",
      code:""
    },
    {
      id: 4,
      src: reactSmooth,
      live:"",
      code:""
    },
    {
      id: 5,
      src: installNode,
      live:"",
      code:""
    },
    {
      id: 6,
      src: reactWeather,
      live:"",
      code:""
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full md:ml-[70px]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
              href={code}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
