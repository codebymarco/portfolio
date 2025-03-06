import { useState, useEffect } from 'react';

const ScrollToTop = ({ 
  threshold = 50,  // Percentage of page height to show button (default: 50%)
  bottom = 20,     // Distance from bottom in pixels (default: 20)
  right = 20       // Distance from right in pixels (default: 20)
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and update visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate how far down the page the user has scrolled
      const scrolled = window.scrollY;
      // Calculate the halfway point of the page
      const halfwayPoint = document.documentElement.scrollHeight * (threshold / 100);
      
      // Update state based on scroll position
      setIsVisible(scrolled > halfwayPoint);
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check
    toggleVisibility();
    
    // Clean up event listener on unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: `${bottom}px`,
            right: `${right}px`,
            zIndex: 999,
            fontSize: '16px',
            padding: '10px 15px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTop;