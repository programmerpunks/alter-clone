import React from "react";
import { useState } from "react";
const videoThumbnail = require("../../images/video/nexusVideo.jpg");
const playButton = require("../../images/video/play_white.svg").default;
function VideoCard() {
  const [play, setPlay] = useState(true);
  const playVideo = () => setPlay(!play);

  return (
    <React.Fragment>
      <div className="flex justify-center bg-universe-foreground bg-no-repeat fade_bg">
        <section className="relative bg-slate-300 rounded-[55px] bg-opacity-30 w-2/3">
          <div className="rounded-large container-fluid m-4 mt-5 p-10">
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
                <div></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default VideoCard;
