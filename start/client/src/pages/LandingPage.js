import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, gql } from "@apollo/client";

function LandingPage() {
  const { loading, error, data } = useQuery(gql`
    {
      animals {
        image
        id
        price
        slug
        title
      }
    }
  `);
  if (loading) return <div>loading...</div>;

  if (error) return <div>Some error happen</div>;
  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
    </div>
  );
}

export default LandingPage;
