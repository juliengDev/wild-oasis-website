import Link from "next/link";
import Image from "next/image";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";
import { getCabins } from "@/app/_lib/data-service";

export const revalidate = 86400;
export const metadata = {
  title: "About",
};
export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-lg md:grid-cols-2 lg:grid-cols-5 lg:gap-x-24 lg:gap-y-32">
      <div className="col-span-1 lg:col-span-3">
        <h1 className="mb-6 text-3xl font-medium text-accent-400 md:mb-8 lg:mb-10 lg:text-4xl">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-6 md:space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-1 mx-auto w-full max-w-lg md:max-w-none lg:col-span-2">
        <Image
          src={about1}
          alt="Family sitting around a fire pit in front of cabin"
          className="w-full"
          placeholder="blur"
        />
      </div>

      <div className="col-span-1 mx-auto w-full max-w-lg md:max-w-none lg:col-span-2">
        <Image
          src={about2}
          className="object-cover"
          placeholder="blur"
          alt="Family that manages The Wild Oasis"
        />
      </div>
      {/* si tu dois utiliser un chemin absolu pour l image : 
      wrap avec une div et donne une dimension qvec une position relative
      permet de rendre l image responsive en specifiant la taille du parent et non celle de l image
      
      <div className="relative col-span-1 mx-auto aspect-square w-full max-w-lg md:max-w-none lg:col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div> */}

      <div className="col-span-1 lg:col-span-3">
        <h1 className="mb-6 text-3xl font-medium text-accent-400 md:mb-8 lg:mb-10 lg:text-4xl">
          Managed by our family since 1962
        </h1>

        <div className="space-y-6 md:space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div className="flex justify-center pt-2">
            <Link
              href="/cabins"
              className="mt-4 inline-block bg-accent-500 px-6 py-4 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600 md:px-8 md:py-5"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
