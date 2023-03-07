import type { Point, Feature, FeatureCollection } from "geojson";

export interface GeoPhotoProperties {
  title: string;
  description: string;
  img_src: string;
  img_alt: string;
}
export interface GeoRouteProperties {
  title: string;
  description: string;
}

export interface BasicSegmentDetailProps {
  main_src: string;
  main_alt: string;
  map_preview_src: string;
  map_preview_alt: string;
  object_fit?: string;
  title?: string;
  description?: string;
}

export type GeoPhotos = FeatureCollection<Point, GeoPhotoProperties>;
