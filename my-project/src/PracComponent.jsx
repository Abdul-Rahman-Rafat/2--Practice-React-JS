import { useState, useEffect } from "react";
import "./PracComponent.css";

export default function PracComponent() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / pageHeight) * 100;

      setScrollProgress(progress);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        onClick={() =>
          document
            .getElementById("section3")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        go to section 3
      </button>
      <div className="scrollMap">
        <div
          className="circle"
          style={{
            top: `${scrollProgress}%`,
          }}
        />

        <div className="columns">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <section className="section">Section 1</section>
      <section className="section">Section 2</section>
      <section id="section3" className="section">
        Section 3
      </section>
      <section className="section">Section 4</section>
    </>
  );
}
