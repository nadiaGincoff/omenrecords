/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import type {ChangeEvent} from "react";

import React, {useState} from "react";
import {useFormStatus} from "react-dom";
import {motion} from "framer-motion";

import about from "@/data/about.json";
const ACCESS_KEY = process.env.ACCESS_KEY_FOR_MAILING || "";

function SubmitButton() {
  const {pending} = useFormStatus();

  return (
    <motion.button
      aria-disabled={pending}
      className="flex flex-row items-center rounded-full bg-background px-5 py-2 text-white"
      type="submit"
      whileHover={{scale: 1.02}}
      whileTap={{scale: 0.9}}
    >
      SEND
      <svg
        aria-hidden="true"
        className="ms-2 h-3 w-3 rtl:rotate-180"
        fill="none"
        viewBox="0 0 14 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5h12m0 0L9 1m4 4L9 9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </motion.button>
  );
}

interface TFormData {
  accessKey: string;
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [result, setResult] = useState<boolean | string>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [rawData, setRawData] = useState<TFormData>({
    accessKey: ACCESS_KEY,
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formData = new FormData(event.target as any);

    formData.append("access_key", ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        setResult(res.success);
        setLoading(false);
        setRawData({
          accessKey: ACCESS_KEY,
          name: "",
          email: "",
          message: "",
        });
      } else {
        setLoading(false);
        setError(res.message);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setRawData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const messageWhenEmailIsSent = result
    ? "Thanks for your message.❤️ "
    : error
      ? `Unfortunately, it seems there was an issue sending your message. Please try again. If the problem persists, you can send your message directly to ${about.email}.`
      : null;

  return (
    <aside className="w-full md:w-1/2">
      <form onSubmit={onSubmit}>
        <div className="relative mb-6">
          <input
            required
            className="text-1xl block w-full rounded-xl border border-background bg-transparent p-2.5 ps-5 font-thin text-background placeholder-background lg:text-2xl"
            id="name"
            name="name"
            placeholder="NAME"
            type="text"
            value={rawData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="relative mb-6">
          <input
            required
            className="text-1xl block w-full rounded-xl border border-background bg-transparent p-2.5 ps-5 font-thin text-background placeholder-background lg:text-2xl"
            id="email"
            name="email"
            placeholder="EMAIL"
            type="email"
            value={rawData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="relative mb-6">
          <textarea
            required
            className="text-1xl block w-full rounded-xl border border-background bg-transparent p-2.5 ps-5 font-thin text-background placeholder-background lg:text-2xl"
            id="message"
            name="message"
            placeholder="MESSAGE"
            rows={4}
            value={rawData.message}
            onChange={handleInputChange}
          />
        </div>
        {result || error ? (
          <p className="box-sizing text-sm font-thin lowercase md:text-lg">
            {messageWhenEmailIsSent}
          </p>
        ) : loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline h-8 w-8 animate-spin fill-yellow-400 text-gray-200 dark:text-gray-600"
              fill="none"
              viewBox="0 0 100 101"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <SubmitButton />
        )}
      </form>
    </aside>
  );
}
