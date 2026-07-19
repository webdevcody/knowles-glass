import { html } from "hono/html";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_HREF } from "../business";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";

export function Header() {
  return (
    <>
      <a class="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header class="site-header">
        <div class="site-header__inner">
          <a
            class="brand-link"
            href="#home"
            aria-label={`${BUSINESS_NAME} home`}
          >
            <img
              class="brand-logo"
              src="/static/logo.png"
              alt={BUSINESS_NAME}
              width="500"
              height="250"
            />
          </a>

          <nav class="desktop-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#work">Our work</a>
            <a href="#service-area">Service area</a>
            <a href="#about">About</a>
          </nav>

          <a class="header-call" href={PHONE_HREF}>
            <PhoneIcon />
            <span>{PHONE_DISPLAY}</span>
          </a>

          <button
            id="toggle-menu"
            class="menu-toggle"
            type="button"
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="Open navigation menu"
          >
            <span id="menu-open-icon">
              <MenuIcon />
            </span>
            <span id="menu-close-icon" class="hidden">
              <CloseIcon />
            </span>
          </button>
        </div>

        <nav
          id="mobile-menu"
          class="mobile-nav hidden"
          aria-label="Mobile navigation"
        >
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#service-area">Service area</a>
          <a href="#about">About</a>
          <a class="mobile-nav__call" href={PHONE_HREF}>
            <PhoneIcon />
            Call {PHONE_DISPLAY}
          </a>
        </nav>
      </header>

      {html`
        <script>
          document.addEventListener("DOMContentLoaded", () => {
            const toggle = document.getElementById("toggle-menu");
            const menu = document.getElementById("mobile-menu");
            const openIcon = document.getElementById("menu-open-icon");
            const closeIcon = document.getElementById("menu-close-icon");

            if (!toggle || !menu || !openIcon || !closeIcon) return;

            const setMenuOpen = (isOpen) => {
              menu.classList.toggle("hidden", !isOpen);
              openIcon.classList.toggle("hidden", isOpen);
              closeIcon.classList.toggle("hidden", !isOpen);
              toggle.setAttribute("aria-expanded", String(isOpen));
              toggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu",
              );
            };

            toggle.addEventListener("click", () => {
              setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
            });

            menu.querySelectorAll("a").forEach((link) => {
              link.addEventListener("click", () => {
                setMenuOpen(false);
                const href = link.getAttribute("href") || "";

                if (href.startsWith("#")) {
                  const destination = document.getElementById(href.slice(1));
                  const heading = destination?.querySelector("h1, h2");

                  window.requestAnimationFrame(() => {
                    if (heading instanceof HTMLElement) {
                      heading.focus({ preventScroll: true });
                    }
                  });
                } else {
                  toggle.focus();
                }
              });
            });

            document.addEventListener("keydown", (event) => {
              if (
                event.key === "Escape" &&
                toggle.getAttribute("aria-expanded") === "true"
              ) {
                setMenuOpen(false);
                toggle.focus();
              }
            });
          });
        </script>
      `}
    </>
  );
}
