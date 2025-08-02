import React from "react";
import Template from "./Template";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato conosco para dúvidas, sugestões ou suporte. Estamos prontos para ajudar!",
};

export default function Home() {
  return <Template/>
}
