import React, { createContext, FC, useState } from "react";

interface GlobalStateProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext<any>(null);

const GlobalState: FC<GlobalStateProps> = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteslist, setFavoriteslist] = useState([]);

  async function handleSubmit(event: Event) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorites(getCurrentItem: any) {
    console.log(getCurrentItem);
    let cpyFavoritesList: any = [...favoriteslist];
    const index = cpyFavoritesList.findIndex(
      (item: any) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }
    setFavoriteslist(cpyFavoritesList);
  }

  console.log(loading, recipeList);
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorites,
        favoriteslist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
