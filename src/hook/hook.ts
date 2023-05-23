import React from "react";

export const useComponentDidMount = () => {
  const ref = React.useRef(false);
  React.useEffect(() => {
    ref.current = true;
  }, []);
  return ref.current;
};
