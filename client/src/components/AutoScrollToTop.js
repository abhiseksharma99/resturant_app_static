import { useEffect } from 'react';

 const AutoScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []); 

      return null ;
}

export default AutoScrollToTop;