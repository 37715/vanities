"use client";
import React from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterOptions from "../components/FilterOptions/FilterOptions";
import PluginList from "../components/PluginList/PluginList";

const Page = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <FilterOptions />
      <PluginList />
    </div>
  );
};

export default Page;
