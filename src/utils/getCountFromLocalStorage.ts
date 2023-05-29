export const getCountFromLocalStorage = () => {
  const data = localStorage.getItem("count");
  return data ? JSON.parse(data) : 0;
};
