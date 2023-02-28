import { NextPage } from "next";
import styles from "../styles/downtown-walk.module.css";
import Image from "next/image";
import SegmentDetail from "../components/SegmentDetails/SegmentDetail";
import Link from "next/link";
import AlarmAddRoundedIcon from "@mui/icons-material/AlarmAddRounded";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import InteractiveMapButton from "../components/Buttons/InteractiveMapButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

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
        <div className="mx-auto my-10 flex w-full justify-center gap-4  bg-cyan-400 bg-opacity-80 p-5 text-lg font-medium shadow-xl sm:p-10">
          <div className="gap- flex items-center justify-center">
            <AlarmAddRoundedIcon />
            <p className="ml-1">1h</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <RouteOutlinedIcon />
            <div className="flex flex-col items-center">
              <p className="font-normal">2.0km</p>
              <p className="font-mono text-xs font-thin">1.24mi</p>
            </div>
          </div>
        </div>
      </section>
      <section id="route-preview-map">
        <div className="relative">
          <InteractiveMapButton href="/" />
          <Image
            className={styles.map_preview}
            alt="downtown walk map preview"
            src="/previews/0_downtown_walk.png"
            width={1280}
            height={720}
          />
        </div>
      </section>
      <section id="segment-details" className="mt-20">
        <SegmentDetail
          mainSrc="/photos/1_harbour.JPG"
          mainAlt="downtown victoria harbour"
          mapSrc="/previews/0_harbour_segment.png"
          mapAlt="preview map"
        />
        <SegmentDetail
          mainSrc="/photos/11_david_foster.JPG"
          mainAlt="david foster path"
          mapSrc="/previews/0_david_foster_segment.png"
          mapAlt="david foster path preview"
          objectFit="object-[50%,50%]"
        />
        <SegmentDetail
          mainSrc="/photos/22_fishermans_wharf.JPG"
          mainAlt="fishermans wharf"
          mapSrc="/previews/0_fishermans_wharf_segment.png"
          mapAlt="fishermans wharf map preview"
          objectFit="object-[50%,60%]"
        />
      </section>
      <section id="route-buttons">
        <div className="mb-20 flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 rounded-lg bg-cyan-400 p-4 shadow-lg">
            <h2 className="text-2xl">Begin Route</h2>
            <PlayArrowIcon />
          </div>
        </div>
      </section>
    </main>
  );
};

export default DowntownWalk;
