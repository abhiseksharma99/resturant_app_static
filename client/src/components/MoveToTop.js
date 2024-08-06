import { useEffect, useState } from 'react';

const useScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // MOVE TO TOP BUTTON LOGIC
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // MOVE TO TOP FUNCTION
  const handleMoveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { showButton, handleMoveToTop };
};


export default useScrollToTop ;
