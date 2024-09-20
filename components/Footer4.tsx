import { core, socialMedia } from "@/data/index2";
import Image from "next/image";
import Link from "next/link";
import ContactCard from "./ui/ContactCardFooter";

const Footer = () => {
  return (
    <div className="relative mx-auto mt-20 flex max-w-[85rem] flex-col items-center justify-center overflow-clip px-5 pt-10 text-white sm:px-10 lg:pt-20">
      <div className="relative w-full pb-10" id="footer">
        <div className="relative flex flex-col justify-around lg:flex-1 lg:flex-row">
          <div className="absolute -top-6 h-[10rem] w-[10rem] opacity-40 lg:left-32 lg:h-[22rem] lg:w-[22rem]">
            <Image
              src="/images/logo.svg"
              className="z-0 saturate-50"
              alt="Default"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="z-50 ml-2 mt-12 lg:ml-0 lg:mt-20">
            <h1 className="z-10 mt-2 text-4xl font-black uppercase leading-tight tracking-wide text-white lg:mt-0 lg:text-7xl lg:!leading-snug">
              Asclepius {/* <br className="hidden lg:block" /> */}
              <span className="gradient-text animate-gradient font-black text-transparent">
                2024
              </span>
            </h1>
            <p className="z-10 mt-2 font-lexendDeca text-base font-light uppercase italic text-white lg:my-0 lg:mt-0 lg:text-xl lg:tracking-widest">
              Pathos To Praxis
            </p>
          </div>

          {/* <br className="block lg:hidden" />
        <br className="block lg:hidden" /> */}
          <div className="hidden flex-col justify-between lg:mb-0 lg:ml-20 lg:mt-0 lg:flex">
            <h1 className="mb-2 text-xl lg:text-2xl">Organising Committee</h1>
            {core.map(({ id, img, name, desig, number }) => (
              <div key={id}>
                <ContactCard
                  imageSrc={img}
                  name={name}
                  designation={desig}
                  number={number}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 border-b border-gray-800 lg:mt-12" />

        <div className="relative z-50 mt-4 flex flex-col items-center justify-between font-lexendDeca lg:flex-row">
          <p className="pb-2 text-sm font-light hover:text-indigo-400 lg:pb-0 lg:text-base lg:font-normal">
            7th International UG Medical Conference
          </p>

          <p className="text-sm font-light hover:text-indigo-400 lg:text-base lg:font-normal">
            22 - 26th October
          </p>

          <div className="flex items-center gap-6 pt-5 lg:gap-3 lg:pt-0">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
              >
                <Link
                  href={profile.link}
                  target="_blank"
                  className="transition ease-in-out hover:scale-110"
                >
                  <Image
                    src={profile.img}
                    alt={profile.alt}
                    width={profile.width}
                    height={profile.height}
                  />
                </Link>
              </div>
            ))}
            <div className="flex flex-row space-x-3">
              <Image
                src="/images/email-white.svg"
                width={20}
                height={20}
                alt=""
              />
              <a
                href="mailto:asclepius2k24@gmail.com"
                className="hover:text-purple"
              >
                asclepius2k24@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
