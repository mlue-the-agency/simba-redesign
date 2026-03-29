"use client";

import Counter from "@/components/animata/text/counter";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />

      <section className="bg-background">
        <div className="mx-auto w-11/12 py-18 space-y-6">
          <h1 className="text-center mx-auto text-5xl w-8/12 font-bold text-white">
            Experience the Power of Simba Fibre
            <br />
            <span className="text-blue-600">
              Unleash Blazing Speeds and Unrivaled Connectivity!
            </span>
          </h1>

          <div className="mx-auto w-6/12 flex justify-between gap-4 items-center">
            <div className="">
              <h1 className="text-5xl text-white font-bold text-center leading-0">
                <Counter
                  targetValue={1000}
                  className="text-white text-5xl font-bold"
                />
                + <br />
                <span className="text-lg font-light text-gray-300">
                  Connections
                </span>
              </h1>
            </div>

            <div className="">
              <h1 className="text-5xl text-white font-bold text-center leading-0">
                <Counter
                  targetValue={50}
                  className="text-white text-5xl font-bold"
                />
                + <br />
                <span className="text-lg font-light text-gray-300">
                  Clients
                </span>
              </h1>
            </div>

            <div className="">
              <h1 className="text-5xl text-white font-bold text-center leading-0">
                <Counter
                  targetValue={100}
                  className="text-white text-5xl font-bold"
                />
                + <br />
                <span className="text-lg font-light text-gray-300">
                  Locations
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-10/12 flex gap-8">
          <div className="w-2/5">
            <img
              src="/images/banner.jpg"
              alt="banner"
              className="w-full h-auto"
            />
          </div>

          <div className="w-3/5 space-y-8">
            <div className="space-y-1">
              <p className="text-blue-600 text-sm uppercase font-semibold">
                why choose us
              </p>

              <h3 className="text-4xl font-bold">
                We provide services that are tailored to meet your needs,
                ensuring a seamless and enjoyable experience.
              </h3>
            </div>

            <div className="space-y-2">
              <div className="bg-gray-100 py-6 pl-6 pr-12 rounded-2xl border border-gray-200 space-y-2">
                <h3 className="text-lg font-bold uppercase">Our Expertise</h3>

                <p className="text-gray-500">
                  With years of experience in the industry, we bring a wealth of
                  knowledge and skills to every project.
                </p>
              </div>

              <div className="bg-gray-100 py-6 pl-6 pr-12 rounded-2xl border border-gray-200 space-y-2">
                <h3 className="text-lg font-bold uppercase">
                  Customer Satisfaction
                </h3>

                <p className="text-gray-500">
                  We prioritize our customers' satisfaction and go above and
                  beyond to ensure that their needs are met.
                </p>
              </div>

              <div className="bg-gray-100 py-6 pl-6 pr-12 rounded-2xl border border-gray-200 space-y-2">
                <h3 className="text-lg font-bold uppercase">
                  Innovative Solutions
                </h3>

                <p className="text-gray-500">
                  We are committed to providing innovative solutions that help
                  our clients stay ahead of the curve in a rapidly changing
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
