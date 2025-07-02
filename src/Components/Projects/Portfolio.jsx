import { useEffect, useRef, useState } from "react";
import "./portfolio.scss";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import SlidingAnimation from "../Sub/SlidingAnimation";
import { projectsItems as items } from "../../constant";
import ReactPlayer from "react-player/youtube";

const Single = ({ item, pos }) => {


  const ref = useRef();
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  useEffect(() => {
    if (!isInView) {
      setIsPlaying(false); // Pause when not in view
    }
  }, [isInView]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="imageContainer"
            ref={ref}
          >
            <ReactPlayer
              ref={playerRef}
              url={item.video}
              width="100%"
              height={isMobile ? 160 : 370}
              playing={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={true}
              loop={true}
              style={{ borderRadius: "20px", overflow: "hidden" }}
            />
          </motion.div>
          <motion.div className="textContainer" style={{ }}>
            <h2>{pos}. {item.title}</h2>
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
          Crafted {"{" + (items.length - 2) + "+}"} Amazing Projects
        </h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item, ind) => (
        <Single item={item} key={item.id} pos={ind + 1} />
      ))}
    </div>
  );
};

export default Portfolio;
