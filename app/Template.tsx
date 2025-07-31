import React from "react";
import { Navbar, Footer, ButtonDemo , SorteioCard} from "@/components/index.js";
import localData from "@/localData";

const { giftsImage, actorImage } = localData.images;
const { playIcon } = localData.svgs;

const Content = () => {
  return (
    <>
      <header className="absolute w-full">
        <Navbar />
      </header>
      <main className="home-page">
        <ShowcaseSection />
        <ComoFancionaSection />
        <SorteiosSection />
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
            <img className="w-full" src={giftsImage} alt="" />
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
      className="como-fanciona py-[2rem] flex items-center bg-indigo rounded-[16px] lg:rounded-[40px] m-[12px]"
    >
      <div className="container">
        <div className="como-fanciona-center">
          <div className="como-fanciona-content  ">
            <h2 className="text-center tracking-[-1px] como-fanciona-title text-[1.875rem] lg:text-[2.5rem]  xl:text-[3.1rem] font-bold text-primary mb-[1.6rem] leading-[1.4]">
              COMO FANCIONA
            </h2>
            <div className=" mx-auto  como-fanciona-image max-w-[1000px] mb-6 rounded-[16px] overflow-hidden">
              <div className="w-full pt-[90%] md:pt-[56.25%] h-0 relative">
                <img className="w-full h-full absolute top-0 left-0 object-cover" src={actorImage} alt="" />
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
  return (
    <section id="proximos-sorteios" className="sorteios">
      <div className="container">
        <h2 className=" tracking-[-1px] sorteios-title text-[1.875rem] lg:text-[2.5rem]  xl:text-[3.1rem] font-bold text-primary mb-[1.6rem] leading-[1.4]">
          PRÓXIMOS SORTEIOS
        </h2>
        <article>
          <h3 className="text-center about-title text-[1.3rem] lg:text-[2rem]  xl:text-[2.75rem] font-normal text-primary mb-[1.6rem]">DIÁRIOS</h3>
       
          <div>
            <SorteioCard/>
        </div>
        </article>
      </div>
    </section>
  );
};

export default Content;
