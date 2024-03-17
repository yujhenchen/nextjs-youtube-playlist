import Nav from "@/components/Nav";
import AppButton from "../components/AppButton";
import Footer from "@/components/Footer";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <AppButton color="primary" colorToken="main">
        Click Me (primary main)
      </AppButton>

      <AppButton color="secondary" colorToken="main">
        Click Me (secondary main)
      </AppButton>
    </main>
  );
}
