import React from "react";
import { useSelector } from "react-redux";

export default function Favorites() {
  const { favorites } = useSelector((state) => state.favoritesReducer);

  console.log(favorites);

  return (
    <div className="favorites">
      <p>{favorites.length}</p>
      {favorites.map((fav, i) => (
        <div key={i}>
          <p>{fav.cityName}</p>
          <p></p>
        </div>
      ))}
    </div>
  );
}
