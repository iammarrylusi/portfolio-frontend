import React from "react";
// import  from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import { Component } from "react";

// width: 100vw;
//   position: fixed;
//   top: 0;
//   background: white;
//   display: flex;
//   z-index: 500000;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;

const Header = () => (
  <div className="flex flex-col h-screen  ">
    <div className="flex justify-between  items-center text-white m-5 bg-green-800 h-16">
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

    {/* calci-{h-screen-h-16} */}

    <div className="flex  justify-center mt-6 bg-red-300	pb-20">
      <div className="flex   item-center w-4/5">
        <div className=" flex-grow mt-10">
          <span className="text-white text-sm tracking-widest uppercase">
            Welcome to my world
          </span>
          <h1 className="text-white font-semibold text-3xl w-4/5 mb-5 mt-8">
            Hi, I’m Jone Lee a Developer.Professional Coder.Developer.{" "}
          </h1>
          <p className=" text-white w-4/5 mb-5 mt-8 leading-7 ">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <div className="flex justify-between w-1/2  text-white mt-8">
            <p>FIND WITH ME</p>
            <p>BEST SKILL ON </p>
          </div>
        </div>

        <div className=" flex-grow ">
          <Image src="/banner-01.png" alt="" height={1300} width={1000} />
        </div>
      </div>
    </div>
    <div></div>
  </div>
);

export default Header;
