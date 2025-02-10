import EventCard from "./EventCard";
import featuredEvents from "../events.json"


interface Event {
    id: number;
    tittle: string;
    date: string;
}

const EventsList = () => {
    console.log(">>>>>>>>>>> featuredEvents", featuredEvents)
    
    return <>
        {featuredEvents.map((value, index) => {
            // console.log("indice", index);
            // console.log("value", value.id);
            return <EventCard key={value.id} title={value.id} date={value.title} price={value.price}/>
        })}
    </>
   
}

export default EventsList