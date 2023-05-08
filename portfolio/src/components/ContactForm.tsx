import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const ContactForm = () => {
  const [clientFirstName, setClientFirstName] = useState<string>("");
  const [clientLastName, setClientLastName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientPhoneNumber, setClientPhoneNumber] = useState<string>("");
  const [clientQuery, setClientQuery] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Submit Form");

  const handleSubmit = (e: React.MouseEventHandler) => {
    const ClientInfo = {
      clientFirstName,
      clientLastName,
      clientPhoneNumber,
      clientEmail,
      clientQuery,
    };
    axios.post("http://localhost:4500/api/receiveinfo", {
      ClientInfo,
    });
  };
  return (
    <div>
      <h1 className="text-center text-lg font-bold">Contact Me Today</h1>
      <form className="w-full max-w-lg mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="clientFirstName"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="clientFirstName"
              onChange={(e) => setClientFirstName(e.target.value)}
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="clientLastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="clientLastName"
              onChange={(e) => setClientLastName(e.target.value)}
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="clientEmail"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              name="clientEmail"
              onChange={(e) => setClientEmail(e.target.value)}
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="clientContactNumber"
            >
              Contact Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="number"
              name="clientContactNumber"
              onChange={(e) => setClientPhoneNumber(e.target.value)}
              placeholder="1234567"
            />
          </div>
          {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Query
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div> */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="clientQuery"
            >
              Query
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              name="clientQuery"
              onChange={(e) => setClientQuery(e.target.value)}
              placeholder="I would like an e commerce website..."
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            className="hover:bg-pink-600 hover:-translate-y-0.5 transform transition active:bg-pink-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 bg-indigo-500 text-white px-5 py-4 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base"
            onClick={() => handleSubmit}
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
