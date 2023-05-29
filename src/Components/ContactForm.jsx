import React, { useState } from "react";

export default function ContactForm() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
  });

  const InputEvent = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const Submited = (event) => {
    event.preventDefault();
    setInput({
      name: "",
      email: "",
      message: "",
      mobile: "",
    });
    alert("Form Submitted \nwe will contact you soon.");
  };


  return (
    <>
      <div className="container py-lg-5">
        <form
          className="justify-content-center"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "5rem 20rem",
            fontSize: "1.3rem",
          }}
          onSubmit={Submited}
        >
          <input
            className="inputEdits"
            type="text"
            name="name"
            id="name"
            value={input.name}
            placeholder="Enter Your Name"
            onChange={InputEvent}
            required
          />
          <input
            className="inputEdits"
            type="number"
            name="mobile"
            id="mobile"
            value={input.mobile}
            placeholder="Enter Your Mobile Number"
            onChange={InputEvent}
            required
          />
          <input
            className="inputEdits"
            type="email"
            name="email"
            id="email"
            value={input.email}
            placeholder="Enter Your Email"
            onChange={InputEvent}
            required
          />
          <textarea
            className="inputEdits"
            name="message"
            id="message"
            value={input.message}
            placeholder="Enter Your Message"
            onChange={InputEvent}
            required
          />

          <button type="submit" className="mybtn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
