const LitUpButtonMini = ({
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
    <button className="relative rounded-lg p-[3px]" onClick={handleClick}>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-700 to-purpledark" />
      <div
        className={`group relative inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-black-100 bg-transparent px-7 py-2 text-sm uppercase tracking-widest text-white transition duration-300 ease-in-out md:text-base ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default LitUpButtonMini;
