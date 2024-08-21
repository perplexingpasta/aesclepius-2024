const LitUpButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative md:mt-10 rounded-lg p-[3px]" onClick={handleClick}>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purpledark" />
      <div
        className={`group relative inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-7 py-2 font-semibold text-black-100 transition duration-200 ease-in-out hover:bg-transparent hover:text-white ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default LitUpButton;
