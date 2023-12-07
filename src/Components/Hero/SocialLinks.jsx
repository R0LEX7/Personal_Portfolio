import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

const linkls = [
  {
    icon: <FaGithub />,
    path: "https://github.com/R0LEX7",
  },
  {
    icon: <FiLinkedin />,
    path: "https://www.linkedin.com/in/himanshu-kumar-gola/",
  },
  {
    icon: <FaXTwitter />,
    path: "https://twitter.com/im_Himanshu77",
  },
  {
    icon: <SiLeetcode />,
    path: "https://leetcode.com/himanshugola1111/",
  },
];

const SocialLinks = () => {
  return (
    <div className="social z-10 lg:w-[37rem] grid lg:place-items-start place-items-center ">
      <ul className="flex gap-5">
        {linkls.map((item, ind) => (
          <a href={item?.path} key={ind}>
            <li className="text-2xl cursor-pointer z-20 border-[rebeccapurple] hover:text-[rebeccapurple]  border rounded-full w-10 p-2 h-10">
              {item.icon}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
