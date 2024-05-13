import React from "react";

const CountryDetail = ({ country }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{country.name}</h2>
          <p>
            {country.emoji} - {country.code}
          </p>
          <div className="card-actions justify-end">
            <p>Continent: {country.continent.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
