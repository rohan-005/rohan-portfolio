import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaUnity,
  FaDiscord,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const PillNav = ({
  items = [
    { icon: <FaInstagram size={22} />, label: "Instagram", href: "https://www.instagram.com/yourusername", target: "_blank" },
    { icon: <FaGithub size={22} />, label: "GitHub", href: "https://github.com/yourusername", target: "_blank" },
    { icon: <FiMail size={22} />, label: "Mail", href: "mailto:yourmail@example.com", target: "_blank" },
    { icon: <FaLinkedin size={22} />, label: "LinkedIn", href: "https://www.linkedin.com/in/yourusername", target: "_blank" },
    { icon: <FaUnity size={22} />, label: "Unity", href: "https://unity.com/u/yourusername", target: "_blank" },
    { icon: <FaDiscord size={22} />, label: "Discord", href: "https://discord.com/users/your_discord_id", target: "_blank" },
  ],
  className = "",
  ease = "power3.easeOut",
  baseColor = "#077A7D",
  pillColor = "#060010",
  onMobileMenuClick,
  initialLoadAnimation = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);
        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener("resize", layout);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, { scale: 1, duration: 0.6, ease });
      }

      if (navItems) {
        gsap.set(navItems, { opacity: 0 });
        gsap.to(navItems, { opacity: 1, duration: 0.6, ease });
      }
    }

    return () => window.removeEventListener("resize", layout);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(menu, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.3, ease });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease,
          onComplete: () => gsap.set(menu, { visibility: "hidden" }),
        });
      }
    }

    onMobileMenuClick?.();
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--pill-text"]: "#fff",
    ["--hover-text"]: "#fff",
    ["--nav-h"]: "42px",
    ["--pill-gap"]: "10px",
  };

  return (
    <div className="absolute z-[1000] w-full md:w-auto">
      <nav
        className={`w-full md:w-max flex items-center justify-between md:justify-start px-3 ${className}`}
        aria-label="Primary"
        style={cssVars}
      >
        {/* 👾 Logo */}
        <div
          ref={logoRef}
          className="font-creepy flex items-center justify-center text-red-200 text-3xl sm:text-4xl whitespace-nowrap"
        >
          Sync Up -
        </div>

        {/* 🖥️ Desktop Items */}
        <div
          ref={navItemsRef}
          className="hidden md:flex relative items-center rounded-full ml-2"
          style={{
            height: "var(--nav-h)",
            background: "var(--base)",
          }}
        >
          <ul
            role="menubar"
            className="flex items-stretch m-0 p-[3px] h-full gap-[var(--pill-gap)]"
          >
            {items.map((item, i) => (
              <li key={item.href} className="flex h-full group">
                <a
                  href={item.href}
                  target={item.target || "_self"}
                  rel="noopener noreferrer"
                  className="relative overflow-hidden inline-flex items-center justify-center h-full rounded-full text-white px-3 hover:scale-110 transition-all duration-300"
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  style={{
                    background: "var(--pill-bg)",
                    color: "var(--pill-text)",
                  }}
                >
                  <span
                    ref={(el) => (circleRefs.current[i] = el)}
                    className="absolute left-1/2 bottom-0 rounded-full block pointer-events-none"
                    style={{ background: "var(--base)", willChange: "transform" }}
                    aria-hidden="true"
                  />
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1"
          style={{
            width: "var(--nav-h)",
            height: "var(--nav-h)",
            background: "var(--base)",
          }}
        >
          <span className="hamburger-line w-4 h-0.5 bg-white rounded" />
          <span className="hamburger-line w-4 h-0.5 bg-white rounded" />
        </button>
      </nav>

      {/* 📱 Mobile Dropdown */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[3.5rem] left-3 right-3 rounded-[25px] p-2 shadow-lg z-[998]"
        style={{
          ...cssVars,
          background: "rgba(7, 122, 125, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target={item.target || "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-[50px] hover:bg-white/20 transition-all"
                style={{
                  background: "var(--pill-bg)",
                  color: "#fff",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
        .font-creepy {
          font-family: 'Creepster', cursive;
        }
        @media (max-width: 640px) {
          .font-creepy {
            font-size: 1.5rem;
            letter-spacing: 0.5px;
          }
        }
      `}</style>
    </div>
  );
};

export default PillNav;
