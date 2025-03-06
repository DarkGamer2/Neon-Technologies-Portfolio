import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

interface ContactProps {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}
const ContactForm = ({ setIsSubmitted }: ContactProps) => {
  const [clientFirstName, setClientFirstName] = useState<string>("");
  const [clientLastName, setClientLastName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientPhoneNumber, setClientPhoneNumber] = useState<string>("");
  const [clientQuery, setClientQuery] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Submit Form");

  const navigate = useNavigate();
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setButtonText("Submitting...");
    const ClientInfo = {
      clientFirstName,
      clientLastName,
      clientPhoneNumber,
      clientEmail,
      clientQuery,
    };
    axios
      .post(
        "https://neon-technologies-website-api-production.up.railway.app/api/neon_tech/contact",
        {
          ClientInfo,
        }
      )
      .then((err) => {
        if (err) {
          navigate("/error");
        } else {
          setIsSubmitted(true);
          navigate("/confirmed");
        }
      });
  };
  return (
    <div className="dark:bg-black px-4 sm:px-0">
      <h1 className="text-center text-lg font-bold dark:text-white">Contact Me Today</h1>
      <form className="w-full max-w-lg mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="clientFirstName">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 dark:text-white  text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:bg-black" id="grid-first-name" type="text" name="clientFirstName" onChange={(e) => setClientFirstName(e.target.value)} placeholder="Jane" />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="clientLastName">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 dark:text-white  text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-black" id="grid-last-name" type="text" name="clientLastName" onChange={(e) => setClientLastName(e.target.value)} placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="clientEmail">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 dark:text-white  text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-black" id="grid-password" type="email" name="clientEmail" onChange={(e) => setClientEmail(e.target.value)} placeholder="john@example.com" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="clientContactNumber">
              Contact Number
            </label>
            <input className="appearance-none block w-full bg-gray-200 dark:text-white  text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-black" id="grid-city" type="number" name="clientContactNumber" onChange={(e) => setClientPhoneNumber(e.target.value)} placeholder="1234567" />
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="clientQuery">
              Query
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 dark:text-white  text-black border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-black h-40 resize-none" id="grid-zip" name="clientQuery" onChange={(e) => setClientQuery(e.target.value)} placeholder="I would like an e-commerce website..."></textarea>
          </div>
        </div>
        <div className="text-center">
          <button className="hover:bg-pink-600 hover:-translate-y-0.5 transform transition active:bg-pink-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 bg-indigo-500 text-white px-5 py-4 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base" onClick={handleSubmit}>
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
