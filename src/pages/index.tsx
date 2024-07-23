import { Layout } from "../components/layout";
import type { App } from "../server";

const images = [
  "/static/new/curtain.jpg",
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
    <section class="pattern relative z-10 w-full border-b bg-blue-100 pb-12 pt-2 shadow sm:pt-4 md:pt-12">
      <div id="home" class="absolute -top-20"></div>
      <div class="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-8 xl:gap-0">
        <div class="mr-auto place-self-center text-center md:text-left lg:col-span-7">
          <h1 class="mb-4 max-w-2xl text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl">
            Glass Installation in South Florida
          </h1>
          <p class="max-w-2xl font-light text-gray-600 md:text-lg lg:text-xl">
            Our company believes in the core values of customer satisfaction,
            dependability, and integrity, as these values shape our employees
            and the quality of our work.
          </p>
          <blockquote class="py-4 text-xl font-semibold text-gray-900">
            <p>
              Ready to <i>&quot;Let the Light in&quot;</i>?
            </p>
          </blockquote>
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-lg border bg-gray-700 px-5 py-3 text-center text-base font-medium text-white hover:border-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-4"
          >
            Contact Us
          </a>
        </div>

        <div class="order-first mb-4 flex flex-col items-center gap-4 text-center md:text-left lg:order-none lg:col-span-5 lg:mt-0 lg:flex">
          <img
            priority
            width="500"
            height="300"
            src="/static/gallery/4.jpeg"
            alt="mockup"
            class="hidden lg:block"
          />
          <img
            priority
            width="500"
            height="300"
            src="/static/gallery/4.jpeg"
            alt="mockup"
            class="lg:hidden"
          />
          <div class="italic">
            A recent gas station we serviced in Palm Beach
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section class="relative w-full bg-gray-100 py-12">
      <div id="about" class="absolute -top-20"></div>
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="mb-4 w-full text-4xl leading-none tracking-tight md:text-4xl xl:text-5xl">
            About Our Services
          </h2>
          <p class="mb-8 text-lg text-gray-600">
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
        <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <img
              width="300"
              height="100"
              src={"/static/gallery/4.jpeg"}
              alt="picture of commerical building"
              class="h-48 w-full object-cover object-center"
            />
            <div class="p-4">
              <h3 class="text-2xl font-semibold text-gray-800">
                Commercial Construction
              </h3>
            </div>
          </div>

          <div class="overflow-hidden rounded-lg bg-white shadow">
            <img
              width="500"
              height="300"
              src={"/static/gallery/15.jpeg"}
              alt="picture of commerical building"
              class="h-48 w-full object-cover object-center"
            />
            <div class="p-4">
              <h3 class="text-2xl font-semibold text-gray-800">
                Residential Buildings
              </h3>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} class="overflow-hidden rounded-lg bg-white shadow">
              <img
                width="300"
                height="100"
                src={images[index]}
                alt={service.title}
                class="h-48 w-full object-cover object-center"
              />
              <div class="p-4">
                <h3 class="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p class="mt-2 text-gray-600">{service.description}</p>
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
    <section class="relative flex w-full flex-col items-center bg-gray-100 px-2 py-12">
      <div id="gallery" class="absolute -top-20"></div>

      <h2 class="mb-8 max-w-2xl text-center text-4xl leading-none tracking-tight md:text-4xl xl:text-5xl">
        Our Work
      </h2>

      <p class="mb-8 w-full px-4 text-center text-lg text-gray-600 md:w-1/2 md:px-2">
        We have worked with a wide variety of commerical, and residential
        buildings, including gas stations, supermarkets, churches, and more!
        Checkout out our gallery below!
      </p>

      <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
        <div class="flex flex-col gap-4">
          <img src="/static/gallery/12.jpeg" width="300" height="100" alt="" />
          <img src="/static/gallery/1.jpeg" width="300" height="100" alt="" />
          <img width="300" height="100" src="/static/gallery/9.jpeg" alt="" />
          <img width="300" height="100" src="/static/new/4.jpg" alt="" />
        </div>

        <div class="flex flex-col gap-4">
          <img src="/static/new/5.jpg" width="300" height="100" alt="" />
          <img src="/static/new/2.jpg" width="300" height="100" alt="" />
          <img src="/static/gallery/11.jpeg" width="300" height="100" alt="" />
          <img src="/static/gallery/7.jpeg" width="300" height="100" alt="" />
        </div>

        <div class="flex flex-col gap-4">
          <img src="/static/new/1.jpg" width="300" height="100" alt="" />
          <img src="/static/gallery/4.jpeg" width="300" height="100" alt="" />
          <img src="/static/gallery/10.jpeg" width="300" height="100" alt="" />
        </div>
        <div class="flex flex-col gap-4">
          <img src="/static/new/6.jpg" width="300" height="100" alt="" />
          <img src="/static/gallery/15.jpeg" width="300" height="100" alt="" />
          <img src="/static/new/4.jpg" width="300" height="100" alt="" />
          <img src="/static/new/3.jpg" width="300" height="100" alt="" />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section class="pattern-secondary relative z-10 w-full py-24 shadow">
      <div class="container mx-auto flex flex-col items-center">
        <div id="contact" class="absolute -top-20"></div>
        <h2 class="mb-8 max-w-2xl text-center text-4xl leading-none tracking-tight md:text-4xl xl:text-5xl">
          Contact Us
        </h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="rounded-lg bg-white p-6 shadow-lg">
            <h3 class="mb-2 text-xl font-semibold">Hours</h3>
            <p>Monday – Friday</p>
            <p>8:00 a.m. - 4:00 p.m.</p>
          </div>
          <div class="rounded-lg bg-white p-6 shadow-lg">
            <h3 class="mb-2 text-xl font-semibold">Phone</h3>
            <p>561-906-5438</p>
          </div>
          <div class="rounded-lg bg-white p-6 shadow-lg">
            <h3 class="mb-2 text-xl font-semibold">Email</h3>
            <p>Knowlesglass7@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountiesSection() {
  return (
    <section class="container relative mx-auto w-full py-12">
      <div id="location" class="absolute -top-20"></div>

      <h2 class="mb-12 w-full text-center text-4xl leading-none tracking-tight md:text-4xl xl:text-5xl">
        Counties We Service
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-12">
        <div>
          <ul class="flex h-full w-full flex-col justify-center gap-4 text-center text-2xl">
            <li>Manatee County</li>
            <li>Hardee County</li>
            <li>Highlands County</li>
            <li>Okeechobee County</li>
            <li>St Lucie County</li>
            <li>Sarasota County</li>
            <li>DeSOTO County</li>
            <li>Martin County</li>
            <li>Charlotte County</li>
            <li>Glades County</li>
            <li>Lee County</li>
            <li>Hendry County</li>
            <li>Palm Beach County</li>
            <li>Collier County</li>
            <li>Broward County</li>
            <li>Monroe County</li>
            <li>Miami Dade</li>
          </ul>
        </div>
        <div class="order-first col-span-2 md:order-none">
          <img
            src="/static/florida5.png"
            width="1200"
            height="800"
            alt="a map of florida"
          />
        </div>
      </div>
    </section>
  );
}

function CopyrightFooter() {
  return (
    <footer class="w-full py-8 text-center text-gray-600">
      &copy; {new Date().getFullYear()} Knowles Glass & Glazing. All Rights
      Reserved.
    </footer>
  );
}

function LandingPage() {
  return (
    <main class="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutSection />
      <CountiesSection />
      <Contact />
      <Gallery />
      <CopyrightFooter />
    </main>
  );
}

export function registerLanding(app: App) {
  app.get("/", (c) => {
    return c.html(
      <Layout>
        <LandingPage />
      </Layout>,
    );
  });
}
