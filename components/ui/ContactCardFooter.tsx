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
    <div className="flex items-center rounded-lg shadow-sm">
      <img
        src={imageSrc}
        alt="Profile Picture"
        width={50}
        height={50}
        className="mr-4 h-8 w-8 rounded-full md:h-10 md:w-10"
      />
      <div>
        <div className="md:text-md font-semibold tracking-wide">{name}</div>
        <div className="md:text-md opacity-50">{number}</div>
      </div>
    </div>
  );
};

export default ContactCard;
