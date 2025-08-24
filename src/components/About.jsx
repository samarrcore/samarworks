import React from "react";

const About = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-background text-text pt-24" id="about">
    <div className="flex flex-col items-center animate-fadeIn">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
        <div className="flex flex-col items-center">
          <div className="terminalBlock">
            <div className="commandLine">
              <span className="prompt">$</span> whoami
            </div>
            <div className="output">
              <p>Hi, I'm Samar Pratap Singh. I love building things and solving problems with code.</p>
              <p>Skills: React, JS, CSS, Terminal Aesthetics, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
