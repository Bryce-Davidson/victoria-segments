import { NextPage } from "next";
import styles from "../styles/downtown-walk.module.css";
import Image from "next/image";
import SegmentDetail from "../components/SegmentDetails/BasicSegmentDetail";
import AlarmAddRoundedIcon from "@mui/icons-material/AlarmAddRounded";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import InteractiveMapButton from "../components/Buttons/InteractiveMapButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IosShareIcon from "@mui/icons-material/IosShare";
import linkDirectoryMap from "../utils/link_directory_map";
import {
  downtown_scenic_walk_route,
  downtown_scenic_walk_basic_segment_details,
} from "../data/downtown_scenic_walk";
import { BasicSegmentDetailProps } from "../data/content";

const Home: NextPage = () => {
  return (
    <main>
      <section id="hero-image">
        <div className={styles.hero_container}>
          <h1 className={styles.hero_image_title}>Downtown Victoria Scenic</h1>
          <Image
            alt="victoria downtown walk hero image"
            src={"/photos/1_harbour.JPG"}
            width={1280}
            height={720}
          ></Image>
        </div>
      </section>
      <section id="route-description">
        <div className={styles.description}>
          <h2>{downtown_scenic_walk_route.properties.title}</h2>
          <p>{downtown_scenic_walk_route.properties.description}</p>
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
        <div className="contain mx-auto my-10 flex w-full justify-center  gap-4 bg-cyan-100 bg-opacity-80 p-5 text-lg font-medium mix-blend-screen shadow-xl sm:p-10">
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
          <InteractiveMapButton
            href={linkDirectoryMap.victoriaDowntownScenicWalkMap}
          />
          <Image
            className={styles.map_preview}
            alt="downtown walk map preview"
            src="/previews/0_downtown_walk.png"
            width={1280}
            height={720}
          />
        </div>
      </section>
      <section id="segment-details" className="my-16">
        <h2 className="text-center text-2xl">Segment Details</h2>
        {downtown_scenic_walk_basic_segment_details.map(
          (detail: BasicSegmentDetailProps, index: number) => {
            return (
              <SegmentDetail
                key={index}
                main_src={detail.main_src}
                main_alt={detail.main_alt}
                map_preview_src={detail.map_preview_src}
                map_preview_alt={detail.map_preview_alt}
                title={detail.title}
                description={detail.description}
                object_fit={detail.object_fit}
              />
            );
          }
        )}
      </section>
      <section id="route-buttons">
        <div className="mb-20 flex w-full flex-row-reverse justify-center gap-4 bg-slate-100 py-10 shadow-inner">
          <div className="flex items-center justify-center gap-4 rounded-lg bg-cyan-400 p-4 shadow-lg">
            <h2 className="text-2xl">Begin Route</h2>
            <PlayArrowIcon />
          </div>
          <div className="flex items-center justify-center gap-4 rounded-lg bg-purple-400 p-4  shadow-lg">
            <h2 className="text-2xl">Share</h2>
            <IosShareIcon />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
