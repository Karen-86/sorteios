"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";

type InputDemoProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  inputClassName?: string;
  label?: ReactNode;
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  successMessage?: string;
};

export function InputDemo({
  className = "",
  inputClassName = "",
  label = "",
  callback = () => {},
  successMessage = "looks good",
  errorMessage = "",
  required=false,
  ...props
}: InputDemoProps) {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(uuidv4());
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    callback(e);
  };

  return (
    <div className={`field grid items-center gap-1.5 mb-[1.7rem] w-full ${className}`}>
      {label && <Label className="mb-[0.2rem]" htmlFor={id}>{label}</Label>}
      <Input
        required={required}
        id={id}
        {...props}
        onChange={onChange}
        className={`${inputClassName} py-[1.3rem]`}
      />
      {/* <div className="valid-feedback text-green-600 text-sm">{successMessage}</div> */}
      {/* <div className="invalid-feedback text-red-600 text-sm">{errorMessage}</div> */}
    </div>
  );
}
