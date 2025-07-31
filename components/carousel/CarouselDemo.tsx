"use client";

import React, { useRef, ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type CarouselDemoProps = {
  className?: string;
  contentClassName?: string;
  itemClassName?: string;
  arrowsClassName?: string;
  orientation?: "horizontal" | "vertical" | undefined;
  loop?: boolean;
  align?: "start" | "center";
  autoplay?: boolean;
  items?: { [key: string]: string | number | (() => void) }[];
  children: (props: { item: { [key: string]: string | number | (() => void) }; index: number }) => ReactNode;
};

export function CarouselDemo({
  className = "",
    itemClassName = "basis-auto sm:basis-1/2 md:basis-1/3  xl:basis-1/4 w-[300px] sm:w-auto",
    contentClassName = "",
    arrowsClassName= '',
  //   itemClassName = "w-[300px] shrink-0 basis-auto xl:basis-full  xl:basis-1/4",
  orientation = "horizontal",
  loop = false,
  align = "start",
  autoplay = false,
  items = [{}, {}, {}, {}],
  children = () => "",
}: CarouselDemoProps) {
  const carouselRef = useRef(null);

  const [api, setApi] = React.useState<CarouselApi>();

  //   React.useEffect(() => {
  //     if (!api) {
  //       return;
  //     }

  //     api.on("select", () => {
  //       // Do something on select.
  //       console.log("trigger");
  //     });
  //   }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      const currentItem = items[selectedIndex];
      console.log("Current index:", selectedIndex);
      console.log("Current item:", currentItem);

      // Optional callback: you could call a function here
      // onChange?.(currentItem);
    };

    api.on("select", onSelect);

    // Fire once on mount
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api, items]);

  return (
    <Carousel
      ref={carouselRef}
      setApi={setApi}
      className={`${className}`}
      opts={{
        align: align,
        loop: loop,
      }}
      orientation={orientation}
      plugins={autoplay ? [Autoplay({ delay: 2000 })] : []}
    >
      <CarouselContent className={`-ml-1 ${contentClassName}`}>
        {items.map((item, index) => (
          <CarouselItem key={index} className={`pl-1 ${itemClassName}`}>
            <div className="p-1 ">{children({ item, index })}</div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Arrows */}
      <div className={`${arrowsClassName} xl:hidden carousel-angles absolute md:static left-[50%] md:left-[none] translate-x-[-50%] md:translate-x-[none] bottom-[-30px] md:bottom-[none]`}>
        <CarouselPrevious className="angle-previous" />
        <CarouselNext className="angle-next" />
      </div>
    </Carousel>
  );
}
