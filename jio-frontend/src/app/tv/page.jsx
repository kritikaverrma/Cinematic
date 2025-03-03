import ListingSection from "../../components/sections/ListingSection";
import { api, ENDPOINT } from "../../lib/api";
import React from "react";

const SportsPage = (props) => {
  const list = [
    {
      label: "Comedy",
      href: "comedy",
      fetcher: async () => {
        const res = await api.get(ENDPOINT.fetchComedyTvShows);
        const data = res.data.results;
        return data;
      },
    },
    {
      label: "Crime",
      href: "crime",
      fetcher: async () => {
        return (await api.get(ENDPOINT.fetchCrimeTvShows)).data.data?.results;
      },
    },
    {
      label: "Drama",
      href: "drama",
      fetcher: async () => {
        return (await api.get(ENDPOINT.fetchDramaTvShows)).data.data?.results;
      },
    },
    {
      label: "Action",
      href: "action",
      fetcher: async () => {
        return (await api.get(ENDPOINT.fetchActionTvShows)).data.data?.results;
      },
    },
  ];
  const getBannerData = async () => {
    return (await api.get(ENDPOINT.fetchMysteryTvShows)).data?.data?.results;
  };

  return (
    <main>
      <ListingSection bannerFetcher={getBannerData} list={list} />
    </main>
  );
};

export default SportsPage;
