import { useState, useEffect } from "react";
import Logo from "../../public/favicon.svg";
import MobileMenu from "./MobileMenu";

function Navigation({ location }: { location: string }) {
  const [oldScrollPosition, setOldScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState("default");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setOldScrollPosition(position);
      if (oldScrollPosition > window.scrollY) {
        setIsScrolling("true");
      } else {
        setIsScrolling("false");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [oldScrollPosition]);

  function getTopValue() {
    if (isScrolling === "true" || isScrolling === "default") {
      return "0";
    } else if (oldScrollPosition <= 0) {
      return "0";
    } else {
      return "-5.1rem";
    }
  }
  return (
    <nav
      className="fixed left-0 right-0 w-full transition-transform duration-300 transform z-40 bg-primary shadow p-3"
      style={{
        transform: `translateY(${getTopValue()})`,
      }}
    >
      <div className="flex justify-between items-center">
        <a href="/" className="w-8">
          <img src={Logo.src} alt="logo" />
        </a>
        <ul className="gap-12 py-2 items-center hidden md:flex font-alt">
          <li>
            <a
              href="/dans-og-tilmelding"
              className={`${location === "/dans-og-tilmelding" && "underline underline-offset-2"} `}
            >
              Dans & Tilmelding
            </a>
          </li>
          <li>
            <a
              href="/eventbooking"
              className={`${location === "/eventbooking" && "underline underline-offset-2"} `}
            >
              Event booking
            </a>
          </li>
          <li>
            <a
              href="/omcfdans"
              className={`${location === "/omcfdans" && "underline underline-offset-2"} `}
            >
              Om CF Dans
            </a>
          </li>
          <li>
            <a
              href="/kontakt"
              className={`${location === "/kontakt" && "underline underline-offset-2"} `}
            >
              Kontakt mig
            </a>
          </li>
        </ul>
        <MobileMenu />
      </div>
    </nav>
  );
}

export default Navigation;
