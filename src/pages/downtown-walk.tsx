import { NextPage } from "next";
import styles from "../styles/downtown-walk.module.css";
import Image from "next/image";

const DowntownWalk: NextPage = () => {
  return (
    <main>
      <section id="hero-image" className={styles.hero}>
        <Image
          src={"/photos/3_harbour.JPG"}
          alt="hero image of downtown victoria"
          width={1280}
          height={720}
        ></Image>
      </section>
    </main>
  );
};

export default DowntownWalk;
