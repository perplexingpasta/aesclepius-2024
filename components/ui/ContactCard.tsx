import React from "react";

interface ContactCardProps {
  imageSrc: string;
  name: string;
  number: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  imageSrc,
  name,
  number,
}) => {
  return (
    <div className="flex items-center rounded-lg py-4 shadow-sm">
      <img
        src={imageSrc}
        alt="Profile Picture"
        width={50}
        height={50}
        className="mr-4 h-10 md:h-12 w-10 md:w-12 rounded-full"
      />
      <div>
        <div className="md:text-lg font-semibold">{name}</div>
        <div className="opacity-50 md:text-base text-sm">{number}</div>
      </div>
    </div>
  );
};

export default ContactCard;
