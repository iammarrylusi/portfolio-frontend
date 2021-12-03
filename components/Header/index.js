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
  <div>
    <header>
      <nav className="flex justify-between  items-center text-white m-5  h-16  z-50 bg-gray-900">
        <Image
          src="/logo.png"
          alt=""
          height={60}
          width={110}
          class="col-lg-2 col-6"
        />
        <ul className="flex list-none gap-10 text-sm ">
          <li className="">home</li>
          <li>Features</li>
          <li>portfolio</li>
          <li>Resume</li>
          <li>Clients</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
    <main>
      <div className="flex  justify-center m-5 px-20  h-screen  bg-gray-900	">
        <div className="flex   item-center ">
          <div className=" flex-grow mt-10">
            <span className="text-white text-sm tracking-widest uppercase">
              Welcome to my world
            </span>
            <h1 className="text-white font-semibold text-3xl w-4/5 pb-5 pt-8">
              Hi, I’m Jone Lee a Developer.Professional Coder.Developer.{" "}
            </h1>
            <p className=" text-white w-4/5 mb-5 pt-8 leading-7 ">
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>
            <div className="flex justify-between w-1/2  text-white pt-8">
              <p>FIND WITH ME</p>
              <p>BEST SKILL ON </p>
            </div>
          </div>

          <div className=" flex-grow ">
            <Image src="/banner-01.png" alt="" height={1200} width={1000} />
          </div>
        </div>
      </div>
    </main>
    <section className="mx-5 bg-gray-900 h-screen px-10 text-white">
      <div className="  text-red-500  ">
        <p className="mt-10">FEATURES</p>
      </div>
      <h1 className="text-black font-semibold text-3xl   pt-2 text-white">
        WHAT DO I DO
      </h1>

      <div className="flex justify-around  ">
        <div className="bg-gray-700 w-2/3 p-10 m-10 cursor-pointer  bg-gray-700 ">
          <h1 className="font-semibold text-l ">Business Strategy</h1>
          <p className="text-sm pt-3">
            I throw myself among the tall grass by the stream as i lie close to
            the earth.
          </p>
        </div>
        <div className="bg-gray-700 w-2/3 p-10 m-10  cursor-pointer ">
          <h1 className="font-semibold text-l ">App Development</h1>
          <p className="text-sm pt-3">
            It uses a latin of overa 200 latin words,combine with a handfull of
            model sentence.
          </p>
        </div>

        <div className=" w-2/3 p-10 m-10 bg-gray-700 cursor-pointer hover:bg-gray-5- ">
          <h1 className="font-semibold text-xl pr-4 ">App Development</h1>
          <p className="text-sm pt-3">
            I throw myself among the tall grass by the stream as i lie close to
            the earth.
          </p>
        </div>
      </div>

      <div className="flex justify-around ">
        <div className=" w-2/3 p-10 m-10 bg-gray-700 cursor-pointer ">
          <h1 className="font-semibold text-l ">Mobile App</h1>
          <p className="text-sm pt-3">
            I throw myself among the tall grass by the stream as i lie close to
            the earth.
          </p>
        </div>
        <div className=" w-2/3 p-10 m-10 cursor-pointer bg-gray-700">
          <h1 className="font-semibold text-l ">CEO Marketing</h1>
          <p className="text-sm pt-3">
            It uses a latin of overa 200 latin words,combine with a handfull of
            model sentence.
          </p>
        </div>

        <div className=" w-2/3 p-10 m-10 cursor-pointer bg-gray-700">
          <h1 className="font-semibold text-base pr-4 ">
            Personal portfolio April
          </h1>
          <p className="text-sm pt-3 ">
            I throw myself among the tall grass by the stream as i lie close to
            the earth.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Header;
