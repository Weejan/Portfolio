import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks you for leaving a message! ${form.email}`);
    setForm({ email: "", message: "" });
  }
  return (
    <div
      id="contact"
      className="bg-black flex justify-around py-16 border-t flex-wrap gap-10"
    >
      <div className="text-gray-300 ">
        <span className="font-medium text-4xl ">Get in Touch</span>
        <div className="flex flex-col pt-8 gap-2">
          <a
            href="https://www.linkedin.com/in/weejan-maharjan-641839257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-light"
          >
            Linked In
          </a>
          <a
            href="https://github.com/Weejan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-light"
          >
            Github
          </a>
          <a href="#" className="text-xl font-light">
            +977 123456789
          </a>
        </div>
      </div>
      <div>
        <div className="text-gray-300">
          <span className="text-4xl font-medium">Leave a Message</span>
        </div>
        <div className="pt-8">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label className="block mb-2 text-xl font-light text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => {
                handleChange(e);
              }}
              rows="4"
              className="bg-transparent border border-gray-300 text-gray-300 focus:ring-black text-sm rounded-lg block w-full py-3 px-6"
              placeholder="example@xyx.com"
              required
            ></input>
            <label className="block mb-2 text-xl font-light text-white mt-4">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={(e) => {
                handleChange(e);
              }}
              rows="3"
              className="bg-transparent border border-gray-300 text-gray-300 focus:ring-black text-sm rounded-lg block w-full py-3 px-6"
              placeholder="write here..."
              required
            ></textarea>
            <button
              type="submit"
              className="border-2 py-3 px-9 text-gray-300 relative z-10 bg-transparent hover:scale-105   hover:bg-gray-300 hover:text-black hover:font-medium mt-6"
            >
              {" "}
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
