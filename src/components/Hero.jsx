import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Logovid from '../../beebrozz/ee.mp4';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(Logovid);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 2,
      delay: 1.5,
    });

    gsap.to("#cta", {
      opacity: 2,
      y: -50,
      delay: 1.5,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <br />
        <p
          id="hero"
          className="hero-title bottom-0 left-0 right-0 z-10 text-white text-center text-4xl font-bold p-4"
          style={{
            background: 'linear-gradient(to right, orange, blue)',
            WebkitBackgroundClip: 'text', // For Safari to clip background to text
            color: 'transparent', // Make the text color transparent so the background shows
          }}
        >
          The most astounding Printing & Designing Hub
        </p>

        {/* Video Section */}
        <div className="flex items-center justify-center w-full h-[60vh] md:h-[70vh]">
  <div className="w-full h-full relative md:w-8/12">
    <video
      autoPlay
      muted
      playsInline
      key={videoSrc}
      className="pointer-events-none w-[100vw] h-auto object-contain md:w-full md:h-full md:object-cover"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  </div>
</div>

        


      </div>
      
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="https://wa.me/919633963434" target="_blank" className="btn">
          Design Now
        </a>
        {/* <p className="font-normal text-xl">From $19/month or $99</p> */}
      </div>
    </section>
  );
};

export default Hero;
