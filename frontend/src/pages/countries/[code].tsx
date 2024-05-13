import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import CountryDetail from "@/components/CountryDetail";

const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;

const CountryDetailsPage = () => {
  const router = useRouter();
  const { code } = router.query;

  const { data, loading, error } = useQuery(GET_COUNTRY_DETAILS, {
    skip: !code,
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data?.country ? (
    <CountryDetail country={data.country} />
  ) : (
    <p>No country found.</p>
  );
};

export default CountryDetailsPage;
