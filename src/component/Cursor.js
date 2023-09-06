import React from 'react';
import '../component/Cursor.css'; // Create this CSS file
function CustomCursor() {
    // Track the cursor position
    const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
  
    // Update the cursor position on mousemove events
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
  
    // Attach the mousemove event listener
    React.useEffect(() => {
      document.addEventListener('mousemove', updateCursorPosition);
      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
      };
    }, []);
  
    return (
        
      <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
        <div className="inner-circle"></div>
      </div>
    );
  }
  
  export default CustomCursor;
  