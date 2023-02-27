import { NextPage } from "next";
import styles from "../styles/downtown-walk.module.css";
import Image from "next/image";
import SegmentDetail from "../components/SegmentDetails/SegmentDetail";
import Link from "next/link";

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
      <section id="segment-statistics">
        <div className={styles.segment_details}>
          <div className="flex gap-4 rounded-lg p-10 shadow-md">
            <p>3h</p>
            <p>3.2km/1.8mi</p>
          </div>
        </div>
      </section>
      <section id="route-preview-map">
        <div className="relative">
          <Link
            href="/"
            className="absolute bottom-4
            left-1/2 -translate-x-1/2 rounded-md bg-white py-4 px-8"
          >
            <h4>View Full Map</h4>
          </Link>
          <Image
            className={styles.map_preview}
            alt="downtown walk map preview"
            src="/previews/0_downtown_walk.png"
            width={1280}
            height={720}
          />
        </div>
      </section>
      <section
        id="segment-details"
        className="mt-10 flex flex-col items-center gap-20"
      >
        <SegmentDetail />
        <SegmentDetail />
        <SegmentDetail />
      </section>
    </main>
  );
};

export default DowntownWalk;
