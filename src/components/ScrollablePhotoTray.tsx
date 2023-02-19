import Image from "next/image";
import photo_map from "../data/photo_map";

function ScrollblePhotoTray() {
  return (
    <div
      className="fixed bottom-0 w-screen bg-slate-500 bg-opacity-25 align-middle"
      style={{
        height: "30vh",
        overflow: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {photo_map.features.map((photo, index) => {
        return (
          <div
            key={index}
            style={{
              height: "70%",
              width: "300px",
              overflow: "hidden",
            }}
            className="m-5 inline-block bg-black"
          >
            <Image
              style={{
                width: "100%",
              }}
              width={500}
              height={500}
              alt="oops"
              src={"/photos/" + photo?.properties?.photo_name}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ScrollblePhotoTray;
