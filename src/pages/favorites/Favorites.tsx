import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/recipe-item/RecipeItem";

const Favorites = () => {
  const { favoriteslist } = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteslist && favoriteslist.length > 0 ? (
        favoriteslist.map((item: any) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
