// Home.jsx
import React from "react";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useWeather } from "../providers/WeatherProvider";
import { usePosition } from "../providers/LocationProvider";
import { Banner } from "../components/Banner";
import { useNews } from "../providers/NewsProvider";
import sunriseIcon from "../assets/icons/sunrise.svg";
import sunsetIcon from "../assets/icons/sunset.svg";

export const Home = () => {
  const { position } = usePosition();
  const { weather, country, windStatus } = useWeather();
  const { news } = useNews();

  const ifLargerCut = (text, length) => {
    if (text.length > length) {
      return text.slice(0, length) + "...";
    }
    return text;
  };

  return (
    <>
      <Banner title={"Weather - Web"} />
      <main className="w-3/4 flex mt-4 h-auto m-auto relative">
        {!weather ? (
          <>
            <div className="absolute top-[10%] left-2/4 p-2 rounded">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <section className="main-content w-2/3 flex justify-start p-4 pl-0 pr-0 flex-col gap-4 items-center">
              <Card typeOfCard={"loading"} />
              <Card typeOfCard={"loading"} />
              <Card typeOfCard={"loading"} />
              <Card typeOfCard={"loading"} />
              <Card typeOfCard={"loading"} />
            </section>
            <aside className="w-1/3 flex justify-start gap-4 p-4 pr-0 flex-col items-center">
              <Card typeOfCard={"loading"} />
              <Card typeOfCard={"loading"} />
              <Card typeOfCard={"loading"} />
            </aside>
          </>
        ) : (
          <>
            <section className="main-content w-2/3 flex justify-start p-4 pl-0 pr-0 flex-col gap-4 items-center">
              <Card
                title={"Temperature on " + country + ", " + weather.name}
                weather={weather}
                description={"Lugar " + weather.name}
                temperature={weather.main.temp}
                typeOfCard={"main_card"}
              />

              <Card
                title={"Wind on " + weather.name}
                weather={weather}
                temperature={"temp"}
                typeOfCard={"other"}
                children={
                  <div className="flex flex-col gap-4 p-4 justify-center">
                    <div className="flex gap-4">
                      <h2 className="text-2xl">SPEED </h2>
                      <h2 className="text-2xl text-[#86c4c7]">
                        {weather.wind.speed} m/s
                      </h2>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-2xl ">DIRECTION </h2>
                      <h2 className="text-2xl text-[#86c4c7]">
                        {weather.wind.deg} °
                      </h2>
                    </div>
                    <div className="flex gap-4">
                      <h2 className="text-2xl ">STATUS </h2>
                      <h2 className="text-2xl text-[#86c4c7]">
                        {windStatus.status}
                      </h2>
                    </div>
                    <Button
                      text="Get wind status"
                      onClick={() => alert(windStatus.description)}
                      typeOfButton={"info"}
                    />
                  </div>
                }
              />
              <Card
                title={"Humidity and pressure on " + weather.name}
                weather={weather}
                temperature={"temp"}
                typeOfCard={"other"}
                children={
                  <div className="flex flex-col gap-4 p-4 justify-center">
                    <div className="flex gap-4 items-center">
                      <h2 className="text-2xl">HUMIDITY </h2>
                      <h2 className="text-2xl text-[#86c4c7]">
                        {weather.main.humidity}%
                      </h2>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${weather.main.humidity}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <h2 className="text-2xl ">PRESSURE </h2>
                      <h2 className="text-2xl text-[#86c4c7]">
                        {weather.main.pressure} hPa
                      </h2>
                      {/* <i className="fas fa-tachometer-alt text-[#86c4c7]"> </i> */}
                    </div>
                  </div>
                }
              />
              <Card
                title={"Sunrise and sunset on " + weather.name}
                weather={weather}
                temperature={"temp"}
                typeOfCard={"other"}
                children={
                  <div className="flex flex-col gap-4 p-4 justify-center">
                    <div className="flex gap-4">
                      <img
                        src={sunriseIcon}
                        alt="Sunrise icon"
                        className="w-8 h-8"
                      />
                      <h2 className="text-2xl">SUNRISE </h2>
                      <h2 className="text-2xl text-[#86c4c7]">
                        {new Date(
                          weather.sys.sunrise * 1000
                        ).toLocaleTimeString()}
                      </h2>
                    </div>
                    <div className="flex gap-4">
                      <img
                        src={sunsetIcon}
                        alt="Sunset icon"
                        className="w-8 h-8"
                      />
                      <h2 className="text-2xl ">SUNSET </h2>
                      <h2 className="text-2xl text-[#86c4c7]">
                        {new Date(
                          weather.sys.sunset * 1000
                        ).toLocaleTimeString()}
                      </h2>
                    </div>
                  </div>
                }
              />
              <Card
                title={"Clouds on " + weather.name}
                weather={weather}
                temperature={"temp"}
                typeOfCard={"other"}
                children={
                  <div className="flex flex-col gap-4 p-4 justify-center">
                    <div className="flex gap-4">
                      <h2 className="text-2xl">CLOUDINESS </h2>
                      <h2 className="text-2xl text-[#86c4c7]">
                        {weather.clouds.all} %
                      </h2>
                    </div>
                    <div className="flex gap-4 items-center">
                      <h2 className="text-2xl ">DESCRIPTION </h2>
                      <h2 className="text-2xl text-[#86c4c7]">
                        {weather.weather[0].description}
                      </h2>
                      <img
                        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                        alt="Weather icon"
                      />
                    </div>
                  </div>
                }
              />
            </section>
            <aside className="w-1/3 flex justify-start gap-4 p-4 pr-0 flex-col items-center">
              {news
                .filter((article) => article.image_url)
                .slice(0, 3)
                .map((article, index) => (
                  <Card
                    link={article.url}
                    key={index}
                    title={
                      <p>
                        {ifLargerCut(article.title, 47)}
                      </p>
                    }
                    weather={weather}
                    temperature={"temp"}
                    typeOfCard={"aside_card"}
                    children={
                      <div className="card-content flex flex-col justify-center w-full h-full items-center">
                        {article.image_url && (
                          <img
                            src={article.image_url}
                            alt={article.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        )}
                      </div>
                    }
                  />
                ))}
            </aside>
          </>
        )}
      </main>
    </>
  );
};
