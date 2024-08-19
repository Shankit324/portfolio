"use client";

import React from 'react';
import { GoListUnordered } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = (props) => {
    const [i, setI] = useState(0);
    const handle1 = (e) => {
        e.preventDefault();
        document.getElementById('toggle').style.display = "flex";
        document.getElementById('toggle').style.flexDirection = "column";
        document.getElementById('toggle').style.justifyContent = "center";
        document.getElementById('toggle').style.alignItems = "center";
        setI(1);
    }
    const handle2 = (e) => {
        e.preventDefault();
        document.getElementById('toggle').style.display = "none";
        setI(0);
    }
    return (
        <footer style={{ position: "absolute", top: 0, right: 0, height: "70px", width: "100%", display: "flex", flexDirection: "column", alignItems: "right", justifyContent: "centre", zIndex: 20, opacity: 0.8 }}>
            <div>
                {(!i) ? <div style={{ width: "100%", height: "70px", height: "70px", display: "flex", alignItems: "center", justifyContent: "right", backgroundColor: "black" }}>
                    <button onClick={handle1} style={{ width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 20, cursor: "pointer", opacity: 0.75, borderRadius: "5px" }}><GoListUnordered style={{ width: 40, height: 40 }} /></button>
                </div> : <div style={{ maxWidth: "100%", height: "70px", height: "70px", display: "flex", alignItems: "center", justifyContent: "right", backgroundColor: "black" }}>
                    <button onClick={handle2} style={{ width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 20, cursor: "pointer", opacity: 0.75, borderRadius: "5px" }}><GrFormClose style={{ width: 40, height: 40 }} /></button>
                </div>}
            </div>
            <div id="toggle" style={{ width: "100%", backgroundColor: "black", display: "none", zIndex: 1 }}>
                <span onClick={(e) => {
                    props.a.current?.scrollIntoView({
                        behavior: 'smooth',
                    })
                    e.preventDefault();
                    document.getElementById('toggle').style.display = "none";
                    setI(0);
                }} style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: "20px", cursor: "pointer" }}>About</span>
                <hr style={{ width: "80%" }} />
                <span onClick={(e) => {
                    props.b.current?.scrollIntoView({
                        behavior: 'smooth',
                    })
                    e.preventDefault();
                    document.getElementById('toggle').style.display = "none";
                    setI(0);
                }} style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: "20px", cursor: "pointer" }}>Education Details</span>
                <hr style={{ width: "80%" }} />
                <span onClick={(e) => {
                    props.c.current?.scrollIntoView({
                        behavior: 'smooth',
                    })
                    e.preventDefault();
                    document.getElementById('toggle').style.display = "none";
                    setI(0);
                }} style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: "20px", cursor: "pointer" }}>Skill</span>
                <hr style={{ width: "80%" }} />
                <span onClick={(e) => {
                    props.d.current?.scrollIntoView({
                        behavior: 'smooth',
                    })
                    e.preventDefault();
                    document.getElementById('toggle').style.display = "none";
                    setI(0);
                }} style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: "20px", cursor: "pointer" }}>Project</span>
                <hr style={{ width: "80%" }} />
                <span onClick={(e) => {
                    props.e.current?.scrollIntoView({
                        behavior: 'smooth',
                    })
                    e.preventDefault();
                    document.getElementById('toggle').style.display = "none";
                    setI(0);
                }} style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: "20px", cursor: "pointer" }}>Contact me</span>
                <hr style={{ width: "80%" }} />
                <br />
            </div>
        </footer>
    )
}

export default Navbar;