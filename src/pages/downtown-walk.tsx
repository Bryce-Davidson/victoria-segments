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
          <div className="flex gap-4 rounded-lg p-10 text-lg font-medium shadow-md">
            <div className="flex items-center justify-center gap-1">
              <svg
                className="inline"
                width="22"
                height="22"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_51_21)">
                  <path
                    d="M47.96 8C25.88 8 8 25.92 8 48C8 70.08 25.88 88 47.96 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 47.96 8ZM48 80C30.32 80 16 65.68 16 48C16 30.32 30.32 16 48 16C65.68 16 80 30.32 80 48C80 65.68 65.68 80 48 80Z"
                    fill="black"
                  />
                  <path
                    d="M50 28H44V52L65 64.6L68 59.68L50 49V28Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_51_21">
                    <rect width="96" height="96" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>3h</p>
            </div>
            <div>
              <p>3.2km / 1.8mi</p>
            </div>
          </div>
        </div>
      </section>
      <section id="route-preview-map">
        <div className="relative">
          <Link
            href="/"
            className="absolute bottom-8
            left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-md bg-white py-4 px-8"
          >
            <h4>Interactive Map</h4>
            <svg
              width="15"
              height="15"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5V1M1 1H5M1 1L6 6M17 5V1M17 1H13M17 1L12 6M1 13V17M1 17H5M1 17L6 12M17 17L12 12M17 17V13M17 17H13"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
