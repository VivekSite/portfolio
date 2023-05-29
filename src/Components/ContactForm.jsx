import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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
    if (
      input.name === "" ||
      input.email === "" ||
      input.mobile === "" ||
      input.message === ""
    ) {
      alert("Please Fill All The Fields");
      return;
    }else if(input.mobile.length < 10) {
      alert("Please enter right mobile number");
      return;
    }else {
      setInput({
        name: "",
        email: "",
        message: "",
        mobile: "",
      });
      alert("Form Submitted \nwe will contact you soon.");
    }
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <Box
              display="flex"
              justifyContent="center"
              component="form"
              marginTop="5rem"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={Submited}
            >
              <Stack direction="column" spacing={2}>
                <TextField
                  name="name"
                  onChange={InputEvent}
                  value={input.name}
                  id="outlined-basic"
                  varient="outlined"
                  label="Your Name"
                  color="primary"
                  required
                />
                <TextField
                  name="mobile"
                  onChange={InputEvent}
                  value={input.mobile}
                  type="number"
                  label="Your Mobile Number"
                  id="outlined-basic"
                  varient="outlined"
                  color="primary"
                  required
                />
                <TextField
                  name="email"
                  onChange={InputEvent}
                  value={input.email}
                  label="Your Email"
                  id="outlined-basic"
                  varient="outlined"
                  color="primary"
                  required
                />
                <TextField
                  name="message"
                  onChange={InputEvent}
                  value={input.message}
                  label="Your Message"
                  id="outlined-multiline-flexible"
                  color="primary"
                  maxRows={4}
                  multiline
                  required
                />
                <Button type="submit" variant="outlined">
                  Submit
                </Button>
              </Stack>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
