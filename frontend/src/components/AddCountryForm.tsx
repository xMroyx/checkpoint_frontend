import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CONTINENTS } from "../graphql/queries";
import { ADD_COUNTRY } from "@/hooks/useAddCountry";

const AddCountryForm = () => {
  const { loading, data, error } = useQuery(GET_CONTINENTS);
  const [
    addCountry,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(ADD_COUNTRY);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [emoji, setEmoji] = useState("");
  const [continentId, setContinentId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addCountry({
      variables: {
        data: {
          name,
          code,
          emoji,
          continent: continentId,
        },
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading continents: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Code"
        required
      />
      <input
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        placeholder="Emoji"
        required
      />
      <select
        value={continentId}
        onChange={(e) => setContinentId(e.target.value)}
        required
      >
        <option value="">Select a Continent</option>
        {data.continents.map((continent) => (
          <option key={continent.id} value={continent.id}>
            {continent.name}
          </option>
        ))}
      </select>
      <button type="submit" disabled={mutationLoading}>
        Add Country
      </button>
      {mutationError && <p>Error adding country: {mutationError.message}</p>}
    </form>
  );
};

export default AddCountryForm;
