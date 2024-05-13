import { useMutation, gql } from "@apollo/client";
import { GET_COUNTRIES } from "@/graphql/queries";
import { GetCountriesResponse, Country } from "@/types";

export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      name
      emoji
      code
      continent {
        id
        name
      }
    }
  }
`;

export const useAddCountry = () => {
  const [addCountryMutation, { data, loading, error }] = useMutation(
    ADD_COUNTRY,
    {
      update: (cache, { data: { addCountry } }) => {
        const existingCountries = cache.readQuery<GetCountriesResponse>({
          query: GET_COUNTRIES,
        });
        if (existingCountries && addCountry) {
          cache.writeQuery({
            query: GET_COUNTRIES,
            data: {
              countries: [...existingCountries.countries, addCountry],
            },
          });
        }
      },
    }
  );

  return {
    addCountryMutation,
    data,
    loading,
    error,
  };
};
