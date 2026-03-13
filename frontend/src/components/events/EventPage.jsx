import React from "react";
import RoughBox from './RoughBox';
import './EventPage.css';

function EventPage() {
    return(
        <div className="event-page">
            <h1 className="event-title">Event Name</h1>
            <RoughBox width={400} height={300}>
                <p className="event-description">
                    This is a detailed description of the event. It includes all the necessary information that attendees need to know, such as the schedule, location, and any special instructions.
                </p>
            </RoughBox>
        </div>
    );
}
export default EventPage;