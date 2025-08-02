"use client";

import React, { useState } from "react";
import { Navbar, Footer, ButtonDemo, InputDemo, SelectScrollable, TextareaDemo } from "@/components/index";
import localData from "@/localData";

const { contactImage } = localData.images;

const Teplate = () => {
  return (
    <>
      <header className="absolute w-full">
        <Navbar type="navbar-light" />
      </header>
      <main className="contact-page">
        <ShowcaseSection />
      </main>
      <Footer />
    </>
  );
};

const ShowcaseSection = () => {
  const [state, setState] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const callback = (item: any) => {
    console.log(item.code);
    setState((prev) => ({
      ...prev,
      phone: item.code,
    }));
  };

  return (
    <section id="contato" className="contato showcase min-h-[calc(100vh-24px)] !pt-[150px]  sm:!pb-[9rem]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center  gap-y-10 gap-x-[10%] ">
          <form action="" className="flex-1">
            <h2 className="contact-title sorteios-title text-[1.875rem] lg:text-[2.25rem]  font-medium text-dark  mb-[1rem] leading-[1.4]">
              Fale conosco
            </h2>
            <p className="contact-description text-[#475467] text-[1.25rem] font-medium mb-[3.3rem]">
              Nosso time está pronto para te ouvir
            </p>

            <div className="flex gap-x-4 flex-wrap md:flex-nowrap lg:gap-x-8">
              <InputDemo
                required={true}
                label="Nome"
                className=""
                name="nome"
                type="text"
                value={state.nome}
                placeholder="Seu nome"
                callback={handleOnChange}
              />
              <InputDemo
                label="Sobrenome"
                className=""
                name="sobrenome"
                type="text"
                value={state.sobrenome}
                placeholder="Seu sobrenome"
                callback={handleOnChange}
              />
            </div>
            <InputDemo
              required={true}
              label="Email"
              className=""
              name="email"
              type="email"
              value={state.email}
              placeholder="email@email.com"
              callback={handleOnChange}
            />
            <div className="relative">
              <SelectScrollable
                defaultItems={countryDialCodes.map((res, index) => {
                  return {
                    label: res.label,
                    value: res.label + " " + res.value,
                    code: res.value,
                    isSelected: res.isSelected,
                  };
                })}
                callback={callback}
                triggerClassName={`selectScrollable-trigger-custom z-10 !pr-[4px] absolute bottom-0 left-0  top-none w-auto py-[1.3rem] border-none shadow-none`}
                contentClassName={`selectScrollable-content-custom`}
              />
              <InputDemo
                label="Phone number"
                className="relative"
                inputClassName="pl-[70px]"
                name="phone"
                type="text"
                value={state.phone}
                placeholder="+55 (11) 0 0000-0000"
                callback={handleOnChange}
              />
            </div>
            <TextareaDemo
              label="Message"
              placeholder="Message"
              className=""
              name="message"
              type="text"
              defaultValue={state.message}
              callback={(e) => handleOnChange(e)}
            />
            <ButtonDemo text='ENVIAR MENSAGEM' className="rounded-full w-full" color='blue' size='lg' />
          </form>

          <div className="w-full flex-1">
            <div className=" relative h-0 pt-[120%] ">
              <img className="contact-cover  absolute top-0 left-0 w-full h-full object-cover" src={contactImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teplate;

const countryDialCodes = [
  { label: "AF", value: "+93", isSelected: true },
  { label: "AL", value: "+355" },
  { label: "DZ", value: "+213" },
  { label: "AS", value: "+1" },
  { label: "AD", value: "+376" },
  { label: "AO", value: "+244" },
  { label: "AI", value: "+1" },
  { label: "AQ", value: "+672" },
  { label: "AG", value: "+1" },
  { label: "AR", value: "+54" },
  { label: "AM", value: "+374" },
  { label: "AW", value: "+297" },
  { label: "AU", value: "+61" },
  { label: "AT", value: "+43" },
  { label: "AZ", value: "+994" },
  { label: "BS", value: "+1" },
  { label: "BH", value: "+973" },
  { label: "BD", value: "+880" },
  { label: "BB", value: "+1" },
  { label: "BY", value: "+375" },
  { label: "BE", value: "+32" },
  { label: "BZ", value: "+501" },
  { label: "BJ", value: "+229" },
  { label: "BM", value: "+1" },
  { label: "BT", value: "+975" },
  { label: "BO", value: "+591" },
  { label: "BA", value: "+387" },
  { label: "BW", value: "+267" },
  { label: "BR", value: "+55" },
  { label: "BN", value: "+673" },
  { label: "BG", value: "+359" },
  { label: "BF", value: "+226" },
  { label: "BI", value: "+257" },
  { label: "KH", value: "+855" },
  { label: "CM", value: "+237" },
  { label: "CA", value: "+1" },
  { label: "CV", value: "+238" },
  { label: "CF", value: "+236" },
  { label: "TD", value: "+235" },
  { label: "CL", value: "+56" },
  { label: "CN", value: "+86" },
  { label: "CO", value: "+57" },
  { label: "KM", value: "+269" },
  { label: "CD", value: "+243" },
  { label: "CG", value: "+242" },
  { label: "CR", value: "+506" },
  { label: "HR", value: "+385" },
  { label: "CU", value: "+53" },
  { label: "CY", value: "+357" },
  { label: "CZ", value: "+420" },
  { label: "DK", value: "+45" },
  { label: "DJ", value: "+253" },
  { label: "DM", value: "+1" },
  { label: "DO", value: "+1" },
  { label: "EC", value: "+593" },
  { label: "EG", value: "+20" },
  { label: "SV", value: "+503" },
  { label: "GQ", value: "+240" },
  { label: "ER", value: "+291" },
  { label: "EE", value: "+372" },
  { label: "ET", value: "+251" },
  { label: "FJ", value: "+679" },
  { label: "FI", value: "+358" },
  { label: "FR", value: "+33" },
  { label: "GA", value: "+241" },
  { label: "GM", value: "+220" },
  { label: "GE", value: "+995" },
  { label: "DE", value: "+49" },
  { label: "GH", value: "+233" },
  { label: "GR", value: "+30" },
  { label: "GD", value: "+1" },
  { label: "GT", value: "+502" },
  { label: "GN", value: "+224" },
  { label: "GW", value: "+245" },
  { label: "GY", value: "+592" },
  { label: "HT", value: "+509" },
  { label: "HN", value: "+504" },
  { label: "HU", value: "+36" },
  { label: "IS", value: "+354" },
  { label: "IN", value: "+91" },
  { label: "ID", value: "+62" },
  { label: "IR", value: "+98" },
  { label: "IQ", value: "+964" },
  { label: "IE", value: "+353" },
  { label: "IL", value: "+972" },
  { label: "IT", value: "+39" },
  { label: "JM", value: "+1" },
  { label: "JP", value: "+81" },
  { label: "JO", value: "+962" },
  { label: "KZ", value: "+7" },
  { label: "KE", value: "+254" },
  { label: "KI", value: "+686" },
  { label: "KR", value: "+82" },
  { label: "KW", value: "+965" },
  { label: "KG", value: "+996" },
  { label: "LA", value: "+856" },
  { label: "LV", value: "+371" },
  { label: "LB", value: "+961" },
  { label: "LS", value: "+266" },
  { label: "LR", value: "+231" },
  { label: "LY", value: "+218" },
  { label: "LI", value: "+423" },
  { label: "LT", value: "+370" },
  { label: "LU", value: "+352" },
  { label: "MG", value: "+261" },
  { label: "MW", value: "+265" },
  { label: "MY", value: "+60" },
  { label: "MV", value: "+960" },
  { label: "ML", value: "+223" },
  { label: "MT", value: "+356" },
  { label: "MH", value: "+692" },
  { label: "MR", value: "+222" },
  { label: "MU", value: "+230" },
  { label: "MX", value: "+52" },
  { label: "FM", value: "+691" },
  { label: "MD", value: "+373" },
  { label: "MC", value: "+377" },
  { label: "MN", value: "+976" },
  { label: "ME", value: "+382" },
  { label: "MA", value: "+212" },
  { label: "MZ", value: "+258" },
  { label: "MM", value: "+95" },
  { label: "NA", value: "+264" },
  { label: "NR", value: "+674" },
  { label: "NP", value: "+977" },
  { label: "NL", value: "+31" },
  { label: "NZ", value: "+64" },
  { label: "NI", value: "+505" },
  { label: "NE", value: "+227" },
  { label: "NG", value: "+234" },
  { label: "NO", value: "+47" },
  { label: "OM", value: "+968" },
  { label: "PK", value: "+92" },
  { label: "PW", value: "+680" },
  { label: "PA", value: "+507" },
  { label: "PG", value: "+675" },
  { label: "PY", value: "+595" },
  { label: "PE", value: "+51" },
  { label: "PH", value: "+63" },
  { label: "PL", value: "+48" },
  { label: "PT", value: "+351" },
  { label: "QA", value: "+974" },
  { label: "RO", value: "+40" },
  { label: "RU", value: "+7" },
  { label: "RW", value: "+250" },
  { label: "KN", value: "+1" },
  { label: "LC", value: "+1" },
  { label: "VC", value: "+1" },
  { label: "WS", value: "+685" },
  { label: "SM", value: "+378" },
  { label: "ST", value: "+239" },
  { label: "SA", value: "+966" },
  { label: "SN", value: "+221" },
  { label: "RS", value: "+381" },
  { label: "SC", value: "+248" },
  { label: "SL", value: "+232" },
  { label: "SG", value: "+65" },
  { label: "SK", value: "+421" },
  { label: "SI", value: "+386" },
  { label: "SB", value: "+677" },
  { label: "SO", value: "+252" },
  { label: "ZA", value: "+27" },
  { label: "SS", value: "+211" },
  { label: "ES", value: "+34" },
  { label: "LK", value: "+94" },
  { label: "SD", value: "+249" },
  { label: "SR", value: "+597" },
  { label: "SE", value: "+46" },
  { label: "CH", value: "+41" },
  { label: "SY", value: "+963" },
  { label: "TW", value: "+886" },
  { label: "TJ", value: "+992" },
  { label: "TZ", value: "+255" },
  { label: "TH", value: "+66" },
  { label: "TL", value: "+670" },
  { label: "TG", value: "+228" },
  { label: "TO", value: "+676" },
  { label: "TT", value: "+1" },
  { label: "TN", value: "+216" },
  { label: "TR", value: "+90" },
  { label: "TM", value: "+993" },
  { label: "TV", value: "+688" },
  { label: "UG", value: "+256" },
  { label: "UA", value: "+380" },
  { label: "AE", value: "+971" },
  { label: "GB", value: "+44" },
  { label: "US", value: "+1" },
  { label: "UY", value: "+598" },
  { label: "UZ", value: "+998" },
  { label: "VU", value: "+678" },
  { label: "VA", value: "+379" },
  { label: "VE", value: "+58" },
  { label: "VN", value: "+84" },
  { label: "YE", value: "+967" },
  { label: "ZM", value: "+260" },
  { label: "ZW", value: "+263" },
];
