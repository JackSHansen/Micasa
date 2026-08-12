import Navbar from "@/components/navbar/navbar"
import "../../layout/index.scss";


export default function BoligdetaljerPage() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Boligdetaljer</h1>
        <p>Her vises detaljer for en valgt bolig.</p>
      </main>
    </div>
  );
}