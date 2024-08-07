import React from "react";
import { Button } from "./Button";
import { JavascriptIcon } from "./JavascriptIcon";
import { ReactIcon } from "./ReactIcon";
import { TailwindIcon } from "./TailwindIcon";
import { useColor } from "../providers/ColorProvider";

export const Banner = ({ title }) => {
  const {primaryColor, secondaryColor} = useColor();

  const background =
    "https://wallpaperbat.com/img/8617980-cloudy-photo-download-the-best-free.jpg";

  const redirectToLinkedinRodri = () => {
    window.open("https://www.linkedin.com/in/rodrigo-aguillon-245798200/");
  }
  const redirectToLinkedinAgus = () => {
    window.open("https://www.linkedin.com/in/agustin-madrid-sanchez/");
  }
  
  return (
    <div className="relative flex justify-center">
      <div
        className="banner w-3/4 bg-[#222831] h-[40rem] flex gap-20 flex-col justify-center items-center rounded-b-xl"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center flex-col gap-0 text-center relative p-4 main-h1">
          <h1 className="text-white text-6xl z-10 p-0 pt-[15vh] font-bold">
            {title}
          </h1>
          <h1
            className="text-white text-6xl z-10 opacity-20 p-0 font-bold"
            style={{
              rotate: "180deg",
              transform: "scale(-1, 1)",
            }}
          >
            {title}
          </h1>
          <p className="text-white z-10 italic pt-4">
            We are your trustable and favourite weather web.
          </p>
          <div className="inside-card-text absolute top-[85.5%] left-0 w-full h-2 bg-black opacity-45 rounded-xl p-4" />
        </div>

        <div className="banner-content-container w-full flex justify-center gap-4 z-10 pt-4 text-white items-center">
          <div className="button-us-container w-2/3 flex justify-center gap-4 z-10 text-white items-center">
            <p className="text-center made-by">Made by</p>
            <Button text={"Rodrigo"} typeOfButton={"us"} onClick={redirectToLinkedinRodri} colors={{primary: primaryColor, secondary: secondaryColor}}/>
            <p>&</p>
            <Button text={"Agustin"} typeOfButton={"us"} onClick={redirectToLinkedinAgus} colors={{primary: primaryColor, secondary: secondaryColor}}/>
          </div>

          <div className="w-1/8 flex gap-4 justify-center items-center p-2">
            <div className="bg-cyan-600 w-auto h-fit rounded">
              <ReactIcon width={"20px"} />
            </div>

            <JavascriptIcon width={"20px"} />
            <div className="bg-cyan-600 w-auto h-fit rounded">
              <TailwindIcon width={"20px"} />
            </div>
          </div>
        </div>
        <div className="inside-card absolute top-0 w-3/4 h-full bg-black opacity-45 rounded-b-xl" />
      </div>
    </div>
  );
};
