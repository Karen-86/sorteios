import React from "react";
import localData from "@/localData";
import { Separator } from "@/components/ui/separator";
import { ButtonDemo } from "@/components/index";

const { placeholderImage } = localData.images;
const { calendarIcon } = localData.svgs;

const RealizadosCard = ({
  image = placeholderImage,
  title = "SORTEIO 001",
  prize = "R$50.00 in pix",
  date = "22/2/2025",
  status = "Winner",
  avatar = placeholderImage,
  name = "John Doe",
  location = "Curitiba/PR",
}) => {
  return (
    <div className=" border p-4 rounded-[24px]  card realizados-card xl:flex justify-between items-center bg-white shadow-sm">
      <div className="flex-[1.5]  rounded-[18px] max-w-[400px] !overflow-hidden  border border-[#E5E7EB] mb-[1rem] xl:mb-0">
        <div className="card-header relative w-full h-0 pt-[100%]">
          <img src={image} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
        <div className="card-body p-3">
          <div className="flex justify-between">
            <h4 className="card-title text-[1.25rem] font-bold leading-[1.1] mb-[0.5rem]">{title}</h4>
            <ButtonDemo text='Daily' className="rounded-full" color='blue' size='sm' />
          </div>
          <div className="card-label text-sm text-secondary font-medium mb-1">Prize</div>
          <div className="card-prize text-[24px] font-bold text-primary italic mb-[0.5rem]">{prize}</div>
          <div className="card-date flex items-center font-medium gap-2">
            {calendarIcon}
            {date}
          </div>
        </div>
      </div>

      <div className=" hidden xl:block  w-[1px]  h-[350px] bg-gray-200  my-0 mx-10" />

      <div className="flex-1 text-center max-w-[100px] xl:max-w-[206px] xl:mr-[20px] mx-auto">
        <div className="card-status text-[1.25rem] mb-[0.75rem] font-bold">{status}</div>
        <div className="card-avatar border rounded-full !overflow-hidden relative mx-auto h-0 w-full pt-[100%] mb-[0.75rem]  ">
          <img className="object-cover absolute top-0 left-0 w-full h-full" src={avatar} alt="" />
        </div>
        <h5 className="card-name text-[1.25rem] mb-[0.2rem] font-bold">{name}</h5>
        <div className="card-location font-medium text-primary">{location}</div>
      </div>
    </div>
  );
};

export default RealizadosCard;
