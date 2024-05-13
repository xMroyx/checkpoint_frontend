import Head from "next/head";
import CountryList from "@/components/CountryList";
import AddCountryForm from "@/components/AddCountryForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Country List</title>
        <meta name="description" content="View a list of countries" />
      </Head>
      <main>
        <h1 className="text-center text-xl font-bold my-4">Countries</h1>
        <AddCountryForm />
        <CountryList />
      </main>
    </div>
  );
}
