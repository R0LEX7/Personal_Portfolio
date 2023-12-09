import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EduItem = ({ item }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#111132", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #663399" }}
      date={item.time}
      iconStyle={{ background: "#111132", color: "#fff" }}
      icon={item?.icon}
    >
      <h3 className="mb-2 vertical-timeline-element-title text-2xl">
        {item?.title}
      </h3>
      <ul className="text-sm  lg:text-base opacity-75">
        <li className="my-1  vertical-timeline-element-title">● {item?.org}</li>
        {item.grade && (
          <li className="my-1   vertical-timeline-element-title">
            ● Qualified with a score of {item?.grade}
          </li>
        )}{" "}
        <li className="my-1   vertical-timeline-element-title">
          ● {item?.desc}
        </li>
      </ul>
    </VerticalTimelineElement>
  );
};

export default EduItem;
