import React, { useState, useEffect } from "react";

export const Card = ({
  title,
  weather,
  temperature,
  typeOfCard,
  children,
  link,
  colors
}) => {
  const [mousex, setMouseX] = useState(0);
  const [mousey, setMouseY] = useState(0);

  var mainCardUrl = "https://cdn.wallpapersafari.com/78/98/c9DqJs.jpg";

  if(!colors) colors = {primary: "#3b82f6", secondary: "#1d4ed8"};

  switch(colors.primary){
    case "#f7cf4d":
      mainCardUrl = "https://wallpapers.com/images/hd/summer-landscape-y7iihichc7om196y.jpg";
      break;
    case "#f84949":
      mainCardUrl = "https://img.freepik.com/premium-photo/abstract-background-with-tropical-beach-ocean-view-clear-water-shore-with-stones-island-palm-trees-summer-landscape-wallpaper-horizontal-illustration-banner-design-generative-ai_9209-12058.jpg";
      break;
    case "#3b82f6":
      mainCardUrl = "https://cdn.wallpapersafari.com/78/98/c9DqJs.jpg";
      break;
  }

  useEffect(() => {
    const handleMouseMovement = (e) => {
      const windowWidth = window.innerWidth / 1.1;
      const windowHeight = window.innerHeight / 1.1;

      setMouseX(e.clientX / windowWidth);
      setMouseY(e.clientY / windowHeight);
    };

    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  const renderCardContent = () => {
    switch (typeOfCard) {
      case "main_card":
        return (
          <div className="w-full relative overflow-hidden">
            <div
              className="main-card  card card-actual-temp w-full bg-[#040D12] rounded-lg minh-[16rem] text-white p-4 pt-0 pb-6"
              style={{
                boxShadow: "rgba(38, 38, 41, 0.2) 0px 7px 19px 0px",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex justify-center bg-black bg-opacity-20 rounded-t-lg text-xl py-4 text-white z-20">
                <h2 className="text-4xl z-20">{title}</h2>
              </div>
              <div className="card-content flex flex-col justify-center pl-4 rounded-b-lg -z-20">
                <div className="flex flex-col gap-4 z-10">
                  <h1 className="text-9xl" style={{ color: colors.primary }}>
                    {Math.round(temperature)}°{" "}
                  </h1>
                  <div className="feels_like flex gap-4">
                    <h2 className="text-4xl">FEELS LIKE </h2>
                    <h2 className="text-4xl" style={{ color: colors.primary }}>
                      {Math.round(weather.main.feels_like)}°
                    </h2>
                  </div>
                  <div className="feels_like flex gap-4">
                    <h2 className="text-4xl">MIN </h2>
                    <h2 className="text-4xl" style={{ color: colors.primary }}>
                      {Math.round(weather.main.temp_min)}°
                    </h2>
                  </div>
                  <div className="feels_like flex gap-4">
                    <h2 className="text-4xl">MAX </h2>
                    <h2 className="text-4xl" style={{ color: colors.primary }}>
                      {Math.round(weather.main.temp_max)}°
                    </h2>
                  </div>
                </div>
              </div>

              {children}
            </div>
            <div className="inside-card absolute top-0 left-0 w-full h-full bg-black opacity-45 rounded-xl" />
            <div
              className="inside-card absolute -top-10 -left-10 w-[110%] h-[110%] bg-center opacity-45 bg-cover rounded-xl"
              style={{
                backgroundImage: `url("${mainCardUrl}")`,
                transform: `translate(${mousex}%, ${mousey}%)`,
              }}
            />
          </div>
        );
      case "aside_card":
        return (
          <a href={link} target="_blank" className="w-full">
            <div className="card card-aside-temp relative w-full bg-[#14171d] rounded-lg h-[20rem] -z-20 text-white flex">
              <div className="card-content flex flex-col justify-centerrounded-b-lg items-center w-full h-full -z-10">
                {children}
              </div>
              <div className="absolute bottom-0 w-full h-[8rem] bg-[#000000c5] rounded-b-xl z-10 flex justify-center items-center">
                <p className="z-30 text-center pl-4 pr-4 font-bold">{title}</p>
              </div>
              <div className="inside-card absolute top-0 left-0 w-full h-full bg-black opacity-45 rounded-xl -z-10"></div>
            </div>
          </a>
        );
      case "loading":
        return (
          <div
            className="card card-loading w-full rounded-lg h-[20vw] bg-[#222831]"
            style={{ boxShadow: "rgba(38, 38, 41, 0.2) 0px 7px 19px 0px" }}
          ></div>
        );
      default:
        return (
          <div
            className="card card-actual-temp w-full bg-[#222831] rounded-lg minh-[16rem] text-white"
            style={{ boxShadow: "rgba(38, 38, 41, 0.2) 0px 7px 19px 0px" }}
          >
            <div className="flex px-6 bg-black bg-opacity-20 rounded-t-lg text-4xl py-3 text-white">
              {title}
            </div>
            <div className="card-content flex flex-col justify-center pl-4 rounded-b-lg">
              {children}
            </div>
          </div>
        );
    }
  };

  return <>{renderCardContent()}</>;
};
