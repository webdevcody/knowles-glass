"use client";

import { scrollTo } from "@/utils/scrollTo";
import Image from "next/image";

const images = [
  "/static/gallery/13.jpeg",
  "/static/gallery/7.jpeg",
  "/static/gallery/4.jpeg",
  "/static/gallery/11.jpeg",
];
const services = [
  {
    title: "Curtain Wall Systems",
    description:
      "Enhance your building's appearance and functionality with our advanced curtain wall systems.",
  },
  {
    title: "Windows",
    description:
      "Discover high-quality and energy-efficient window solutions for your commercial or residential needs.",
  },
  {
    title: "Storefront Frames",
    description:
      "Create an inviting storefront with our durable and stylish frame options.",
  },
  {
    title: "Swinging or Sliding Doors",
    description:
      "Upgrade your entrances with our modern and functional swinging or sliding door solutions.",
  },
];

function HeroSection() {
  return (
    <section className="pattern bg-blue-100 border-b pb-12 pt-2 sm:pt-4 md:pt-12 relative w-full shadow z-10">
      <div id="home" className="absolute -top-20"></div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
            Glass Installation in South Florida
          </h1>
          <p className="max-w-2xl font-light md:text-lg lg:text-xl text-gray-600">
            Our company believes in the core values of customer satisfaction,
            dependability, and integrity, as these values shape our employees
            and the quality of our work.
          </p>
          <blockquote className="text-xl font-semibold text-gray-900 py-4">
            <p>
              Ready to <i>&quot;Let the Light in&quot;</i>?
            </p>
          </blockquote>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center hover:text-gray-900 border hover:border-gray-700 hover:bg-gray-100 rounded-lg bg-gray-700 text-white focus:ring-4 "
          >
            Contact Us
          </button>
        </div>
        <div className="flex flex-col gap-4 text-center order-first lg:order-none lg:mt-0 lg:col-span-5 lg:flex mb-4">
          <Image
            priority
            width="500"
            height="300"
            src="/static/gallery/2.jpeg"
            alt="mockup"
            className="hidden lg:block "
          />
          <Image
            priority
            width="500"
            height="300"
            src="/static/home/building.png"
            alt="mockup"
            className=" lg:hidden"
          />
          <div className="italic">
            A recent ALDI market we serviced in Palm Beach
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-12 bg-gray-100 w-full relative">
      <div id="about" className="absolute -top-20"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-4xl tracking-tight leading-none md:text-4xl xl:text-5xl w-full">
            About Our Services
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Knowles Glass &amp; Glazing is a family-owned business, operating
            out of South Florida. In our years of operation, we have provided
            quality services to our customers, and we pride ourselves on
            dependability, productivity, and professionalism as we provide our
            services to our customers.
            <br />
            <br />
            We do both <b>commercial</b> and <b>residential </b>
            buildings.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <Image
              width="300"
              height="100"
              src={"/static/gallery/4.jpeg"}
              alt="picture of commerical building"
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Commercial Construction
              </h3>
              <p className="text-gray-600 mt-2">
                We service commerical building needing various glass and glazing
                needs
              </p>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <Image
              width="500"
              height="300"
              src={"/static/gallery/15.jpeg"}
              alt="picture of commerical building"
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Residential Buildings
              </h3>
              <p className="text-gray-600 mt-2">
                We service commerical building needing various glass and glazing
                needs
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <Image
                width="300"
                height="100"
                src={images[index]}
                alt={service.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="bg-gray-100 w-full relative py-12 flex flex-col items-center px-2">
      <div id="gallery" className="absolute -top-20"></div>

      <h2 className="text-center max-w-2xl mb-8 text-4xl tracking-tight leading-none md:text-4xl xl:text-5xl">
        Our Work
      </h2>

      <p className="text-center text-gray-600 text-lg mb-8 w-full md:w-1/2 px-4 md:px-2">
        We have worked with a variety of types of commerical building, including
        gas stations, super markets, churches, etc. Checkout our gallery below!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <div className="flex flex-col gap-4">
          <Image
            src="/static/gallery/12.jpeg"
            width="300"
            height="100"
            alt=""
          />
          <Image src="/static/gallery/1.jpeg" width="300" height="100" alt="" />
          <Image
            width="300"
            height="100"
            src="/static/gallery/13.jpeg"
            alt=""
          />
          <Image width="300" height="100" src="/static/gallery/9.jpeg" alt="" />
        </div>

        <div className="flex flex-col gap-4">
          <Image src="/static/gallery/2.jpeg" width="300" height="100" alt="" />
          <Image src="/static/gallery/5.jpeg" width="300" height="100" alt="" />
          <Image src="/static/gallery/6.jpeg" width="300" height="100" alt="" />
          <Image
            src="/static/gallery/11.jpeg"
            width="300"
            height="100"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-4">
          <Image src="/static/gallery/8.jpeg" width="300" height="100" alt="" />
          <Image src="/static/gallery/4.jpeg" width="300" height="100" alt="" />
          <Image
            src="/static/gallery/10.jpeg"
            width="300"
            height="100"
            alt=""
          />
          <Image src="/static/gallery/7.jpeg" width="300" height="100" alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <Image src="/static/gallery/3.jpeg" width="300" height="100" alt="" />
          <Image
            src="/static/gallery/15.jpeg"
            width="300"
            height="100"
            alt=""
          />
          <Image
            src="/static/gallery/14.jpeg"
            width="300"
            height="100"
            alt=""
          />
          <Image
            src="/static/gallery/13.jpeg"
            width="300"
            height="100"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="pattern-secondary relative py-24 w-full shadow z-10">
      <div className="container mx-auto flex flex-col items-center ">
        <div id="contact" className="absolute -top-20"></div>
        <h2 className="text-center max-w-2xl mb-8 text-4xl tracking-tight leading-none md:text-4xl xl:text-5xl">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p>Monday – Friday</p>
            <p>8:00 a.m. - 4:00 p.m.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>561-906-5438</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>Knowlesglass7@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CopyrightFooter() {
  return (
    <footer className=" py-8 text-gray-600 text-center w-full">
      &copy; {new Date().getFullYear()} Knowles Glass & Glazing. All Rights
      Reserved.
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutSection />
      <Contact />
      <Gallery />
      <CopyrightFooter />
    </main>
  );
}
