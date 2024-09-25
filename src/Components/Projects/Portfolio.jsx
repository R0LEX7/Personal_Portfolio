import { useEffect, useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SlidingAnimation from "../Sub/SlidingAnimation";
import { projectsItems } from "../../constant";
import ReactPlayer from "react-player/youtube";

const item = projectsItems.reverse();

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <ReactPlayer
              url={item.video}
              width={"100%"}
              playing={true}
              controls={true}
              loop={true}
              height={isMobile ? "auto" : 400}
              style={{ borderRadius: "20px" }}
            />
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
          Successful {"{" + (item.length - 2) + "+}"} Projects I'm Proud Of
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
