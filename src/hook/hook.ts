import React from "react";

export const useComponentDidMount = () => {
  const ref = React.useRef(false);
  React.useEffect(() => {
    ref.current = true;
  }, []);
  return ref.current;
};

export function isValidEmail(username: string) {
  return /^\S+@\S+\.\S+$/.test(username);
}

export function isValidCity(cities: string[], value: string) {
  if (cities) {
    return cities.find((item) => (item = value));
  } else {
    return false;
  }
}
