import React from "react";
import { Geist } from "next/font/google";
import { header } from "motion/react-client";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import CustomButton from "./CustomButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <header className="shadow-xs">
      <div className="bg-[#1b1a1a] py-2">
        <div className="mx-auto w-11/12 flex items-center justify-between">
          <h3 className="text-sm text-white">Request Call Back</h3>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="size-4 text-blue-500" />
              <h3 className="text-sm text-white">support@simbatv.co.ug</h3>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="size-4 text-blue-500" />
              <h3 className="text-sm text-white">(256) 200 777 220</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 bg-white">
        <nav className="mx-auto w-11/12 flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <h3 className="font-extrabold text-xl uppercase text-primary">
                Simba
              </h3>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Simba TV
            </Link>

            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Simba Fibre
            </Link>

            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>

            <Link href="/" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <CustomButton text="Installations" />

            <CustomButton text="Complaints" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
