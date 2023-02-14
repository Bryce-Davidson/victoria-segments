import mbxStaticClient from "../src/utils/mapbox/staticClient";
import downtown_walk_path from "../src/data/downtown_walk";
import photo_map from "../src/data/photo_map";
import fs from "fs";

describe("Static Map API", () => {
  it.skip("gets a static map", async () => {
    const request = mbxStaticClient.getStaticImage({
      ownerId: "mapbox",
      styleId: "streets-v11",
      width: 1280,
      height: 720,
      position: "auto",
      padding: "75",
      overlays: [downtown_walk_path],
    });
    const staticImageUrl = request.url();
    console.log(staticImageUrl);
    expect(staticImageUrl);
  });

  it.skip("gets a static map for a point with a marker", async () => {
    for (let i = 0; i < photo_map.features.length; i++) {
      const point_1: any = {
        geoJson: photo_map.features[i],
      };
      const request = mbxStaticClient.getStaticImage({
        ownerId: "mapbox",
        styleId: "streets-v11",
        width: 1280,
        height: 720,
        position: "auto",
        padding: "75",
        overlays: [point_1],
      });
      const staticImageUrl = request.url();
      const file_name = point_1.geoJson.properties.photo_name.split(".")[0];
      //   console.log(file_name);
      // console.log(staticImageUrl);
      await request.send().then((res) => {
        fs.writeFileSync(
          `./public/previews/${file_name}.png`,
          res.body,
          "binary"
        );
      });
    }
  });
});
