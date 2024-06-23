import React from "react";
import Card from "./Card";
import backgroundImage from "../assets/Images/background.svg";
import individualImage from "../assets/Images/individual.svg"; // Make sure to add your images to the src/images directory
import businessImage from "../assets/Images/Business.svg";
import travelImage from "../assets/Images/PrintedCards.svg";
import cardsImage from "../assets/Images/Travel.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Carbon Footprint
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            <Link
              to="/individual"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-lg text-center"
            >
              Individual
            </Link>
            <Link
              to="/enterprise"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-lg text-center"
            >
              Enterprise
            </Link>
            <Link
              to="/travel"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-lg text-center"
            >
              Travel
            </Link>
            <Link
              to="/business-card"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-lg text-center"
            >
              Business Card
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
