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
      <img
        src={imageSrc}
        alt="Profile Picture"
        width={50}
        height={50}
        className="mr-4 h-8 w-8 rounded-full md:h-12 md:w-12"
      />
      <div>
        <div className="font-semibold tracking-wide">{name}</div>
        <div className="uppercase tracking-wide opacity-50 md:text-sm">
          {designation}
        </div>
        <div className="opacity-50 md:text-sm">{number}</div>
      </div>
    </div>
  );
};

export default ContactCard;
