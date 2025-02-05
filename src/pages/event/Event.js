import EventBody from "../../components/Event/EventBody";

import { useParams } from "react-router-dom";

import { useContext } from "react";
import EventContext from "../../store/event-context";

const Event = () => {

    const eventCtx = useContext(EventContext);
    const params = useParams();
    console.log(params.eventId);

    const eventIndex = eventCtx.events.findIndex((event) => event.id === +params.eventId);
    const event = eventCtx.events[eventIndex];

    return (
        <EventBody title={event.title} desc={event.desc} colorId={eventIndex % 5}/>
    );
};

export default Event;