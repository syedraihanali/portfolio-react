import React, { useState } from "react";

const Contact = () => {
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleBlur = (field) => () => {
    setTouched({ ...touched, [field]: true });
  };

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validate = (field, value) => {
    if (field === "email") {
      return validateEmail(value);
    }
    return value.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(values).every((field) =>
      validate(field, values[field])
    );

    if (isValid) {
      // send form data to endpoint
    } else {
      // mark all fields as touched if form is not valid
      setTouched({
        name: true,
        email: true,
        message: true,
      });
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto md:ml-[70px] h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/6efa1d63-effb-4dcd-bc48-7366c633d9b6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`p-2 bg-transparent rounded-md text-white focus:outline-none ${
                !validate("name", values.name) && touched.name
                  ? "border-2 border-red-500"
                  : "border-2 border-gray-500"
              }`}
              onBlur={handleBlur("name")}
              onChange={handleChange("name")}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`my-4 p-2 bg-transparent rounded-md text-white focus:outline-none ${
                !validate("email", values.email) && touched.email
                  ? "border-2 border-red-500"
                  : "border-2 border-gray-500"
              }`}
              onBlur={handleBlur("email")}
              onChange={handleChange("email")}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className={`p-2 bg-transparent rounded-md text-white focus:outline-none ${
                !validate("message", values.message) && touched.message
                  ? "border-2 border-red-500"
                  : "border-2 border-gray-500"
              }`}
              onBlur={handleBlur("message")}
              onChange={handleChange("message")}
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
