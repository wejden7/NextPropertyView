
import { useEffect, useState } from 'react';
import {  AiFillCaretUp } from "react-icons/ai";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to determine when to show/hide the button
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <button
      className={`fixed bg-primary-500 w-12 h-12 bottom-4 right-4 grid place-content-center ${isVisible ? "flex" : 'hidden'}`}
      onClick={scrollToTop}
    >
     <AiFillCaretUp className="text-2xl text-white"/>
    </button>
  );
}
