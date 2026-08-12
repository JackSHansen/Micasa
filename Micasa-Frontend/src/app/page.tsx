"use client";
import { useMemo } from "react";
import { Slider } from "@/components/slider/slider";
import Navbar from "../components/navbar/navbar";
import "../layout/index.scss";
import { useEstates } from "@/Hooks/useEstatesApi";
import Cards from "@/components/cards/cards";

export default function Home() {
  const { data, isLoading, error } = useEstates();
  const randomEstates = useMemo(() => {
    if (!data || data.length <= 3) {
      return data ?? [];
    }

    const shuffled = [...data].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, 3);
  }, [data]);

  return (
    <>
      <Navbar />
      <Slider />
      {isLoading ? <p>Henter boliger...</p> : null}
      {error ? <p>{error}</p> : null}
      {randomEstates.map((estate) => (
        <Cards key={estate.id} estate={estate} />
      ))}
    </>
  );
}
