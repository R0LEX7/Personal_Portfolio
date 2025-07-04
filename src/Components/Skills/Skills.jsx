import SkillItems from "./SkillItems";
import { mySkills } from "./AllSkillsConst";
import SlidingAnimation from "../Sub/SlidingAnimation";
const Skills = () => {
  return (
    <div>
      <div className="  min-h-fit px-4 py-10 flex flex-col items-center justify-center gap-3  relative  ">
        <h1 className="text-3xl lg:text-[72px] lg:leading-[88px] lg:mb-6 text-center text-orange-400 font-bold mt-[3rem]">
          Tools Of The Present And Future
        </h1>
        <h2 className=" lg:text-3xl lg:mb-4 text-xl opacity-60 capitalize">
          {" "}
          technologies I Used
        </h2>
        <div className="flex lg:w-[65%] h-fit flex-row justify-evenly flex-wrap mt-4 gap-3 lg:gap-6 items-center py-2">
          {mySkills &&
            mySkills.map((image, index) => (
              <SkillItems
                key={index}
                icon={image?.icon}
                index={index}
                name={image.skill_name}
              />
            ))}
        </div>
      </div>
      <SlidingAnimation title={"Tech Stack"} />
    </div>
  );
};

export default Skills;
