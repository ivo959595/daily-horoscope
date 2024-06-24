import React, { useState, useEffect } from "react";
import axios from "axios";

import ReactLoading from "react-loading";
import aries from "../assets/aries.png";
import cancer from "../assets/cancer.png";
import capricorn from "../assets/capricorn.png";
import gemini from "../assets/gemini.png";
import leo from "../assets/leo.png";
import libra from "../assets/libra.png";
import pisces from "../assets/pisces.png";
import sagittarius from "../assets/sagittarius.png";
import scorpio from "../assets/scorpio.png";
import taurus from "../assets/taurus.png";
import virgo from "../assets/virgo.png";
import aquarius from "../assets/aquarius.png";

const Board = () => {
  const [horoscopeData, setHoroscopeData] = useState({});
  const [signData, setSignData] = useState({});

  const [loading, setLoading] = useState(false);

  const [selectedSign, setSelectedSign] = useState(null);

  useEffect(() => {
    if (selectedSign) {
      fetchHoroscope(selectedSign);
      fetchSignData(selectedSign);
    }
  }, [selectedSign]);

  const fetchHoroscope = async (selectedSign) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://horoscope-astrology.p.rapidapi.com/horoscope",
      params: {
        day: "today",
        sunsign: selectedSign.toLowerCase(),
      },
      headers: {
        "x-rapidapi-key": "2a4daafa84msh16a2a6e42c6bc92p134800jsnbc2e5c155fea",
        "x-rapidapi-host": "horoscope-astrology.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setHoroscopeData(response.data);
    } catch (error) {
      console.error("Error fetching horoscope:", error);
    }
  };

  const fetchSignData = async (selectedSign) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://horoscope-astrology.p.rapidapi.com/sign",
      params: { s: selectedSign.toLowerCase() },
      headers: {
        "x-rapidapi-key": "2a4daafa84msh16a2a6e42c6bc92p134800jsnbc2e5c155fea",
        "x-rapidapi-host": "horoscope-astrology.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setSignData(response.data);
    } catch (error) {
      console.error("Error fetching sign data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (sign) => {
    if (sign === selectedSign) {
      setSelectedSign(null);
    } else {
      setSelectedSign(sign);
    }
  };

  return (
    <div className="mx-auto mt-5">
      <div className="grid lg:grid-cols-4 xs:grid-cols-1 sm:grid-cols-1 gap-4 justify-center mx-4">

        {/* Aries */}
        <div
         className="bg-gray-100 rounded-lg shadow-md text-center p-4 cursor-pointer"
          onClick={() => handleClick("aries")}
        >
          <img
            src={aries}
            alt="Aries"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">Aries</h2>

          <div className="info">
            {selectedSign === "aries" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Taurus */}
        <div
          className="bg-gray-100 rounded-lg shadow-md text-center p-4 cursor-pointer "
          onClick={() => handleClick("taurus")}
        >
          <img
            src={taurus}
            alt="Taurus"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">Taurus</h2>
          <div className="info">
            {selectedSign === "taurus" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Gemini */}
        <div
          className="bg-gray-100 rounded-lg shadow-md text-center p-4  cursor-pointer"
          onClick={() => handleClick("gemini")}
        >
          <img
            src={gemini}
            alt="Gemini"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">Gemini</h2>
          <div className="info">
            {selectedSign === "gemini" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Cancer */}
        <div
          className="bg-gray-100 rounded-lg shadow-md text-center p-4 cursor-pointer"
          onClick={() => handleClick("cancer")}
        >
          <img
            src={cancer}
            alt="Cancer"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">Cancer</h2>
          <div className="info">
            {selectedSign === "cancer" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Leo  */}
        <div
          className="bg-gray-100 rounded-lg shadow-md text-center p-4 cursor-pointer"
          onClick={() => handleClick("leo")}
        >
          <img
            src={leo}
            alt="Leo"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">Leo</h2>
          <div className="info">
            {selectedSign === "leo" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Virgo   */}
        <div
          className="bg-gray-100 rounded-lg shadow-md text-center p-4 cursor-pointer"
          onClick={() => handleClick("virgo")}
        >
          <img
            src={virgo}
            alt="Virgo"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">Virgo</h2>
          <div className="info">
            {selectedSign === "virgo" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Libra */}
        <div
          className="bg-gray-100 rounded-lg shadow-md text-center p-4 cursor-pointer"
          onClick={() => handleClick("libra")}
        >
          <img
            src={libra}
            alt="Libra"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">Libra</h2>
          <div className="info">
            {selectedSign === "libra" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Scorpio */}
        <div
          className="bg-gray-100 rounded-lg shadow-md text-center p-4 cursor-pointer"
          onClick={() => handleClick("scorpio")}
        >
          <img
            src={scorpio}
            alt="Scorpio"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">Scorpio</h2>
          <div className="info">
            {selectedSign === "scorpio" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Sagittarius */}
        <div
          className="bg-gray-100 rounded-lg shadow-md text-center p-4 cursor-pointer"
          onClick={() => handleClick("sagittarius")}
        >
          <img
            src={sagittarius}
            alt="Sagittarius"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">
            Sagittarius
          </h2>
          <div className="info">
            {selectedSign === "sagittarius" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Capricorn  */}
        <div
          className="bg-gray-100 rounded-lg shadow-md text-center p-4 cursor-pointer"
          onClick={() => handleClick("capricorn")}
        >
          <img
            src={capricorn}
            alt="capricorn"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">Capricorn</h2>
          <div className="info">
            {selectedSign === "capricorn" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Aquarius   */}
        <div
          className="bg-gray-100 rounded-lg shadow-md text-center p-4 cursor-pointer"
          onClick={() => handleClick("aquarius")}
        >
          <img
            src={aquarius}
            alt="aquarius"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">Aquarius</h2>
          <div className="info">
            {selectedSign === "aquarius" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Pisces   */}
        <div
          className="bg-gray-100 rounded-lg shadow-md text-center p-4 cursor-pointer"
          onClick={() => handleClick("pisces")}
        >
          <img
            src={pisces}
            alt="pisces"
            className="w-32 h-32 object-cover rounded-lg mb-2 mx-auto"
          />
          <h2 className="text-3xl text-yellow-400 font-bold mb-2">Pisces</h2>
          <div className="info">
            {selectedSign === "pisces" && (
              <div className="info">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <ReactLoading
                      type={"spin"}
                      color={"gray"}
                      height={"5%"}
                      width={"5%"}
                    />
                  </div>
                ) : (
                  <>
                    <div className="text-yellow-400 text-xl">
                      {horoscopeData.horoscope}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      Date Range: {signData.date_range}
                    </div>
                    <div className="text-yellow-400 text-xl">
                      {" "}
                      Lucky Number: {horoscopeData.lucky_number}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Element: {signData.element}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Ruling Planet: {signData.ruling_planet}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Symbol: {signData.symbol}
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Strengths:{" "}
                      <span className="italic">{signData.strengths}</span>
                    </div>
                    <div className="text-yellow-400 text-xl my-2">
                      {" "}
                      Weaknesses: <span> {signData.weaknesses}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
