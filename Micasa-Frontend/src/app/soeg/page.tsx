import Navbar from "@/components/navbar/navbar"
import "../../layout/index.scss";

export default function SoegPage() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Søg</h1>
        <p>Her kan brugeren søge efter boliger.</p>
      </main>
    </div>
  );
}