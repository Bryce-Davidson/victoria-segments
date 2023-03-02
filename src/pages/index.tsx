import { NextPage } from "next";
import styles from "../styles/downtown-walk.module.css";
import Image from "next/image";
import SegmentDetail from "../components/SegmentDetails/SegmentDetail";
import AlarmAddRoundedIcon from "@mui/icons-material/AlarmAddRounded";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import InteractiveMapButton from "../components/Buttons/InteractiveMapButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IosShareIcon from "@mui/icons-material/IosShare";
import linkDirectoryMap from "../utils/linkDirectoryMap";

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
          <h2>A Walk To Remember</h2>
          <p>
            This path takes walkers along the David Foster Path towards
            Fisherman's Wharf, offering breathtaking views of the Inner Harbour,
            the Victoria Legislature Building, and the iconic Empress Hotel.
            Visitors can spot various marine life such as seals, otters, and
            birds on the way to the vibrant Fisherman's Wharf, where they can
            indulge in fresh seafood, explore local shops and enjoy the lively
            atmosphere. This walk is perfect for those seeking a peaceful escape
            while soaking in the beauty of Victoria's waterfront and
            experiencing the city's culture and history.
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
        <SegmentDetail
          mainSrc="/photos/1_harbour.JPG"
          mainAlt="downtown victoria harbour"
          mapSrc="/previews/0_harbour_segment.png"
          mapAlt="preview map"
          title="Victoria Harbour"
          description="Victoria's Inner Harbour is a popular tourist destination located on Vancouver Island in British Columbia, Canada. The harbour, originally a trading post established by the Hudson's Bay Company in the 1800s, is now home to a variety of attractions. One of the most popular is the stunning Fairmont Empress Hotel, which has been a landmark of Victoria's Inner Harbour for over a century. Visitors can also enjoy a variety of restaurants, shops, and museums, including the Royal BC Museum and the Maritime Museum of British Columbia. The harbour is also a hub for boat tours, including whale watching tours and seaplane adventures."
        />
        <hr className="mx-auto w-1/2 border border-gray-500" />
        <SegmentDetail
          mainSrc="/photos/11_david_foster.JPG"
          mainAlt="david foster path"
          mapSrc="/previews/0_david_foster_segment.png"
          mapAlt="david foster path preview"
          objectFit="object-[50%,60%]"
          title="David Foster Path"
          description="The David Foster Walking Path is a popular attraction in Victoria, British Columbia, Canada. Named after the famous Canadian musician, the path spans the length of the city's scenic waterfront, offering stunning views of the ocean and the Victoria's inner harbour. The path also features several public art installations and historical landmarks, such as views of Empress Hotel. Whether you're a music lover or simply looking for a picturesque stroll, the David Foster Walking Path offers a unique way to experience Victoria's rich culture and natural beauty."
        />
        <hr className="mx-auto w-1/2 border border-gray-500" />
        <SegmentDetail
          mainSrc="/photos/22_fishermans_wharf.JPG"
          mainAlt="fishermans wharf"
          mapSrc="/previews/0_fishermans_wharf_segment.png"
          mapAlt="fishermans wharf map preview"
          objectFit="object-[50%,70%]"
          title="Fishermans Wharf"
          description="Originally a working fishing community, the wharf is now home to a variety of shops, restaurants, and activities. Visitors can sample fresh seafood, take a whale watching tour, rent kayaks or paddleboards, or simply stroll along the docks and watch the boats come and go. The wharf also features colorful floating homes, which have become a popular attraction in their own right. Whether you're looking for a bite to eat, a unique shopping experience, or a chance to get out on the water, Fisherman's Wharf offers something for everyone."
        />
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
