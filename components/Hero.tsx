import { Geist } from "next/font/google";
import React from "react";
import Navbar from "./Navbar";
import { BubbleBackground } from "./animate-ui/components/backgrounds/bubble";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Button } from "@base-ui/react";
import CustomButton from "./CustomButton";
import { log } from "node:console";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className="relative h-[90vh]">
      <Nav />

      <BubbleBackground
        className="bg-transparent absolute top-0 left-0 bottom-0 right-0"
        colors={{
          first: "255, 255, 255",
          second: "225, 225, 225",
          third: "59, 130, 246",
          fourth: "38, 79, 145",
          fifth: "255, 0, 0",
          sixth: "202, 0, 81",
        }}
      />

      <div className="relative z-10 mx-auto w-11/12 h-full">
        <div className="py-26" />

        <CarouselSlider />
      </div>
    </section>
  );
};

export default Hero;

function Nav() {
  return (
    <div className="relative z-10">
      <Navbar />
    </div>
  );
}

function CarouselSlider() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();

  const slides = [
    {
      title: "Unlock unlimited entertainment with Simba TV",
      description:
        "Experience the best of television with Simba TV. Enjoy a wide range of channels, on-demand content, and seamless streaming for the ultimate entertainment experience.",
      link: "/tv",
    },
    {
      title: "Experience lightning-fast internet with Simba Fibre",
      description:
        "Say goodbye to buffering and slow connections with Simba Fibre. Enjoy blazing-fast internet speeds, reliable connectivity, and seamless streaming for all your online needs.",
      link: "/fibre",
    },
    {
      title:
        "All-in-one entertainment and connectivity with Simba TV and Fibre",
      description:
        "Simba TV and Fibre keep you connected to the world of entertainment and the digital realm. Experience the best of both worlds with our comprehensive services.",
      link: null,
    },
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", (e) => {
      setActiveSlide(e.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex relative">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-3/5"
        setApi={setApi}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="p-4 space-y-4">
                <div className="space-y-1">
                  <h1 className={`text-6xl font-bold ${geistSans.className}`}>
                    {slide.title}
                  </h1>
                  <p className=" text-gray-500">{slide.description}</p>
                </div>

                {slide.link && (
                  <Link href={slide.link}>
                    <CustomButton text="Learn More" />
                  </Link>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative w-2/5">
        <div className="absolute bottom-0 right-0 flex items-center gap-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-1 rounded-sm bg-gray-200 mx-1 cursor-pointer hover:bg-gray-500 duration-150 ease-in-out ${activeSlide === index ? "bg-primary h-2" : ""}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
