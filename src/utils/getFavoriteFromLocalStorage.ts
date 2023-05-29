export const getFavoriteFromLocalStorage = () => {
  const data = localStorage.getItem("favorite");
  return data ? JSON.parse(data) : [];
};
