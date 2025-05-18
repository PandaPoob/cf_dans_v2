import { useState } from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex justify-center items-center font-alt">
      {isOpen ? (
        <button onClick={() => setIsOpen(!isOpen)} className="">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 17L17 1M1 1L17 17"
              stroke="#1B0000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center"
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H19M1 7H19M1 13H19"
              stroke="#1B0000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      <div
        className={`overflow-hidden absolute left-0 top-full w-screen z-10 -mt-1 bg-primary transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="grid justify-center text-center gap-5 py-5">
          <li>
            <a href="/tilmelding">Tilmelding</a>
          </li>
          <li>
            <a href="/dansehold">Dansehold</a>
          </li>
          <li>
            <a href="/eventbooking">Event booking</a>
          </li>
          <li>
            <a href="/omcfdans">Om CF Dans</a>
          </li>
          <li>
            <a href="/kontakt">Kontakt mig</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
