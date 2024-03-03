import AppButton from "./AppButton";
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
