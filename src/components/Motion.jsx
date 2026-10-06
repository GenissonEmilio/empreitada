"use client";
import { useEffect } from "react";

export default function Motion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer;
    const update = () => {
      observer?.disconnect();
      document.documentElement.classList.toggle(
        "js-motion",
        !preference.matches,
      );
      if (preference.matches) return;
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.08 },
      );
      document
        .querySelectorAll(".reveal")
        .forEach((element) => observer.observe(element));
    };
    update();
    preference.addEventListener("change", update);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", update);
      document.documentElement.classList.remove("js-motion");
    };
  }, []);
  return null;
}
