EventHandlingExample.jsx:
import { useState } from "react";
export default function EventHandlingExample(){
    const [message,setMessage]=useState("");

const handleChange=(event)=>{
    setMessage(event.target.value)
}

return<>
<h1>EVENT HANDLING EXAMPLE </h1>
<input type="text" onChange={handleChange} placeholder="Enter  a Message"/>
<p>{message}</p>
</>
}

App.jsx:
import EventHandlingExample from "./coreconcept/EventHandlingExample"

export default function myapp(){
  return <EventHandlingExample/>
}
