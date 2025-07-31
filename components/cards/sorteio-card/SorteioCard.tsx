import React from "react";
import localData from "@/localData";

const { placeholderImage } = localData.images;
const { calendarIcon } = localData.svgs;

const SorteioCard = ({ image = placeholderImage, title = "SORTEIO 001", prize = "R$50.00 in pix", date = "22/2/2025" }) => {
  return (
    <div className="shadow-sm card sorterio-card rounded-[18px] max-w-[400px] !overflow-hidden  border border-[#E5E7EB] bg-white">
      <div className="card-header relative w-full h-0 pt-[100%]">
        <img src={image} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>
      <div className="card-body p-3">
        <h4 className="card-title text-[1.25rem] font-bold leading-[1.1] mb-[0.5rem]">{title}</h4>
        <div className="card-label text-sm text-secondary font-medium mb-1">Prize</div>
        <div className="card-prize text-[24px] font-bold text-primary italic mb-[0.5rem]">{prize}</div>
        <div className="card-date flex items-center font-medium gap-2">
          {calendarIcon}
          {date}
        </div>
      </div>
    </div>
  );
};

export default SorteioCard;
