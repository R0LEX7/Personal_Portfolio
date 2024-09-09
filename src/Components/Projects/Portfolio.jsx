import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SlidingAnimation from "../Sub/SlidingAnimation";
import { projectsItems } from "../../constant";
import ReactPlayer from "react-player/lazy";

const item = projectsItems.reverse();

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {/* <img src={item.img} alt="" /> */}
            {/* // Lazy load the YouTube player */}
            <ReactPlayer url={item.video} controls={true} width={"100%"}  height={320} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <ul className="stack">
              {item?.stack.map((st, i) => (
                <li className="stack-item" key={i}>
                  {st}
                </li>
              ))}
            </ul>
            <p>{item.desc}</p>
            <a href={item?.link}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
      <SlidingAnimation title={item?.title} />
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 className=" z-10 text-3xl lg:text-[72px] lg:leading-[88px] lg:mb-10 text-center text-orange-400 font-bold mt-[3rem]">
          Successful Projects I'm Proud Of
        </h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
