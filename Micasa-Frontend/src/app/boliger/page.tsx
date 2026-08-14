"use client";
import Navbar from "@/components/navbar/navbar"
import "../../layout/index.scss";
import { useEstates } from "@/Hooks/useEstatesApi";
import Cards from "@/components/cards/cards";




export default function BoligerPage() {

const { data, isLoading, error } = useEstates();

  return (
    <>
    <div>
      <Navbar />
      <div className={styles.boligerContainer}>
      {isLoading ? <p>Henter boliger...</p> : null}
              {error ? <p>{error}</p> : null}
              {data?.map((estate) => (
                <Cards key={estate.id} estate={estate} />
              ))}
      </div>
    </div>
    </>
  );
}