import React, { useRef, useState, useEffect } from 'react';
import './Category-list.css';
import { FaApple, FaAndroid, FaWindows, FaLinux, FaGithub, FaReact, FaNodeJs } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons for buttons

const ScrollableIcons = () => {
  const scrollRef = useRef(null); // Reference to the scrollable container
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Increased the number of icons for better scrolling
  const categories = [
    { name: 'Apple', icon: <FaApple /> },
    { name: 'Android', icon: <FaAndroid /> },
    { name: 'Windows', icon: <FaWindows /> },
    { name: 'Linux', icon: <FaLinux /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Apple', icon: <FaApple /> },
    { name: 'Android', icon: <FaAndroid /> },
    { name: 'Windows', icon: <FaWindows /> },
    { name: 'Linux', icon: <FaLinux /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Apple', icon: <FaApple /> },
    { name: 'Android', icon: <FaAndroid /> },
    { name: 'Windows', icon: <FaWindows /> },
    { name: 'Linux', icon: <FaLinux /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Apple', icon: <FaApple /> },
    { name: 'Android', icon: <FaAndroid /> },
    { name: 'Windows', icon: <FaWindows /> },
    { name: 'Linux', icon: <FaLinux /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> }
  ];

  // Function to handle scrolling left and right
  const handleScroll = (direction) => {
    const scrollAmount = 150; // Adjust the scroll distance
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Check scroll position to disable buttons at ends
  const checkScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0); // Enable left button if not at the start
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth); // Enable right button if not at the end
  };

  // Attach scroll event listener
  useEffect(() => {
    if (scrollRef.current) {
      const currentRef = scrollRef.current;
      currentRef.addEventListener('scroll', checkScrollPosition);
  
      // Run the checkScrollPosition on mount to check if buttons should be enabled or disabled
      checkScrollPosition();
  
      return () => {
        currentRef.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <div className="scrollable-icons-container">
      <button className="scroll-btn left" onClick={() => handleScroll('left')} disabled={!canScrollLeft}>
        <FaChevronLeft /> {/* Using an icon for left button */}
      </button>
      
      <div className="scrollable-container" ref={scrollRef}>
        <div className="icon-wrapper">
          {categories.map((category, index) => (
            <a href="" className="icon-item" key={index}>{category.icon}
              <div className="icon-name">{category.name}</div> {/* Display name below icon */}
            </a>
          ))}
        </div>
      </div>
      
      <button className="scroll-btn right" onClick={() => handleScroll('right')} disabled={!canScrollRight}>
        <FaChevronRight /> {/* Using an icon for right button */}
      </button>
    </div>
  );
};

export default ScrollableIcons;
