import React, { useState, useEffect } from "react";
export default function App() {
const [name, setName] = useState(0);
const [mobile, setMobile] = useState("");
const [darkMode, setDarkMode] = useState(false);
// let dependency = { name, mobile };==>wrong solution 

//the dependency must be variables or states that put in the array of dependency in useEffect not object.
useEffect(() => {
console.log("UseEffect is called");
}, [ name, mobile ]);//==>right solution
return (
    <div className={`container ${darkMode ? "bgDark" : "bgLight"}`}>
    <input
    type="text"
    id="name"
    placeholder="Name"
    onChange={(e) => setName(e.target.value)}
    />
    <input
    type="text"id="mobile"
    placeholder="Mobile"
    onChange={(e) => setMobile(e.target.value)}
    />
    <div className="darkmode">
    <input
    type="checkbox"
    id="darkMode"
    onChange={() => setDarkMode(!darkMode)}
    />
    Enable dark mode
    </div>
    </div>
    );
}