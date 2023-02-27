import { NextPage } from "next";
import styles from "../styles/downtown-walk.module.css";
import Image from "next/image";
import SegmentDetail from "../components/SegmentDetails/SegmentDetail";

const DowntownWalk: NextPage = () => {
  return (
    <main>
      <section id="hero-image">
        <div className={styles.hero_container}>
          <h1 className={styles.hero_image_title}>Downtown Victoria Scenic</h1>
          <Image
            alt="downtown walk hero image"
            src={"/photos/1_harbour.JPG"}
            width={1280}
            height={720}
          ></Image>
        </div>
      </section>
      <section id="route-description">
        <div className={styles.description}>
          <h2>A Walk To Remember</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            culpa error voluptas voluptates rem asperiores nisi harum autem odit
            dignissimos alias veritatis reprehenderit quos quam dolorum quas
            modi doloribus nulla ea iusto, debitis laboriosam optio. Nesciunt
            cumque, autem dignissimos odio ad illo vel sint enim voluptates.
            Rerum velit atque debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non, ut?
          </p>
        </div>
      </section>
      <section id="featured-photos" className={styles.featured_photos_tray}>
        <Image
          alt="downtown walk featured image 1"
          src="/photos/3_harbour.JPG"
          width={500}
          height={250}
        ></Image>
        <Image
          alt="downtown walk featured image 1"
          src="/photos/4_harbour.JPG"
          width={500}
          height={250}
        ></Image>
        <Image
          alt="downtown walk featured image 1"
          src="/photos/18_fishermans_wharf.JPG"
          width={500}
          height={250}
        ></Image>
        <Image
          alt="downtown walk featured image 1"
          src="/photos/22_fishermans_wharf.JPG"
          width={500}
          height={250}
        ></Image>
      </section>
      <section id="route-preview-map">
        <Image
          className={styles.map_preview}
          alt="downtown walk map preview"
          src="/previews/0_downtown_walk.png"
          width={1280}
          height={720}
        />
      </section>
      <section id="segment-details"></section>
    </main>
  );
};

export default DowntownWalk;
