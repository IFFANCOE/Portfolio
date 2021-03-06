import timelineElements from "./TimelineElements";
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
    let workIconStyles = { background: "rgb(0, 255, 100)"};
    let schoolIconStyles = { background: "rgb(34, 229, 255)" };

    return (
        <div>
            <h1 className="title">Experience</h1>
            <VerticalTimeline >
                {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={isWorkIcon ? <WorkIcon/> : <SchoolIcon/> }
                        >
                            <h3 className="vertical-timeline-element-title" >
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {element.location}
                            </h5>
                            <p id="description">{element.description}</p>
                          
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}

export default Experience;