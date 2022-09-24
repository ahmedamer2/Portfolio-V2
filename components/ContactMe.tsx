import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
   name: string;
   email: string;
   subject: string;
   message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
   const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = (formData) => {
      window.location.href = `mailto:ahmed.amer7401@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
   };
   return (
      <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-[#787775] text-2xl">
            About
         </h3>
         <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
               Got something on your mind?{" "}
               <span className="underline decoration-[#E85A4F]/50">
                  Let's Talk
               </span>
            </h4>
            <div className="space-y-4 md:space-y-10">
               <div className="flex items-center space-x-5 justify-center">
                  <PhoneIcon className="text-[#E98074] h-7 w-7 animate-pulse" />
                  <p className="text-2xl ">+1234324223</p>
               </div>
               <div className="flex items-center space-x-5 justify-center">
                  <EnvelopeIcon className="text-[#E98074] h-7 w-7 animate-pulse" />
                  <p className="text-2xl">ahmed.amer7401@gmail.com</p>
               </div>
               <div className="flex items-center space-x-5 justify-center">
                  <MapPinIcon className="text-[#E98074] h-7 w-7 animate-pulse" />
                  <p className="text-2xl">123 GoogleDrive Ave</p>
               </div>
            </div>

            <form
               onSubmit={handleSubmit(onSubmit)}
               className="flex flex-col space-y-2 w-fit mx-auto"
            >
               <div className="flex space-x-2">
                  <input
                     {...register("name")}
                     placeholder="Name"
                     className="contactInput"
                     type="text"
                  />
                  <input
                     {...register("email")}
                     placeholder="Email"
                     className="contactInput"
                     type="email"
                  />
               </div>
               <input
                  {...register("subject")}
                  placeholder="subject"
                  className="contactInput"
                  type="text"
               />
               <textarea
                  {...register("message")}
                  placeholder="Message"
                  className="contactInput"
               />
               <button
                  type="submit"
                  className="bg-[#E85A4F] py-5 px-10 rounded-md text-black font-bold text-lg"
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};

export default ContactMe;
