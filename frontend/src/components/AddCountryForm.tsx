import React, { useState } from "react";
import { useAddCountry } from "@/hooks/useAddCountry";

const AddCountryForm = () => {
  const { addCountryMutation } = useAddCountry();
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Adding country with:", { name, emoji, code });
    addCountryMutation({
      variables: {
        name,
        emoji,
        code,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        placeholder="Emoji"
        required
      />
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Code"
        required
      />
      <button type="submit">Add Country</button>
    </form>
  );
};

export default AddCountryForm;
