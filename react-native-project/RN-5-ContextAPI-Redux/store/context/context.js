import { createContext, useState } from "react";

export const context = createContext({
  ids : [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function ContextProvider({ children }) {

  const [mealID, setMealID] =useState([]);

  function addFavorite(id){
    setMealID(prevState => {
      return [...prevState, id]
    })
  }

  function removeFavorite(id){
    setMealID(prevState => {
      return prevState.filter((ele)=>{
        return ele !== id;
      })
    })
  }

  let ctx = {
    ids : mealID,
    addFavorite,
    removeFavorite
  };

  return (
    <>
      <context.Provider value={ctx}>{children}</context.Provider>
    </>
  );
}
