import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // 1. Name
    if (!name.trim()) {
      formErrors.name = "Name is required";
    }

    // 2. Email
    if (!email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    // 3. Phone (10 digits only)
    if (!phone.trim()) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = "Phone must be 10 digits";
    }

    // 4. Password
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    // 5. Confirm Password
    if (!confirmPass) {
      formErrors.confirmPass = "Confirm Password is required";
    } else if (confirmPass !== password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log({ name, email, phone, password });
    }
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h2>Validation Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        {/* Email */}
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        {/* Phone */}
        <input
          type="text"
          placeholder="Enter Phone (10 digits)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p style={{ color: "red" }}>{errors.phone}</p>

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={{ color: "red" }}>{errors.password}</p>

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <p style={{ color: "red" }}>{errors.confirmPass}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;


App.jsx:
import Form from "./core concepts/hello world/Form";
export default function Lapp(){
  return<Form/>
}
