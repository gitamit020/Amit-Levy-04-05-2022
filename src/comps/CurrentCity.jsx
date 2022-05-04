import React from "react";

export default function CurrentCity({ cityShown: { Key, Type, Rank, LocalizedName } }) {
    return (
        <div className="currentCityDiv">
            <p>{Key}</p>
            <p>{Type}</p>
            <p>{Rank}</p>
            <p>{LocalizedName}</p>
        </div>
    );
}
