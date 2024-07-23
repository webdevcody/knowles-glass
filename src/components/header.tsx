import { html } from "hono/html";
import { MenuIcon } from "./icons";

export function Header() {
  return (
    <>
      <div
        class={`fixed left-0 right-0 top-0 z-50 border-b bg-white text-gray-900 shadow-lg`}
      >
        <div class="container mx-auto flex items-center justify-between">
          <a href="#home">
            <img src="/static/logo.png" alt="logo" width="150" height="100" />
          </a>
          <button
            id="toggle-menu"
            class="mr-4 text-gray-500 hover:text-blue-500 md:hidden"
          >
            <MenuIcon />
          </button>
          <div class="hidden gap-8 text-lg md:flex">
            <a href="#home" class="hover:text-blue-500">
              Home
            </a>
            <a href="#about" class="hover:text-blue-500">
              About
            </a>
            <a href="#location" class="hover:text-blue-500">
              Location
            </a>
            <a href="#contact" class="hover:text-blue-500">
              Contact Us
            </a>
            <a href="#gallery" class="hover:text-blue-500">
              Gallery
            </a>
          </div>
        </div>

        <div
          id="mobile-menu"
          class={`relative hidden w-full border-t bg-white text-center md:hidden`}
        >
          <div class="mb-4 mt-2 flex flex-col justify-center text-center">
            <a href="#home" class="block py-2 text-lg">
              Home
            </a>
            <a href="#about" class="block py-2 text-lg">
              About
            </a>
            <a href="#location" class="block py-2 text-lg">
              Location
            </a>
            <a href="#contact" class="block py-2 text-lg">
              Contact Us
            </a>
            <a href="#gallery" class="block py-2 text-lg">
              Gallery
            </a>
          </div>
        </div>
      </div>

      <div className="h-[75px]"></div>

      {html`
        <script>
          document
            .getElementById("toggle-menu")
            .addEventListener("click", () => {
              document.getElementById("mobile-menu").classList.toggle("hidden");
            });

          document.querySelectorAll("#mobile-menu a").forEach((link) => {
            link.addEventListener("click", () => {
              document.getElementById("mobile-menu").classList.add("hidden");
            });
          });
        </script>
      `}
    </>
  );
}
