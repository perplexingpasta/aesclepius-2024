import Image from "next/image";
import React from "react";

interface ContactCardProps {
  imageSrc: string;
  name: string;
  designation: string;
  number: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  imageSrc,
  name,
  designation,
  number,
}) => {
  return (
    <div className="flex items-center rounded-lg py-3 shadow-sm">
      <Image
        src={imageSrc}
        alt="Profile Picture"
        width={50}
        height={50}
        className="mr-5 h-[3.4rem] w-[3.4rem] rounded-full"
      />
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm uppercase opacity-50">{designation}</div>
        <div className="text-sm opacity-50">{number}</div>
      </div>
    </div>
  );
};

export default ContactCard;
