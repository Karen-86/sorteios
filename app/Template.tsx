"use client";

import React, { useState, useCallback } from "react";
import { Navbar, Footer, ButtonDemo, SorteioCard, RealizadosCard, CarouselDemo, DizendoCard } from "@/components/index.js";
import localData from "@/localData";
import Image from "next/image";

const { giftsImage, actorImage, sorterioImage, avatar1Image, avatar2Image, avatar3Image, avatar4Image } = localData.images;
const { playIcon } = localData.svgs;

const Content = () => {
  return (
    <>
      <header className="absolute w-full">
        <Navbar />
      </header>
      <main className="home-page">
        <div className="bg-[#F7F7F7]">
          <ShowcaseSection />
          <ComoFancionaSection />
          <SorteiosSection />
          <RealizadosSection />
        </div>
        <DizendoSection />
      </main>
      <Footer />
    </>
  );
};

const ShowcaseSection = () => {
  return (
    <header className="showcase min-h-[calc(100vh-24px)] pt-[100px] py-[2rem] flex items-center bg-primary rounded-[16px] lg:rounded-[40px] m-[12px]">
      <div className="container">
        <div className="showcase-center lg:flex lg:items-end ">
          <div className="showcase-content mb-10 lg:mb-0 flex-1">
            <h1 className="tracking-[-1px] showcase-title text-[1.875rem] lg:text-[2.5rem]  xl:text-[3.1rem] font-bold text-white mb-[1.6rem] leading-[1.4]">
              A MAIOR PLATAFORMA DE SORTEIOS & PRÊMIOS GLOBAL DE VOLTA AO <span className="text-light-blue italic">BRASIL</span>
            </h1>
            <p className="showcase-description text-white text-[20px] max-w-[520px] mb-[2.4rem]">
              Aqui você concorre a prêmios de segunda à sexta fazendo um cadastro 100% gratuito.
            </p>
            <ButtonDemo text="EFETUE SEU CADASTRO" className="rounded-full" size="lg" />
          </div>
          <div className="showcase-image flex-1 max-w-[400px] xl:max-w-[600px] xl:mb-[-100px] xl:mr-[-40px]">
            <Image width='512' height='486'  className="w-full" src={giftsImage} alt="" />
            {/* <img className="w-full" src={giftsImage} alt="" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

const ComoFancionaSection = () => {
  return (
    <section
      id="como-funciona"
      className="como-fanciona min-h-[calc(100vh-24px)] sm:!py-[3rem] flex items-center bg-indigo rounded-[16px] lg:rounded-[40px] m-[12px]"
    >
      <div className="container">
        <div className="como-fanciona-center">
          <div className="como-fanciona-content  ">
            <h2 className="text-center tracking-[-1px] como-fanciona-title text-[1.875rem] lg:text-[2.5rem]  xl:text-[3.1rem] font-bold text-primary mb-[1.6rem] leading-[1.4]">
              COMO FANCIONA
            </h2>
            <div className=" mx-auto  como-fanciona-image max-w-[800px] 4xl:max-w-[1100px] mb-6 rounded-[16px] overflow-hidden">
              <div className="w-full pt-[90%] md:pt-[56.25%] h-0 relative">
                {/* <img className="w-full h-full absolute top-0 left-0 object-cover" src={actorImage} alt="" /> */}
                <Image  width='1000' height="591" className="w-full h-full absolute top-0 left-0 object-cover" src={actorImage} alt="" />
                <ButtonDemo
                  startIcon={playIcon}
                  text="Play Video"
                  className="play-btn rounded-full  absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)] backdrop-blur-md !bg-white/30 hover:!bg-white/35 !text-white"
                  size="lg"
                />
              </div>
            </div>
            <ButtonDemo text="EFETUE SEU CADASTRO" className="rounded-full mx-auto flex" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SorteiosSection = () => {
  const items = [{ image: sorterioImage }, { image: sorterioImage }, { image: sorterioImage }, { image: sorterioImage }];
  return (
    <section id="sorteios" className="sorteios overflow-hidden sm:overflow-visible">
      <div className="container">
        <h2 className=" tracking-[-1px] sorteios-title text-[1.875rem] lg:text-[2.5rem]  xl:text-[3.1rem] font-bold text-primary mb-[1.6rem] leading-[1.4]">
          PRÓXIMOS SORTEIOS
        </h2>
        <article className=" mb-[100px]">
          <h3 className="text-center about-title text-[1.3rem] lg:text-[2rem]  xl:text-[2.75rem] font-normal text-primary mb-[0.3rem]">
            DIÁRIOS
          </h3>

          <CarouselDemo className="custom-carousel" items={items}>
            {({ item, index }) => <SorteioCard {...item} />}
          </CarouselDemo>
        </article>

        <article className=" mb-[100px]">
          <h3 className="text-center about-title text-[1.3rem] lg:text-[2rem]  xl:text-[2.75rem] font-normal text-primary mb-[0.3rem]">
            SEMANAIS
          </h3>

          <CarouselDemo className="custom-carousel" items={items}>
            {({ item, index }) => <SorteioCard {...item} />}
          </CarouselDemo>
        </article>

        <article className=" mb-[100px]">
          <h3 className="text-center about-title text-[1.3rem] lg:text-[2rem]  xl:text-[2.75rem] font-normal text-primary mb-[0.3rem]">
            MENSAIS
          </h3>

          <CarouselDemo className="custom-carousel" items={items}>
            {({ item, index }) => <SorteioCard {...item} />}
          </CarouselDemo>
        </article>

        <article className=" mb-[60px]">
          <h3 className="text-center about-title text-[1.3rem] lg:text-[2rem]  xl:text-[2.75rem] font-normal text-primary mb-[0.3rem]">
            ANUAIS
          </h3>

          <CarouselDemo className="custom-carousel" items={items}>
            {({ item, index }) => <SorteioCard {...item} />}
          </CarouselDemo>
        </article>

        <ButtonDemo text="EFETUE SEU CADASTRO" className="rounded-full mx-auto flex  mb-[20px]" size="lg" color="blue" />
      </div>
    </section>
  );
};

const RealizadosSection = () => {
  const items = [
    { image: sorterioImage, avatar: avatar1Image },
    { image: sorterioImage, avatar: avatar2Image },
    { image: sorterioImage, avatar: avatar3Image },
    { image: sorterioImage, avatar: avatar4Image },
  ];
  return (
    <section id="relizados" className="realizados overflow-hidden sm:overflow-visible !pb-[7rem]">
      <div className="container">
        <h2 className="text-center tracking-[-1px] sorteios-title text-[1.875rem] lg:text-[2.5rem]  xl:text-[3.1rem] font-bold text-primary mb-[1.6rem] leading-[1.4]">
          SORTEIOS REALIZADOS
        </h2>

        <CarouselDemo className="custom-carousel" items={items} contentClassName="xl:grid xl:grid-cols-2 xl:gap-4  xl:max-w-full">
          {({ item, index }) => <RealizadosCard {...item} />}
        </CarouselDemo>
        {/* <div className="xl:grid xl:grid-cols-2 xl:gap-4 max-w-[600px] xl:max-w-full mx-auto">
          <RealizadosCard />
          <RealizadosCard />
          <RealizadosCard />
          <RealizadosCard />
        </div> */}
      </div>
    </section>
  );
};

const DizendoSection = () => {
  const items = [
    { id: "1", rating: 5, name: "Lulu Meyers", profession: "Hourglass", avatar: avatar1Image },
    { id: "2", rating: 5, name: "John Doe", profession: "Hourglass", avatar: avatar2Image },
    { id: "3", rating: 5, name: "Jane Doe", profession: "Hourglass", avatar: avatar3Image },
    { id: "4", rating: 5, name: "Lulu Meyers", profession: "Hourglass", avatar: avatar4Image },
  ];
  const [activeTestemonial, setActiveTestemonial] = useState(items[0]);

  return (
    <section id="dizendo" className="dizendo  sm:overflow-visible bg-white sm:!pb-[9rem]">
      <div className="container">
        <h2 className="text-center tracking-[-1px] sorteios-title text-[1.875rem] lg:text-[2.5rem]  xl:text-[3.1rem] font-bold text-primary  mb-[3rem] lg:mb-[5rem] leading-[1.4]">
          O QUE ESTÃO DIZENDO
        </h2>

        <div className="flex flex-col md:flex-row md:items-center  gap-x-25 gap-y-15">
          <CarouselDemo
            className="dizendo-carousel  md:max-w-[400px] xl:max-w-[600px] w-full"
            items={items}
            itemClassName=""
            arrowsClassName="!block !max-w-[0px] ml-auto   !static  !translate-x-0"
            autoplay={true}
            loop={true}
            callback={(data) => {
              if (activeTestemonial.id == data.id) return;
              console.log(activeTestemonial.id, "activeTestemonial");
              console.log(data.id, "data");
              setActiveTestemonial(data);
            }}
          >
            {({ item, index }) => <DizendoCard {...item} />}
          </CarouselDemo>
          <div className="testimonial relative  w-full">
            <div className="testimonial-header relative h-0 pt-[120%]">
              {/* <img
                className="testimonial-avatar  absolute top-0 left-0 w-full h-full object-cover"
                src={activeTestemonial.avatar}
                alt=""
              /> */}
              <Image
                width={576}
                height={721}
                className="testimonial-avatar  absolute top-0 left-0 w-full h-full object-cover"
                src={activeTestemonial.avatar}
                alt=""
              />
            </div>
            <div className="testimonial-footer absolute bottom-0  backdrop-blur-sm !bg-white/30 w-full py-3 px-5 h-0 pt-[25%] border-t border-t-gray-300">
              <div className="testimonials-content absolute top-[50%] transform-[translateY(-50%)]">
                <h4 className="testimonial-name  text-[2rem] xl:text-[3rem] text-white mb-[0rem]">{activeTestemonial.name}</h4>
                <p className="testimonial-profession text-[1.125rem] text-white">Hourglass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
