import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { api } from "../utils/api";

const FormPage: NextPage = () => {
  const mutation = api.example.postSubmission.useMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <>
      <Head>
        <title>HoneyBadger</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-4xl font-bold text-white">Form</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-md border-2 border-white p-2"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-md border-2 border-white p-2"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="message" className="text-white">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="rounded-md border-2 border-white p-2"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button type="submit" className="py-4 text-white">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default FormPage;
