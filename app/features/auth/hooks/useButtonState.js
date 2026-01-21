import { useState } from 'react';

export const useButtonState = () => {
  const [isHovered, setIsHovered] = useState(false);

  const onHoverIn = () => setIsHovered(true);
  const onHoverOut = () => setIsHovered(false);

  return { isHovered, onHoverIn, onHoverOut };
};
