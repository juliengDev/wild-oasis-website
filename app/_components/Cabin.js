import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="mb-12 grid grid-cols-1 gap-8 border border-primary-800 px-4 py-3 md:mb-16 md:gap-12 lg:mb-24 lg:grid-cols-[3fr_4fr] lg:gap-20 lg:px-10">
      {/* Image container with responsive height */}
      <div className="relative h-64 w-full md:h-80 lg:h-auto lg:-translate-x-3 lg:scale-[1.15]">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div className="pt-4 lg:pt-0">
        {/* Responsive header */}
        <h3 className="mb-5 bg-primary-950 p-4 pb-1 text-3xl font-black text-accent-100 md:text-5xl lg:w-[150%] lg:translate-x-[-254px] lg:p-6 lg:text-7xl">
          Cabin {name}
        </h3>

        <p className="mb-6 text-base text-primary-300 md:mb-8 md:text-lg lg:mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="mb-5 flex flex-col gap-3 md:mb-6 md:gap-4 lg:mb-7">
          <li className="flex items-center gap-3">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base md:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base md:text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base md:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
