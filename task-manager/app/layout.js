import { Inter } from "next/font/google";
import styles from "./page.module.css"
import Page from "./page";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Manager App",
  description: "Demonstration of what i learned in the past 2 weeks",
};

export default function Layout() {

  return (
    <html lang="en">
      
      <body className={inter.className}>
        <h1 className={styles.center}>Next-gen Task Manager</h1>
        <Page/>
      </body>
    </html>
  );
}
