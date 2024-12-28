import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";


import momee from '../../beebrozz/momee.png'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

import Logo from '../../bee.jpg'

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={Logo} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
  <h2 className="hiw-title">
    Crafting Exceptional Designs.
    <br /> Innovation Meets Creativity.
  </h2>

  <p className="hiw-subtitle">
    We're redefining what design means, blending artistry with functionality to create unforgettable experiences.
  </p>
</div>


        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={momee}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>




          <p className="text-gray font-semibold text-center mt-3">
             Beebroz Designs
          </p>
        </div>

        
<div className="hiw-text-container">
  <div className="flex flex-1 justify-center flex-col">
    <p className="hiw-text g_fadeIn">
      At Beebroz, we create{" "}
      <span className="text-white">
        cutting-edge, visually stunning designs
      </span>
      that push the boundaries of creativity.
    </p>

    <p className="hiw-text g_fadeIn">
      Our{" "}
      <span className="text-white">
        user-centered design approach
      </span>
      ensures an immersive and intuitive experience for every project.
    </p>
  </div>

  <div className="flex-1 flex justify-center flex-col g_fadeIn">
    <p className="hiw-text">Innovative</p>
    <p className="hiw-bigtext">Creative Solutions</p>
    <p className="hiw-text">Tailored for You</p>
  </div>
</div>


      </div>
    </section>
  );
};

export default HowItWorks;
