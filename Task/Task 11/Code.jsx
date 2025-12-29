Task 11: Online Cab Booking Application using JavaScript Dialog Boxes.

import React from "react";

function CabBooking() {
  const bookCab = () => {
    const name = prompt("Enter your name:");
    if (!name) {
      alert("Booking cancelled!");
      return;
    }

    const pickup = prompt("Enter pickup location:");
    if (!pickup) {
      alert("Booking cancelled!");
      return;
    }

    const drop = prompt("Enter drop location:");
    if (!drop) {
      alert("Booking cancelled!");
      return;
    }

    const cabType = prompt("Enter cab type (Mini / Sedan / SUV):");
    if (!cabType) {
      alert("Booking cancelled!");
      return;
    }

    const confirmBooking = confirm(
      `Confirm Booking Details:\n\n` +
      `Name: ${name}\n` +
      `Pickup: ${pickup}\n` +
      `Drop: ${drop}\n` +
      `Cab Type: ${cabType}`
    );

    if (confirmBooking) {
      alert("✅ Cab booked successfully!");
    } else {
      alert("❌ Booking cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Online Cab Booking</h2>
      <button onClick={bookCab}>Book Cab</button>
    </div>
  );
}

export default CabBooking;

App.jsx:
import React from "react";
import CabBooking from "./CabBooking";

function App() {
  return (
    <div>
      <CabBooking />
    </div>
  );
}

export default App;

