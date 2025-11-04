import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaGithub, FaLinkedin, FaInstagram, FaUnity, FaDiscord } from "react-icons/fa";
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
    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, { scale: 1, duration: 0.6, ease });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, { width: "auto", duration: 0.6, ease });
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: "auto" });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: "auto" });
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
        gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease });
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
    ["--hover-text"]: "#fff",
    ["--pill-text"]: "#fff",
    ["--nav-h"]: "42px",
    ["--pill-gap"]: "10px",
  };

  return (
    <div className="absolute z-1000 w-full md:w-auto">
      <nav
        className={`w-full md:w-max flex items-center justify-between md:justify-start ${className}`}
        aria-label="Primary"
        style={cssVars}
      >
        {/* Sync Up label */}
        <div
          ref={logoRef}
          className="font-creepy flex items-center justify-center text-red-200 text-4xl  pr-4"
        >
          Sync Up - 
        </div>

        {/* Desktop */}
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex ml-2"
          style={{
            height: "var(--nav-h)",
            background: "var(--base, #000)",
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => (
              <li key={item.href} role="none" className="flex h-full group">
                <a
                  role="menuitem"
                  href={item.href}
                  target={item.target || "_self"}
                  rel="noopener noreferrer"
                  className="relative overflow-hidden inline-flex items-center justify-center h-full rounded-full text-white cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-110 px-3"
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  style={{
                    background: "var(--pill-bg, #fff)",
                    color: "var(--pill-text, var(--base, #fff))",
                  }}
                >
                  <span
                    className="text-2xl hover-circle absolute left-1/2 bottom-0 rounded-full z-1 block pointer-events-none"
                    style={{ background: "var(--base, #000)", willChange: "transform" }}
                    aria-hidden="true"
                    ref={(el) => (circleRefs.current[i] = el)}
                  />
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer"
          style={{
            width: "var(--nav-h)",
            height: "var(--nav-h)",
            background: "var(--base, #000)",
          }}
        >
          <span className="hamburger-line w-4 h-0.5 rounded" style={{ background: "var(--pill-bg, #fff)" }} />
          <span className="hamburger-line w-4 h-0.5 rounded" style={{ background: "var(--pill-bg, #fff)" }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[3em] left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] origin-top z-998"
        style={{
          ...cssVars,
          background: "var(--base, #f0f0f0)",
        }}
      >
        <ul className="list-none m-0 p-[3px] flex flex-col gap-[3px]">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target={item.target || "_self"}
                rel="noopener noreferrer"
                className="py-3 px-4 text-[18px] font-medium rounded-[50px] flex items-center justify-start gap-3 transition-all duration-200 hover:bg-white/20"
                style={{
                  background: "var(--pill-bg, #fff)",
                  color: "var(--pill-text, #fff)",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span className="text-white">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
        
        .font-creepy {
          font-family: 'Creepster', cursive;
          letter-spacing: 1px;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .font-creepy {
            letter-spacing: 0.5px;
          }
        }
      `}</style>
    </div>
  );
};

export default PillNav;
