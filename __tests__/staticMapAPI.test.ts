import { downtown_scenic_walk_photos } from "../src/data/downtown_scenic_walk";

function geojsonPointsToGoogleMapsUrl(geojson: any) {
  if (
    !geojson ||
    geojson.type !== "FeatureCollection" ||
    !Array.isArray(geojson.features)
  ) {
    throw new Error("Invalid GeoJSON FeatureCollection.");
  }

  const points = geojson.features.filter(
    (feature: any) => feature.geometry.type === "Point"
  );

  if (points.length < 2) {
    throw new Error("At least two points are required for a valid route.");
  }

  const origin = points[0].geometry.coordinates;
  const destination = points[points.length - 1].geometry.coordinates;
  const waypoints = points
    .slice(1, -1)
    .map((point: any) => point.geometry.coordinates);

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${
    origin[1]
  },${origin[0]}&destination=${destination[1]},${
    destination[0]
  }&waypoints=${waypoints
    .map((coord: any) => `${coord[1]},${coord[0]}`)
    .join("|")}&travelmode=walking`;

  return googleMapsUrl;
}

describe("Static Map API", () => {
  it("gets a static map of harbour", async () => {
    console.log(geojsonPointsToGoogleMapsUrl(downtown_scenic_walk_photos));
  });
});
