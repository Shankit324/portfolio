"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import Navbar from "/components/navbar.js";
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { GrFormDown } from "react-icons/gr";
import { DiCss3 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
  const about = useRef(null);
  const education = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const func = (e) => {
      setMousePosition({ x: Math.round((e.clientX / window.innerWidth) * 100)%100, y: Math.round((e.clientY / window.innerHeight) * 100)%100 });
    }
    document.addEventListener('mousemove', func);
    return () => {
      document.removeEventListener('mousemove', func);
    }
  }, [])
  return (
    <main id="main" style={{ backgroundImage: `radial-gradient(600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(29, 78, 216, 0.3), transparent 90%)`, top: 0, left: 0, backgroundColor: "black" }}>
      <Navbar a={about} b={education} c={skills} d={projects} e={contact}/>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", paddingTop: "150px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 180, width: 180, border: "5px solid rgba(255, 255, 255, 0.7)", borderRadius: "50%" }}>
          <img style={{ height: 150, width: 150, borderRadius: "50%" }} src="/profile.jpg"></img>
        </div>
        <h1 style={{ color: "#ffffff", textAlign: "center" }}>
          Hello Everyone 👋, I'm <br /><span style={{ fontWeight: '800', color: "lightblue" }}>SHANKIT KUMAR DAS</span><br /><br />
          I'm a <span style={{ maxWidth: "70px", fontWeight: '800', fontFamily: "inherit", color: "lightblue" }}>
            <Typewriter
              words={['Student at IIT KGP...', 'Web Developer...', 'Freelancer...', 'Engineer...', 'Programmer...', 'Web Designer...']}
              loop={{}}
            />
          </span>
          <span style={{ fontWeight: '800', color: 'lightblue' }}>
            <Cursor />
          </span>
        </h1>
        <div style={{ animation: "MoveUpDown 2s ease-in infinite" }} onClick={()=>{
          about.current?.scrollIntoView({
            behavior: 'smooth',
          });
        }}>
          <GrFormDown style={{ color: "white", backgroundColor: "black", marginTop: "40px", width: "50px", height: "50px", cursor: "pointer" }} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="about" ref={about} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", maxWidth: "100%" }}>
        <div id="img">
          <img src="/mern.png"></img>
        </div>
        <div id="part"><h2 id="part1" style={{ width: "100%", color: "lightblue", textAlign: "center", fontSize: "50px" }}>
          LET ME INTRODUCE MYSELF
        </h2><br />
          <p id="part2" style={{ width: "100%", color: "#ffffff", textAlign: "left", fontSize: "20px", margin: "0px 10px 0px 10px" }}>
            Hello! I'm <b >Shankit Kumar Das</b>, a passionate full-stack web developer dedicated to crafting seamless and visually compelling digital experiences. Proficient in both the front-end and back-end. I love to build websites and enjoy turning ideas into web sites, and I have also worked on some cool web projects, which you can checkout in the projects section.
          </p></div>
      </div><br /><br /><hr id="hr" style={{ width: "80%", color: "white" }} /><br /><br />
      <div ref={education} id="education" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", justifyItems: "center" }}>
        <h2 style={{ color: "lightblue", textAlign: "center", fontSize: "50px" }}>
          EDUCATION
        </h2><br />
        <div style={{ backgroundColor: "rgba(185, 205, 245, 0.4)", width: "80%", margin: "5px 5px 5px 5px", borderRadius: "5px" }}>
          <div style={{ backgroundColor: "rgba(194, 143, 50, 0.4)", borderRadius: "5px 5px 0px 0px", color: "white", fontSize: "20px", fontWeight: "500", padding: "5px 5px 5px 15px" }}>2023 - present</div>
          <div style={{ backgroundColor: "rgba(194, 143, 50, 0.55)", borderRadius: "0px 0px 5px 5px", color: "white", fontSize: "25px", fontWeight: "500", padding: "5px 5px 5px 15px" }}>Bachelor's Degree</div>
          <p style={{ color: "darkgrey", textAlign: "left", fontSize: "25px", padding: "5px 5px 5px 15px" }}>Hello! Currently, I am a second-year undergraduate student at the <b>Indian Institute of Technology Kharagpur</b>, West Bengal, pursuing a <b>B.Tech. in Computer Science and Engineering</b>.</p>
        </div>
        <div style={{ backgroundColor: "rgba(185, 205, 245, 0.4)", width: "80%", margin: "5px 5px 5px 5px", borderRadius: "5px" }}>
          <div style={{ backgroundColor: "rgba(194, 143, 50, 0.4)", fontSize: "20px", color: "white", fontWeight: "500", padding: "5px 5px 5px 15px" }}>2021 - 2023</div>
          <div style={{ backgroundColor: "rgba(194, 143, 50, 0.55)", fontSize: "25px", color: "white", fontWeight: "500", padding: "5px 5px 5px 15px" }}>Higher Secondary</div>
          <p style={{ color: "darkgrey", textAlign: "left", fontSize: "25px", padding: "5px 5px 5px 15px" }}>I pursued my higher secondary education at <b>Kendriya Vidyalaya No.- 1, Ishapore (KV1, Ishapore)</b>, West Bengal, a CBSE-affiliated, Central Government-funded school. I successfully completed 11th to 12th grades in the <b>Physics, Chemistry, and Mathematics (PCM) stream.</b></p>
        </div>
        <div style={{ backgroundColor: "rgba(185, 205, 245, 0.4)", width: "80%", margin: "5px 5px 5px 5px", borderRadius: "5px" }}>
          <div style={{ backgroundColor: "rgba(194, 143, 50, 0.4)", fontSize: "20px", color: "white", fontWeight: "500", padding: "5px 5px 5px 15px" }}>2016 - 2021</div>
          <div style={{ backgroundColor: "rgba(194, 143, 50, 0.55)", fontSize: "25px", color: "white", fontWeight: "500", padding: "5px 5px 5px 15px" }}>Upper Primary</div>
          <p style={{ color: "darkgrey", textAlign: "left", fontSize: "25px", padding: "5px 5px 5px 15px" }}>I pursued my upper primary education at <b>Kendriya Vidyalaya No.- 1, Ishapore (KV1, Ishapore)</b>, West Bengal, a CBSE-affiliated Central Government-funded school. I successfully completed the 6th to 10th grades.</p>
        </div><br /><br /><hr style={{ width: "80%", color: "white" }} /><br /><br />
      </div>
      <div ref={skills} id="skills"><h2 style={{ width: "100%", color: "lightblue", textAlign: "center", fontSize: "50px" }}>
        SKILLS
      </h2></div><br />
      <div id="education" style={{ display: "grid", grid: "auto / auto auto auto", justifyContent: "space-around", alignItems: "space-around" }}>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><DiCss3 style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>CSS</p></span>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><DiBootstrap style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>Bootstrap</p></span>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><DiGithubBadge style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>GitHub</p></span>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><DiHtml5 style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>HTML</p></span>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><DiJavascript1 style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>Javascript</p></span>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><DiMongodb style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>Mongo DB</p></span>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><DiNodejsSmall style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>Node JS</p></span>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><DiSass style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>SASS</p></span>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><DiReact style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>React JS</p></span>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><SiExpress style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>Express JS</p></span>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><SiTailwindcss style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>Tailwind CSS</p></span>
        <span style={{ backgroundColor: "black", color: "grey", display: "inline-grid", height: "100px", width: "100px", borderRadius: "5px", margin: "70px 0px 70px 0px" }}><DiPython style={{ height: "100px", width: "100px" }} /><br /><p style={{ color: "#c18f32", fontSize: "20px", fontWeight: "500", textAlign: "center" }}>Python</p></span>
      </div><br /><br /><br /><br /><hr style={{ width: "80%", color: "white" }} /><br /><br />
      <div ref={projects} id="projects"><h2 style={{ width: "100%", color: "lightblue", textAlign: "center", fontSize: "50px" }}>
        PROJECTS
      </h2></div><br />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <a class="y" style={{ textDecoration: "none", color: "black",  display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", justifyItems: "center"  }} href="https://github.com/Shankit324/chatroom.git">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "40%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2 class="underline" style={{ color: "#c18f32", fontSize: "25px", fontWeight: "500" }}>
              CHATROOM
            </h2>
            <p style={{ color: "white", textAlign: "left" }}>
              A chat room is an online platform that enables users to communicate with each other in real time. Chat rooms are typically hosted on a server with an internet connection, enabling members from around the world to hold conversations about various topics.
            </p>
          </div>
          <img class="img1" src="/chat.png" style={{ width: "30%", height: "250px", borderRadius: "5px" }}></img>
        </div>
        </a>
        <br /><hr style={{ color: "white", width: "50%" }} /><br />
        <a class="y" style={{ textDecoration: "none", color: "black",  display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", justifyItems: "center"  }} href="https://github.com/Shankit324/flappy_bird.git">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "40%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2 class="underline" style={{ color: "#c18f32", fontSize: "25px", fontWeight: "500" }}>
              FLAPPY-BIRD GAME
            </h2>
            <p style={{ color: "white", textAlign: "left" }}>
              Flappy Bird is an arcade-style game in which the player controls the bird Faby, which moves persistently to the right. The player is tasked with navigating Faby through pairs of pipes that have equally sized gaps placed at random heights.
            </p>
          </div>
          <img class="img1" src="/game.webp" style={{ width: "30%", height: "250px", borderRadius: "5px" }}></img>
        </div></a>
        <br /><hr style={{ color: "white", width: "50%" }} /><br />
        <a class="y" style={{ textDecoration: "none", color: "black",  display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", justifyItems: "center"  }} href="https://github.com/Shankit324/login.git">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "40%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2 class="underline" style={{ color: "#c18f32", fontSize: "25px", fontWeight: "500" }}>
              LOGIN PAGE
            </h2>
            <p style={{ color: "white", textAlign: "left" }}>
              A login form utilizes the credentials of a user, in order to authenticate their access. It generally consists of the typical username or email and password. But more fields can be added to improve the site's security.
            </p>
          </div>
          <img class="img1" src="/login.jpg" style={{ width: "30%", height: "250px", borderRadius: "5px" }}></img>
        </div>
        </a><br /><br /><hr style={{ color: "white", width: "80%" }} /><br />
        </div>
        <div id="c" style={{ width: "100%", height: "250px", backgroundImage: "url(" + "/hill.jpg" + ")", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div ref={contact} id="contact" style={{ width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <h2 style={{ color: "white", textAlign: "center", fontSize: "30px" }}>
              CONTACT ME
            </h2>
            <div id="footer" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{ color: "#c18f32", borderRadius: "5px", zIndex: 2, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", fontSize: "1%"}}><MdEmail style={{ height: "30px", width: "30px" }} /><p style={{ color: "#c18f32", fontSize: "15px", fontWeight: "500", textAlign: "center" }}>kdshankit11058@gmail.com</p></div>
            <div style={{ color: "#c18f32", borderRadius: "5px", zIndex: 2,  display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", fontSize: "1%"}}><FaWhatsapp style={{ height: "30px", width: "30px" }} /><p style={{ color: "#c18f32", fontSize: "15px", fontWeight: "500", textAlign: "center" }}>+918777479150</p></div>
            <div style={{ color: "#c18f32", borderRadius: "5px", zIndex: 2, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", fontSize: "1%"}}><FaLocationDot style={{ height: "30px", width: "30px" }} /><p style={{ color: "#c18f32", fontSize: "15px", fontWeight: "500", textAlign: "center" }}>Kharagpur, West Bengal</p></div>
            </div>
          </div>
        </div>
      <div id="t" style={{textAlign:"center", color: "white", padding: "15px 0px 15px 0px", opacity: 0.7}}>© 2023 - Developed by Shankit Kumar Das. All Rights Reserved.</div>
    </main >
  );
}