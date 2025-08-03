import React from "react";
import localData from "@/localData";
import { Mail } from "lucide-react";
import Link from "next/link";
import { DialogDemo } from "@/components/index";

const { logo } = localData.images;
const { twitterIcon, instagramIcon, facebookIcon, youtubeIcon } = localData.svgs;

const Footer = () => {
  return (
    <footer className="bg-primary text-white min-h-[200px] footer" id="info">
      <div className="container">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_auto))] xl:grid-cols-[2fr_1fr_1fr_1fr_1fr] justify-between gap-x-[45px] gap-y-[40px] mb-[100px] sm:mb-[130px]">
          <div className="col min-w-[200px]">
            <div className="flex gap-1 items-center font-medium mb-8">
             <a href="/"> <img src={logo} alt="" className="max-w-[170px] h-auto " /></a>
            </div>
            <div className="max-w-[110px] text-sm text-[#94969C] font-medium leading-[1.7]">
              Localização 800, Brazos St. Austin, TX, USA
            </div>
          </div>

          <div className="col">
            <h5 className="title text-sm font-medium text-[#94969C] mb-4">SOBRE NÓS</h5>
            <ul className="flex flex-col items-start">
              <DialogDemo
                contentClassName="sm:!max-w-[795px] max-h-[95vh] overflow-y-auto"
                trigger={
                  <div className=" mb-[0.7rem]  hover:text-gray-300 duration-300 ease font-medium cursor-pointer">Quem somos</div>
                }
              >
                <h2 className=" text-[1.875rem] lg:text-[2.5rem] font-medium mb-[1rem]">QUEM SOMOS</h2>
                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
              </DialogDemo>

              <DialogDemo
                contentClassName="sm:!max-w-[795px]"
                trigger={
                  <div className=" mb-[0.7rem]  hover:text-gray-300 duration-300 ease font-medium cursor-pointer">
                    Por quê da S&P
                  </div>
                }
              >
                <h2 className=" text-[1.875rem] lg:text-[2.5rem] font-medium mb-[1rem]">POR QUE DA S&P</h2>
                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
              </DialogDemo>

              <DialogDemo
                contentClassName="sm:!max-w-[795px] max-h-[95vh] overflow-y-auto"
                trigger={
                  <div className=" mb-[0.7rem]  hover:text-gray-300 duration-300 ease font-medium cursor-pointer">
                    Termos de uso
                  </div>
                }
              >
                <h2 className=" text-[1.875rem] lg:text-[2.5rem] font-medium mb-[1rem]">TERMOS E POLÍTICAS</h2>
                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
                <br />

                <p className="text-[1.125rem] text-[#667085] leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis justo libero, ut euismod mi ecitur id. In
                  finibus ipsum non consequat ullamcorper. Vivamus venenatis risus sit amet sapien vehicula luctus. Vestibulum
                  mauris sapien,
                </p>
              </DialogDemo>
              <a href="#/" className=" mb-[0.7rem]  hover:text-gray-300 duration-300 ease font-medium whitespace-nowrap">
                Política de privacidade
              </a>
              <a href="#/" className=" mb-[0.7rem]  hover:text-gray-300 duration-300 ease font-medium">
                Política de LGPD
              </a>
            </ul>
          </div>

          <div className="col">
            <h5 className="title text-sm font-medium text-[#94969C] mb-4">OPORTUNIDADES</h5>
            <ul className="flex flex-col items-start">
              <a href="#/" className=" mb-[0.7rem]  hover:text-gray-300 duration-300 ease font-medium">
                Indique & ganhe
              </a>
              <a href="#/" className=" mb-[0.7rem]  hover:text-gray-300 duration-300 ease font-medium">
                Seja uma empresa
                <br /> parceira
              </a>
            </ul>
          </div>

          <div className="col">
            <h5 className="title text-sm font-medium text-[#94969C] mb-4">SUPORTE</h5>
            <ul className="flex flex-col items-start">
              <a href="#/" className=" mb-[0.7rem]  hover:text-gray-300 duration-300 ease font-medium">
                Ajuda
              </a>
              <Link href="/contato" className=" mb-[0.7rem]  hover:text-gray-300 duration-300 ease font-medium">
                Contato
              </Link>
            </ul>
          </div>

          <div className="col ">
            <h5 className="title text-sm font-medium text-[#94969C] mb-4">SOCIAL</h5>
            <ul className="flex gap-5">
              <a href="https://x.com/john-doe" target="_blank" className="hover:translate-y-[-3px] duration-300 ease">
                {twitterIcon}
              </a>
              <a
                href="https://www.instagram.com/john-doe/"
                target="_blank"
                className="hover:translate-y-[-3px] duration-300 ease "
              >
                {instagramIcon}
              </a>

              <a href="https://www.facebook.com/john-doe/" target="_blank" className="hover:translate-y-[-3px] duration-300 ease">
                {facebookIcon}
              </a>
              <a href="https://www.youtube.com/@john-doe/" target="_blank" className="hover:translate-y-[-3px] duration-300 ease">
                {youtubeIcon}
              </a>
            </ul>
          </div>
        </div>
        <div className="bottom flex gap-x-[45px] gap-y-[20px] justify-between flex-wrap">
          <div className="text-sm font-medium text-[#94969C]">Feito com amor nos USA por brasileiros </div>
          <div className="text-sm font-medium text-[#94969C]">Sorteios & Prêmios LLC</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
