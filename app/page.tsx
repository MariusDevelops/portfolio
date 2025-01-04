import Image from "next/image";

export default function Home() {
  return (
    <section>
      <a href="/" target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Portfolio, made simple!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eos?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A numquam
          molestias accusantium libero quae asperiores beatae repudiandae eum
          aut quod!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          ipsam temporibus. Natus cum rem, eius est exercitationem pariatur
          molestiae aut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          natus eveniet incidunt enim a voluptates cum debitis in cupiditate
          libero, mollitia molestiae adipisci, delectus molestias, autem animi
          pariatur. Sapiente, quae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          omnis.
        </p>
      </div>
    </section>
  );
}
