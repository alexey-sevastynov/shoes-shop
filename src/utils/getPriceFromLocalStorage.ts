export const getPriceFromLocalStorage = () => {
  const data = localStorage.getItem("price");
  return data ? JSON.parse(data) : 0;
};
