import  { useState, useEffect } from 'react';
import './fadein.css'; // Import the CSS file for styling
import PropTypes from 'prop-types';
const FadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a delay of 4 seconds before showing the content
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'show' : ''}`}>
      {children}
    </div>  
  );
};

export default FadeIn;
FadeIn.propTypes = {
    children: PropTypes.node.isRequired,
  };