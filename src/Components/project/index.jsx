import Aos from "aos";
import React, { useEffect } from "react";

import ProjectCartItem from "./projectItem";
import { ProjectDetails } from "./ProjectDetails";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <section className="overflow-hidden relative  mt-40 flex justify-center bg-incoming incoming_bg" data-aos="fade-up">
        <div className="container">
          <div className="grid grid-cols-12 xl:gap-10 section mb-20">
            {ProjectDetails.map((project)=>{
              return (
                <ProjectCartItem picture={project.img_url} title={project.title} btnTitle={project.buttonTitle} details={project.details} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
