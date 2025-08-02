import React from "react";
import Template from "./Template";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Register",
  description: "Crie sua conta para acessar recursos exclusivos e começar a usar nossa plataforma.",
};

const page = () => {
  return (
    <>
      <Template />
    </>
  );
};

export default page;
