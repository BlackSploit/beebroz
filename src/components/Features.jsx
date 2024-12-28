import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

import { explore1Img, explore2Img, exploreVideo } from "../utils";
import mom1 from '../../beebrozz/mom0.png'
import mom2 from '../../beebrozz/mom1.png'
import mom3 from '../../beebrozz/mom2.png'
import mom4 from '../../beebrozz/mom3.png'
import mom5 from '../../beebrozz/mom4.png'
import mom6 from '../../beebrozz/mom5.png'
import mom7 from '../../beebrozz/mom6.png'

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      {
        scale: 0.8,
        opacity: 1,
        ease: "power1",
      },
      {
        scrub: 5.5,
      }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  const handleWhatsAppClick = (momentNumber) => {
    const message = `Hi, I would like more information about Momento ${momentNumber}. Please share more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+919633963434?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading font-light">
            Beebroz in Action
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="flex-center flex-col sm:px-10">
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[100vh]">
                  <img
                    src={mom1}
                    alt="Momento 1"
                    className="feature-video g_grow"
                    onClick={() => handleWhatsAppClick(1)}
                  />
                </div>

                <div className="overflow-hidden flex-1 h-[60vh]">
                  <img
                    src={mom2}
                    alt="Momento 2"
                    className="feature-video g_grow"
                    onClick={() => handleWhatsAppClick(2)}
                  />
                </div>
              </div>

              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[100vh]">
                  <img
                    src={mom6}
                    alt="Momento 6"
                    className="feature-video g_grow"
                    onClick={() => handleWhatsAppClick(6)}
                  />
                </div>

                <div className="overflow-hidden flex-1 h-[60vh]">
                  <img
                    src={mom7}
                    alt="Momento 7"
                    className="feature-video g_grow"
                    onClick={() => handleWhatsAppClick(7)}
                  />
                </div>
              </div>

              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[100vh]">
                  <img
                    src={mom4}
                    alt="Momento 4"
                    className="feature-video g_grow"
                    onClick={() => handleWhatsAppClick(4)}
                  />
                </div>

                <div className="overflow-hidden flex-1 h-[100vh]">
                  <img
                    src={mom5}
                    alt="Momento 5"
                    className="feature-video g_grow"
                    onClick={() => handleWhatsAppClick(5)}
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    At Beebroz, we specialize in{" "}
                    <span className="text-white">
                      crafting unique and innovative designs
                    </span>
                    , combining creativity and technology to bring your vision to life.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Our team focuses on{" "}
                    <span className="text-white">high-quality, user-centered design</span>{" "}
                    that enhances both functionality and aesthetics. You'll see the difference
                    in every project we deliver.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
