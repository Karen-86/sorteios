import React from "react";
import localData from "@/localData";

const {starIcon} = localData.svgs

const DizendoCard = ({
  rating = 5,
  text = "Lorem Ipsum dolor amet sit. This is just a dummy text embedded by lorem ipsum.",
  name = "John Doe",
  profession = "Hourglass",
}) => {
  return (
    <div className="card dizendo-card">
      <div className="card-header">
        <div className="rating flex mb-[1.7rem]">
          {starIcon}
          {starIcon}
          {starIcon}
          {starIcon}
          {starIcon}
        </div>
      </div>
      <div className="card-body mb-[3rem]">
        <p className="card-text text-[2rem] xl:text-[3rem] leading-[1.3]">{text}</p>
      </div>
      <div className="card-footer">
        <h4 className="card-name text-[1.125rem] mb-[0.2rem] font-medium">{name}</h4>
        <div className="card-profession text-secondary font-medium">{profession}</div>
      </div>
    </div>
  );
};

export default DizendoCard;
