import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import ProjectCartItem from "./projectItem";
const projectItem = require("../../images/project/projectItem1.png");
const projectItem2 = require("../../images/project/projectItem2.png");

function Project() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <React.Fragment>
      <section
        className="overflow-hidden relative  mt-40 flex justify-center bg-incoming incoming_bg"
        data-aos="fade-up"
      >
        <div className="container">
          <div></div>
          <div className="grid grid-cols-12 xl:gap-10 section mb-20">
            <ProjectCartItem
              data="fade-right"
              picture={projectItem}
              title={"Buddies"}
              btnTitle={"View on OpenSea"}
            />
            <ProjectCartItem
              data="fade-left"
              picture={projectItem2}
              title={"NEXUS World Land"}
              btnTitle={"COMING SOON"}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Project;
