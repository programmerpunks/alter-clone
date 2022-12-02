import React from "react";
import ProjectCartItem from "./projectItem";
const projectItem = require("../../images/project/projectItem1.png");
const projectItem2 = require("../../images/project/projectItem2.png");

function Project() {
  return (
    <React.Fragment>
      <section className="overflow-hidden relative mt-40 flex justify-center bg-incoming incoming_bg">
        <div className="container">
          <div></div>
          <div className="grid grid-cols-12 xl:gap-10 section ">
            <ProjectCartItem
              picture={projectItem}
              title={"Buddies"}
              btnTitle={"View on OpenSea"}
            />
            <ProjectCartItem
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
