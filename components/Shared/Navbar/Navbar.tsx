"use client";

import React, { useState, useEffect } from "react";
import bgBanner from "@/assets/pexels-mart-production-8869360.jpg";
import logo from "@/assets/next-nomad-logo-transparent.png";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const NavItemArray = ["Home", "Packages", "Dashboard", "Blogs", "Sign In"];

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <div
      className='xl:h-[100vh] h-[50vh] bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url(${bgBanner.src})`,
      }}
    >
      <header
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
        className='fixed w-full  h-[10rem]'
      >
        <div className='relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]'>
          <nav
            aria-label='main navigation'
            className='flex h-[5rem] items-stretch justify-between font-medium text-white'
            role='navigation'
          >
            {/*      <!-- Brand logo --> */}
            <a
              id='WindUI'
              aria-label='WindUI logo'
              aria-current='page'
              className='flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1'
              href='javascript:void(0)'
            >
              <Image alt='logo' src={logo.src} width={200} height={80} />
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label='Toggle navigation'
            >
              <div className='absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform'>
                <span
                  aria-hidden='true'
                  className='absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300'
                ></span>
                <span
                  aria-hidden='true'
                  className='absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300'
                ></span>
                <span
                  aria-hidden='true'
                  className='absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300'
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role='menubar'
              aria-label='Select page'
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain  md:bg-transparent px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {NavItemArray.map((item, index) => (
                <li role='none' key={index} className='flex items-stretch'>
                  <Link
                    href=''
                    role='menuitem'
                    aria-haspopup='false'
                    className='flex items-center gap-2 py-4 transition-colors duration-300 hover:text-cyan-500 focus:text-cyan-600 focus:outline-none focus-visible:outline-none lg:px-8'
                  >
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
