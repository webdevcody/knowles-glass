export function scrollTo(id: string) {
  const element = document.querySelector(id);
  element?.scrollIntoView({
    behavior: "smooth",
  });
}
