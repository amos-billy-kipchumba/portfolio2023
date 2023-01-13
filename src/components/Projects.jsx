import React, { useEffect, useState } from "react";
import { btns } from "../Data";
import { projects } from "../Data";
import { motion, AnimatePresence } from "framer-motion";
import './Project.css'
const Projects = () => {
  const [filterImages, setFilterImages] = useState([]);
  useEffect(() => {
    setFilterImages(projects);
  }, []);
  const handleClick = (e) => {
    let btnType = e.target.value;
    const newFilterImages = projects.filter(
      (project) => project.value === btnType
    );
    btnType !== "all"
      ? setFilterImages(newFilterImages)
      : setFilterImages(projects);
  };

  const [number, setNumber] = useState(null);

  const handleAddOverlay = (e, index) => {
    setNumber(index);
  }

  const handleRemoveOverlay = () => {
    setNumber(null);
  }
  return (
    <div className="section" id="projects">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Projects</h2>
        <div className=" w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="mt-4 flex flex-wrap gap-8">
        {btns.map((btn) => {
          return (
            <button key={btn.id} value={btn.value} onClick={handleClick}>
              {btn.name}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-3">
          {filterImages.length === 0 ? 
            <p>No project yet</p>
            :
            <>
              {filterImages &&
                filterImages.map((filterImage, index) => {
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.3 } }}
                      key={filterImage.id}
                      className="mt-9 md:mt-0 relative rounded-md"
                      onMouseEnter={(e) => handleAddOverlay(e, index + 1)}
                      onMouseLeave={handleRemoveOverlay}
                    >
                      <motion.img src={filterImage.image} alt="" className="w-full md:min-h-[30vh] object-cover rounded-md" />
                        <div className={number === index + 1 ? "absolute top-0 left-0 bg-gray-900/40 flex flex-col w-full h-full justify-center items-center rounded-md transMe" : "absolute top-0 left-0 bg-gray-900/30 flex-col w-full h-full justify-center items-center rounded-md hidden" } >
                          <button className="text-white bg-red-400 m-auto p-2 rounded-md">View app</button>
                          <a href='' className="text-white mb-2">{filterImage.title}</a>
                        </div>
                    </motion.div>
                  );
                })}
            </>
          }
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
