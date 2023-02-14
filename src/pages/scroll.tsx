import { NextPage } from "next";
import ScrollblePhotoTray from "../components/ScrollablePhotoTray";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <ScrollblePhotoTray />
    </div>
  );
};

export default Home;
