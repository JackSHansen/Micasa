import Navbar from "@/components/navbar/navbar"
import "../../layout/index.scss";


export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Login</h1>
        <p>Her kan brugeren logge ind.</p>
      </main>
    </div>
  );
}