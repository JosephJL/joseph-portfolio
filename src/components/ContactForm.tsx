import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";

interface IValues {
  name: string;
  email: string;
  message: string;
}

interface IErrors extends Partial<IValues> {}

export default function ContactForm() {
  const form = useRef<any>();
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState<IValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        setValues({
          name: "",
          email: "",
          message: "",
        });
      });
    setLoading(false);
    setSuccess(true);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="grid grid-cols-1 text-center text-gray-500 md:grid-cols-2">
        <div className="mb-6 flex flex-col items-center px-2 md:px-4 lg:px-16">
          <p className="mb-2 text-2xl font-semibold text-gray-500">
            Get In Touch
          </p>
          <p className="test-xs">
            I&apos;m currently looking for internship opportunities in software
            development, I would be keen to have a chat to see if I&apos;m a
            good fit!{" "}
          </p>
        </div>
        <div>
          {success ? (
            <div className="flex-row">
              <div className="[ margin-auto ] [ flow ]">
                <h1>Message sent!</h1>
                <p>I've got your message and will reply you soon!</p>
              </div>
            </div>
          ) : (
            <form
              ref={form}
              className="flow"
              method="POST"
              name="Contact"
              onSubmit={sendEmail}
            >
              <div className="form-group mb-6">
                <input
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  className="form-control m-0
                block
                w-full
                rounded
                border
                border-solid
                border-gray-300
                bg-white bg-clip-padding
                px-3 py-1.5 text-base
                font-normal
                text-gray-700
                transition
                ease-in-out
                focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className="form-control m-0
                block
                w-full
                rounded
                border
                border-solid
                border-gray-300
                bg-white bg-clip-padding
                px-3 py-1.5 text-base
                font-normal
                text-gray-700
                transition
                ease-in-out
                focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="email"
                  name="email"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  className="
                form-control
                m-0
                block
                w-full
                rounded
                border
                border-solid
                border-gray-300
                bg-white bg-clip-padding
                px-3 py-1.5 text-base
                font-normal
                text-gray-700
                transition
                ease-in-out
                focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
              "
                  id="message"
                  placeholder="Leave a Message"
                ></textarea>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="
                w-[50%]
                w-full
                rounded
                bg-[#001440]
                px-6
                py-2.5
                text-xs
                font-medium
                uppercase
                leading-tight
                text-gray-200
                shadow-md
                transition
                duration-150 ease-in-out
                hover:bg-blue-400 hover:bg-blue-900
                focus:bg-blue-700 focus:outline-none
                focus:ring-0
                active:bg-blue-800
                active:shadow-lg
                dark:bg-gray-700
                dark:text-white
                dark:hover:bg-gray-600 dark:focus:outline-none"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
