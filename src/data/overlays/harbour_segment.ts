import { GeoJsonOverlay } from "@mapbox/mapbox-sdk/services/static";

const harbour_segment: GeoJsonOverlay = {
  geoJson: {
    type: "Feature",
    properties: {
      name: "Harbour Path Segment",
      color: "#FFA500",
      stroke: "#FFA500",
      "stroke-width": 4,
    },
    geometry: {
      type: "MultiLineString",
      coordinates: [
        [
          [-123.36877, 48.42255],
          [-123.36875, 48.42246],
          [-123.36884, 48.42194],
          [-123.36906, 48.42106],
          [-123.36914, 48.42096],
          [-123.36915, 48.42096],
          [-123.3692, 48.42094],
          [-123.36942, 48.42094],
          [-123.36943, 48.42087],
          [-123.37053, 48.42095],
          [-123.37068, 48.42114],
          [-123.37077, 48.42117],
          [-123.3714, 48.42132],
        ],
      ],
    },
  },
};

export default harbour_segment;
