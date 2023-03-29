import Aos from "aos";
import React, { useEffect, useState } from "react";

const playButton = require("../../images/video/play_white.svg").default;
const videoThumbnail = require("../../images/video/nexusVideo.jpg");

function VideoCard() {
  const [play, setPlay] = useState(true);
  const playVideo = () => setPlay(!play);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div
        className="flex justify-center bg-universe-foreground bg-no-repeat fade_bg"
        data-aos="fade-up"
      >
        <section className="relative bg-slate-300 rounded-[55px] bg-opacity-30 sm:w-2/3 pb-5 sm:pb-0">
          <div className="rounded-large container-fluid sm:m-4 mt-5 sm:p-10">
            <h4 className="2xl:text-[80px] md:text-4xl lg:text-5xl text-3xl font-bold text-center text-white mb-5 font-poppins">
              Video
            </h4>
            <div className="rounded-big overflow-hidden 2xl:h-[650px] xl:h-[500x] lg:h-[450px] md:h-[400px] h-[300px] p-5">
              <div className="h-full w-full flex justify-center items-center ">
                {play ? (
                  <>
                    <img
                      width="720"
                      height="405"
                      loading="lazy"
                      src={videoThumbnail}
                      className="h-full w-full  rounded-[45px]"
                      alt="YouTube Thumbnil"
                    />
                    <img
                      onClick={playVideo}
                      width="130"
                      height="130"
                      className="absolute shadow md:h-auto h-14"
                      src={playButton}
                      alt="YouTube Play Button"
                    />{" "}
                  </>
                ) : (
                  <iframe
                    className="rounded-[45px] w-full h-full"
                    title="alter-video"
                    allow="autoplay;"
                    src="https://www.youtube.com/embed/r9jwGansp1E?autoplay=1&mute=1"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default VideoCard;
