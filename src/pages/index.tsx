import {
  BUSINESS_HOURS,
  BUSINESS_NAME,
  COUNTIES,
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICES,
} from "../business";
import { ArrowUpRightIcon, MailIcon, PhoneIcon } from "../components/icons";
import { Layout } from "../components/layout";
import type { App } from "../server";

const projects = [
  {
    imageKey: "new-5",
    width: 2869,
    height: 1515,
    alt: "Completed commercial storefront with aluminum-framed windows and glass entrance doors",
    title: "Storefront renovation",
    detail: "Window wall, transoms, and glass entrances",
    className: "project project--feature",
    sizes: "(min-width: 1280px) 735px, (min-width: 768px) 58vw, 100vw",
  },
  {
    imageKey: "gallery-11",
    width: 960,
    height: 1280,
    alt: "Aluminum-framed automatic glass entrance inside a commercial building",
    title: "Automatic entrance",
    detail: "Interior storefront framing and doors",
    className: "project project--tall",
    sizes: "(min-width: 1280px) 520px, (min-width: 768px) 42vw, 100vw",
  },
  {
    imageKey: "gallery-15",
    width: 960,
    height: 1280,
    alt: "Dark-framed window installation on a South Florida residence",
    title: "Residential windows",
    detail: "Custom openings and dark aluminum frames",
    className: "project",
    sizes: "(min-width: 1280px) 405px, (min-width: 768px) 33vw, 100vw",
  },
  {
    imageKey: "gallery-1",
    width: 1280,
    height: 622,
    alt: "Double glass entrance doors with aluminum storefront framing",
    title: "Storefront entrance",
    detail: "Double doors and surrounding glass",
    className: "project project--wide",
    sizes: "(min-width: 1280px) 835px, (min-width: 768px) 66vw, 100vw",
  },
];

const galleryProjects = [
  {
    imageKey: "gallery-12",
    width: 300,
    height: 400,
    alt: "Automatic sliding glass doors set within a commercial aluminum storefront",
    title: "Automatic sliding entrance",
  },
  {
    imageKey: "gallery-9",
    width: 960,
    height: 1280,
    alt: "Floor-to-ceiling commercial window wall and glass door installation",
    title: "Commercial window wall",
  },
  {
    imageKey: "new-4",
    width: 3024,
    height: 2205,
    alt: "Completed automatic glass entrance and storefront windows",
    title: "Automatic doors and storefront",
  },
  {
    imageKey: "new-2",
    width: 3000,
    height: 1972,
    alt: "Wide commercial storefront window and entrance installation",
    title: "Commercial storefront glazing",
  },
  {
    imageKey: "gallery-7",
    width: 960,
    height: 1280,
    alt: "Commercial aluminum windows installed during building construction",
    title: "Commercial window installation",
  },
  {
    imageKey: "new-1",
    width: 1985,
    height: 3576,
    alt: "Two-story commercial building with aluminum window systems",
    title: "Two-story window system",
  },
  {
    imageKey: "gallery-4",
    width: 500,
    height: 375,
    alt: "Commercial storefront framing and glass installed during construction",
    title: "New construction storefront",
  },
  {
    imageKey: "gallery-10",
    width: 960,
    height: 1280,
    alt: "Horizontal clerestory windows installed on a commercial building",
    title: "Commercial clerestory windows",
  },
  {
    imageKey: "new-6",
    width: 2904,
    height: 1556,
    alt: "Completed commercial window wall wrapping a building entrance",
    title: "Wraparound storefront",
  },
  {
    imageKey: "new-3",
    width: 2134,
    height: 2377,
    alt: "Upper and lower commercial window bands on a finished building",
    title: "Commercial window bands",
  },
];

function getProjectSrcSet(imageKey: string, width: number) {
  const candidates: string[] = [];

  if (width > 640) {
    candidates.push(`/static/optimized/${imageKey}-640.webp 640w`);
  }

  if (width > 1280) {
    candidates.push(`/static/optimized/${imageKey}-1280.webp 1280w`);
  }

  candidates.push(`/static/optimized/${imageKey}-full.webp ${width}w`);
  return candidates.join(", ");
}

function ResponsiveProjectImage({
  imageKey,
  width,
  height,
  alt,
  sizes,
  loading = "lazy",
  fetchPriority,
}: {
  imageKey: string;
  width: number;
  height: number;
  alt: string;
  sizes: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high";
}) {
  return (
    <img
      src={`/static/optimized/${imageKey}-full.webp`}
      srcSet={getProjectSrcSet(imageKey, width)}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchpriority={fetchPriority}
    />
  );
}

function HeroSection() {
  return (
    <section id="home" class="hero" aria-labelledby="hero-title">
      <div class="hero__content">
        <p class="hero__kicker">Commercial + residential glazing</p>
        <h1 id="hero-title">Glass installation, built for South Florida.</h1>
        <p class="hero__lede">
          {BUSINESS_NAME} installs commercial and residential storefronts,
          curtain wall systems, windows, and glass doors.
        </p>

        <div class="hero__actions">
          <a class="button button--light" href={PHONE_HREF}>
            <PhoneIcon />
            Call {PHONE_DISPLAY}
          </a>
          <a class="text-link text-link--on-dark" href="#work">
            See recent work
            <ArrowUpRightIcon />
          </a>
        </div>

        <ul class="hero__facts" aria-label="Company highlights">
          <li>Family-owned</li>
          <li>Commercial &amp; residential</li>
          <li>Serving {COUNTIES.length} Florida counties</li>
        </ul>
      </div>

      <figure class="hero__media">
        <ResponsiveProjectImage
          imageKey="gallery-2"
          width={1280}
          height={960}
          alt="South Florida commercial building with completed storefront glazing"
          sizes="(min-width: 960px) 54vw, 100vw"
          loading="eager"
          fetchPriority="high"
        />
        <figcaption>
          <span>Commercial storefront and entrance system</span>
          <span>South Florida</span>
        </figcaption>
      </figure>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      class="section section--services"
      aria-labelledby="services-title"
    >
      <div class="section-shell services-layout">
        <div class="services-intro">
          <h2 id="services-title" tabIndex={-1}>
            A clear scope for every opening.
          </h2>
          <p>
            From commercial building envelopes to residential window openings,
            our work centers on the systems that bring in light, create access,
            and finish a property.
          </p>
          <a class="text-link" href="#contact">
            Discuss your project
            <ArrowUpRightIcon />
          </a>
        </div>

        <div class="service-list">
          {SERVICES.map((service) => (
            <article class="service-row" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section
      id="work"
      class="section section--work"
      aria-labelledby="work-title"
    >
      <div class="section-shell">
        <div class="section-heading section-heading--split">
          <div>
            <h2 id="work-title" tabIndex={-1}>
              Work you can inspect.
            </h2>
          </div>
          <p>
            Real storefronts, entrances, curtain wall, and window installations
            from commercial and residential projects across South Florida.
          </p>
        </div>

        <div class="project-grid">
          {projects.map((project) => (
            <figure class={project.className} key={project.imageKey}>
              <div class="project__image">
                <ResponsiveProjectImage
                  imageKey={project.imageKey}
                  width={project.width}
                  height={project.height}
                  alt={project.alt}
                  sizes={project.sizes}
                />
              </div>
              <figcaption>
                <strong>{project.title}</strong>
                <span>{project.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div class="archive-heading">
          <h3>More from the project archive</h3>
          <p>
            A broader look at storefront systems, entrances, window walls, and
            construction-stage glazing.
          </p>
        </div>

        <div class="archive-grid">
          {galleryProjects.map((project) => (
            <figure class="archive-project" key={project.imageKey}>
              <ResponsiveProjectImage
                imageKey={project.imageKey}
                width={project.width}
                height={project.height}
                alt={project.alt}
                sizes="(min-width: 1024px) 405px, (min-width: 768px) calc(50vw - 2rem), calc(100vw - 2.5rem)"
              />
              <figcaption>{project.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      class="section section--about"
      aria-labelledby="about-title"
    >
      <div class="section-shell about-layout">
        <div class="about-copy">
          <h2 id="about-title" tabIndex={-1}>
            Family-owned. Focused on dependable work.
          </h2>
          <p>
            {BUSINESS_NAME} is a South Florida family-owned business serving
            both commercial and residential projects. Dependability,
            productivity, professionalism, and customer satisfaction guide how
            we approach each job.
          </p>
        </div>

        <div class="project-start">
          <h3>A straightforward start</h3>
          <ol>
            <li>
              <span>1</span>
              <div>
                <strong>Share the project</strong>
                <p>Tell us the property location, project type, and timing.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>Review the scope</strong>
                <p>
                  We will discuss the opening, system, and next details needed.
                </p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>Coordinate next steps</strong>
                <p>Call or email our team to move the conversation forward.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  return (
    <section
      id="service-area"
      class="section section--area"
      aria-labelledby="service-area-title"
    >
      <div class="section-shell area-layout">
        <div class="area-copy">
          <h2 id="service-area-title" tabIndex={-1}>
            Serving South Florida from the Gulf Coast to Miami-Dade.
          </h2>
          <p>
            Have a project in the region? Call with the property location and
            scope so our team can confirm the next step.
          </p>
          <a class="button button--brand" href={PHONE_HREF}>
            <PhoneIcon />
            Check your project location
          </a>
        </div>

        <ul class="county-list" aria-label="Counties served">
          {COUNTIES.map((county) => (
            <li key={county}>{county}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      class="contact-section"
      aria-labelledby="contact-title"
    >
      <div class="section-shell contact-layout">
        <div>
          <h2 id="contact-title" tabIndex={-1}>
            Tell us what you are planning.
          </h2>
          <p class="contact-intro">
            Call to discuss your project, or email the location, scope, and any
            plans or photos you already have.
          </p>
        </div>

        <address class="contact-details">
          <a href={PHONE_HREF}>
            <span class="contact-details__icon">
              <PhoneIcon />
            </span>
            <span>
              <small>Call us</small>
              <strong>{PHONE_DISPLAY}</strong>
            </span>
            <ArrowUpRightIcon />
          </a>

          <a href={EMAIL_HREF}>
            <span class="contact-details__icon">
              <MailIcon />
            </span>
            <span>
              <small>Email project details</small>
              <strong>{EMAIL}</strong>
            </span>
            <ArrowUpRightIcon />
          </a>

          <div class="contact-hours">
            <small>Business hours</small>
            <strong>{BUSINESS_HOURS.display}</strong>
          </div>
        </address>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer class="site-footer">
      <div class="section-shell site-footer__inner">
        <div>
          <img
            src="/static/logo.png"
            alt={BUSINESS_NAME}
            width="500"
            height="250"
            loading="lazy"
          />
          <p>Commercial and residential glass installation in South Florida.</p>
        </div>
        <div class="site-footer__links">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#service-area">Service area</a>
          <a href="#home">Back to top</a>
        </div>
        <p class="site-footer__copyright">
          &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

function MobileContactBar() {
  return (
    <nav class="mobile-contact-bar" aria-label={`Contact ${BUSINESS_NAME}`}>
      <a href={PHONE_HREF}>
        <PhoneIcon />
        Call now
      </a>
      <a href={EMAIL_HREF}>
        <MailIcon />
        Email
      </a>
    </nav>
  );
}

function LandingPage() {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <AboutSection />
        <ServiceAreaSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileContactBar />
    </>
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
