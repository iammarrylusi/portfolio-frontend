import React from "react";
// import  from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import { Component } from "react";

const Header = () => (
  <div className="flex flex-col h-screen bg-gray-900">
    <div className="flex justify-between bg-yellow-300 items-center text-white m-8 bg-transparent">
      <Image
        src="/logo.png"
        alt=""
        height={60}
        width={110}
        class="col-lg-2 col-6"
      />
      <ul className="flex list-none gap-10 text-sm ">
        <li>home</li>
        <li>Features</li>
        <li>portfolio</li>
        <li>Resume</li>
        <li>Clients</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>

    <div className="flex  justify-center bg-yellow-300  ">
      <div className="flex  bg-yellow-300  w-2/3 ">
        <div>
          <span className="text-white text-sm">Welcome to my world</span>
          <h1 className="text-white font-semibold text-3xl">
            Hi, I’m Jone Lee a Developer.Professional Coder.Developer.{" "}
          </h1>
          <p className=" text-white">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>

          <p>FIND WITH ME</p>
          <p>BEST SKILL ON </p>
        </div>

        <Image src="/banner-01.png" alt="" height={900} width={900} />
      </div>
    </div>
  </div>
);

export default Header;
