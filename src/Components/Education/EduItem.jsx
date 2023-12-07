import {
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

const EduItem = ({item}) => {


    return (
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#111132", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #663399" }}
          date={item.time}
          iconStyle={{ background: "#111132", color: "#fff" }}
          icon={item?.icon}
        >
          <h3 className="vertical-timeline-element-title">{item?.title} - {item?.org}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item?.grade}</h4>
          <p>{item?.desc}</p>
        </VerticalTimelineElement>
      
    );
}

export default EduItem;