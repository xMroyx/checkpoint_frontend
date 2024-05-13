import React from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_COUNTRIES } from "../graphql/queries";

const CountryList = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.countries.map((country) => (
        <Link key={country.code} href={`/countries/${country.code}`}>
          <div className="p-4 shadow rounded-lg flex items-center space-x-3">
            <span className="text-2xl">{country.emoji}</span>
            <div>
              <p className="text-lg font-semibold">{country.name}</p>
              <p className="text-sm text-gray-600">{country.code}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
