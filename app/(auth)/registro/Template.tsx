"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import localData from "@/localData";
import { InputDemo, ButtonDemo, CheckboxDemo } from "@/components/index";

// CAROUSEL
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// OTP
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const { blueLogo } = localData.images;

const Template = () => {
  const [state, setState] = useState({
    email: "",
    // nome: "",
    // sobrenome: "",
    // phone: "",
    // message: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const carouselRef = useRef<CarouselApi | null>(null);
  const domRef = useRef<HTMLDivElement | null>(null);

  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
    };

    api.on("select", onSelect);

    // Fire once on mount
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="min-h-[100vh] py-[3rem] flex items-start  mx-3 ">
      <Carousel
        setApi={(api) => (carouselRef.current = api)}
        ref={domRef}
        // setApi={setApi}
        className={`  min-w-full `}
        opts={{
          //  dragFree: false,
          watchDrag: false,
          align: "start",
          loop: false,
        }}
        orientation="horizontal"
        // plugins={ [Autoplay({ delay: 5000 })] }
      >
        <CarouselContent className={`-ml-1  `}>
          <CarouselItem className={`pl-1 mx-auto `}>
            <Step1 state={state} handleOnChange={handleOnChange} carouselRef={carouselRef} />
          </CarouselItem>
          <CarouselItem className={`pl-1`}>
            <Step2 state={state} handleOnChange={handleOnChange} carouselRef={carouselRef} />
          </CarouselItem>
          <CarouselItem className={`pl-1`}>
            <Step3 state={state} handleOnChange={handleOnChange} carouselRef={carouselRef} />
          </CarouselItem>
        </CarouselContent>

        <div className={` carousel-angles fixed left-[52%] translate-x-[-50%] bottom-[30px] border`}>
          <CarouselPrevious className="angle-previous" />
          <CarouselNext className="angle-next" />
        </div>
      </Carousel>
    </div>
  );
};

const Step1 = ({ state = {}, handleOnChange = () => {}, carouselRef }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      carouselRef.current?.scrollNext();
      setIsLoading(false);
    }, 1200);
  };
  return (
    <div className="max-w-[400px] mx-auto shadow-md border rounded-md w-full px-5 sm:px-10 pt-8 pb-20 ">
      <a href="/">
        <img src={blueLogo} className="max-w-[130px] mx-auto mb-[2.5rem]" alt="" />
      </a>
      <h1 className="contact-title sorteios-title text-[1.5rem] font-bold text-center uppercase text-dark  mb-[1.5rem] leading-[1.4]">
        Efetue seu cadastro
      </h1>
      <form action="" className="" onSubmit={onSubmit}>
        <InputDemo
          // required={true}
          className="!mb-[0.5rem]"
          inputClassName="text-center"
          name="email"
          type="email"
          value={state.email}
          placeholder="Digite seu e-mail"
          callback={handleOnChange}
        />
        <p className="text-xs text-neutral-400 text-center font-light">Lorem ipsum dolor sit amet.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ButtonDemo disabled={isLoading} text="Avançar" className="uppercase rounded-full w-full" color="blue" size="lg" />
      </form>
    </div>
  );
};

const Step2 = ({ state = {}, handleOnChange = () => {}, carouselRef }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      carouselRef.current?.scrollNext();
      setIsLoading(false);
    }, 1200);
  };
  return (
    <div className="max-w-[400px] mx-auto shadow-md border rounded-md w-full px-5 sm:px-10 pt-8 pb-20 ">
      <a href="/">
        <img src={blueLogo} className="max-w-[130px] mx-auto mb-[2.5rem]" alt="" />
      </a>
      <h1 className="contact-title sorteios-title text-[1.5rem] font-bold text-center uppercase text-dark  mb-[1.5rem] leading-[1.4]">
        Efetue seu cadastro
      </h1>
      <h5 className="text-center text-[1.1rem] font-normal mb-[0.1rem]">Digite o código</h5>
      <p className="font-light  text-xs max-w-[250px] mx-auto text-neutral-400 text-center mb-[0.3rem] leading-[1.2]">
        Para continuar, insira o código de 6 dígitos enviado por e-mail.
      </p>
      <div className="font-bold text-center mb-[1rem]">seuemail@email.com</div>
      <form action="" className="" onSubmit={onSubmit}>
        <div className="mx-auto  mb-[1rem] flex justify-center">
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
              <InputOTPSlot className="py-[1.3rem]" index={0} />
              <InputOTPSlot className="py-[1.3rem]" index={1} />
              <InputOTPSlot className="py-[1.3rem]" index={2} />
              <InputOTPSlot className="py-[1.3rem]" index={3} />
              <InputOTPSlot className="py-[1.3rem]" index={4} />
              <InputOTPSlot className="py-[1.3rem]" index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <br />
        <br />

        <ButtonDemo disabled={isLoading} text="Avançar" className="uppercase rounded-full w-full" color="blue" size="lg" />
      </form>
    </div>
  );
};

const Step3 = ({ state = {}, handleOnChange = () => {}, carouselRef }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      // carouselRef.current?.scrollNext()

      alert("You have registered successfully!");
      setIsLoading(false);
    }, 1200);
  };
  return (
    <div className="max-w-[400px] mx-auto shadow-md border rounded-md w-full px-5 sm:px-10 pt-8 pb-8 ">
      <a href="/">
        <img src={blueLogo} className="max-w-[130px] mx-auto mb-[2.5rem]" alt="" />
      </a>
      <h1 className="contact-title sorteios-title text-[1.5rem] font-bold text-center uppercase text-dark  mb-[1.5rem] leading-[1.4]">
        Efetue seu cadastro
      </h1>
      <form action="" className="" onSubmit={onSubmit}>
        <InputDemo
          // required={true}
          className="!mb-[0.5rem]"
          inputClassName=""
          name="CPF"
          type="text"
          value={state.CPF}
          placeholder="CPF"
          callback={handleOnChange}
        />
        <InputDemo
          // required={true}
          className="!mb-[0.5rem]"
          inputClassName=""
          name="nome"
          type="text"
          value={state.CPF}
          placeholder="Nome completo"
          callback={handleOnChange}
        />
        <InputDemo
          // required={true}
          className="!mb-[0.5rem]"
          inputClassName=""
          name="data"
          type="text"
          value={state.data}
          placeholder="Data de nascimento"
          callback={handleOnChange}
        />
        <InputDemo
          // required={true}
          className="!mb-[0.5rem]"
          inputClassName=""
          name="celular"
          type="text"
          value={state.celular}
          placeholder="Celular"
          callback={handleOnChange}
        />
        <InputDemo
          // required={true}
          className="!mb-[0.5rem]"
          inputClassName=""
          name="celular"
          type="text"
          value={state.senha}
          placeholder="Crie una senha"
          callback={handleOnChange}
        />
        <p className="text-xs text-neutral-400 font-light  max-w-[270px] mx-auto text-center">
          Sua senha deve conter pelo menos 6 caracteres, incluindo letras e números.
        </p>
        <br />
        <br />
        <CheckboxDemo label="Concordo com os termos e politicas" className="mb-[0.5rem] text-neutral-500" />
        <ButtonDemo disabled={isLoading} text="Avançar" className="uppercase rounded-full w-full" color="blue" size="lg" />
      </form>
    </div>
  );
};

export default Template;
