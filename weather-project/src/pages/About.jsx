import React from "react";
import { Banner } from "../components/Banner";

export const About = () => {
  return (
    <>
      <Banner title={"About Page"} />
      <main className="w-3/4 flex mt-4 h-auto m-auto relative justify-center flex-col text-white text-2xl">
        <h1 className="about-titles text-[#222831] w-auto m-auto p-4 py-1 cursor-pointer text-4xl mt-2">
          Introduction
        </h1>
        <div className="w-full bg-[#222831] p-4 rounded">
          <p className="w-full">
            Welcome to our weather forecast page. This project is developed in
            React and aims to provide accurate and up-to-date weather data based
            on current weather conditions. Additionally, we integrate relevant
            news linked to the current weather so that you can stay informed
            about events worldwide related to weather.
          </p>
        </div>

        <h1 className="about-titles text-[#222831] w-auto m-auto p-4 py-1 cursor-pointer text-4xl mt-2">
          Used
        </h1>
        <div className="w-full bg-[#222831] p-4 rounded">
          <p>
            We have used the News API and Weather API to obtain the necessary
            data.
          </p>
          <br />
          <h3 className="h3-about bg-cyan-600 w-48 text-center">News API</h3>
          <p>
            News API is used to dynamically obtain news based on current weather
            conditions. We integrate temperature, wind, and rain to filter
            relevant news articles. You can find more information about the News
            API on its{" "}
            <a href="https://newsapi.org/" className="text-cyan-600">
              official site
            </a>
            .
          </p>
          <br />
          <h3 className="h3-about bg-cyan-600 w-48 text-center">Weather API</h3>
          <p>
            The Weather API is used to obtain current weather data, including
            temperature, wind, and rain conditions. This data is used to
            personalize the user experience by displaying relevant news. More
            information about the Weather API is available on its{" "}
            <a href="https://www.weatherapi.com/" className="text-cyan-600">
              official site
            </a>
            .
          </p>
        </div>
        <h1 className="about-titles text-[#222831] w-auto m-auto p-4 py-1 cursor-pointer text-4xl mt-2">
          Components Created
        </h1>
        <div className="w-full bg-[#222831] p-4 rounded">
          <p>
            The project is composed of several React components. Here is a brief
            description of some of them:
          </p>

          <ul>
            <li>
              <h3 className="h3-about bg-cyan-600 w-48 text-center">Banner</h3>A
              reusable component that displays a banner at the top of the page.
            </li>
            <br />
            <li>
              <h3 className="h3-about bg-cyan-600 w-48 text-center">Button</h3>This
              component is in charge of managing the variety of distinct buttons
              we have such as info buttons for example.
            </li>
            <br />
            <li>
              <h3 className="h3-about bg-cyan-600 w-48 text-center">Header</h3>The header you can see on every page you step at.
            </li>
            <br />
            <li>
              <h3 className="h3-about bg-cyan-600 w-48 text-center">Card</h3>A generic
              component used to display individual news and weather items.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
