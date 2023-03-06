import type { GeoPhotos } from "./content_types";
import type { MultiLineString, Feature } from "geojson";

export const downtown_walk_feature: Feature<MultiLineString, {}> = {
  type: "Feature",
  properties: {},
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
        [-123.37143, 48.42127],
        [-123.37166, 48.42127],
        [-123.37181, 48.421],
        [-123.372859994628897, 48.421260004776194],
        [-123.37391, 48.42152],
        [-123.37417, 48.42161],
        [-123.37486, 48.42197],
        [-123.37521, 48.42213],
        [-123.37525, 48.42213],
        [-123.37528, 48.42221],
        [-123.37519, 48.42229],
        [-123.37522, 48.42254],
        [-123.37511, 48.42259],
        [-123.37513, 48.42266],
        [-123.37519, 48.42277],
        [-123.37524, 48.42283],
        [-123.37524, 48.42289],
        [-123.37546, 48.423],
        [-123.37578, 48.42305],
        [-123.37604, 48.42323],
        [-123.37608, 48.42328],
        [-123.3761, 48.42343],
        [-123.37604, 48.42361],
        [-123.37583, 48.42366],
        [-123.37579, 48.42369],
        [-123.37582, 48.4238],
        [-123.37582, 48.42395],
        [-123.37592, 48.42409],
        [-123.37613, 48.42427],
        [-123.37626, 48.42432],
        [-123.37627, 48.42433],
        [-123.3769, 48.4244],
        [-123.37714, 48.42434],
        [-123.37739, 48.42422],
        [-123.37801, 48.42369],
        [-123.37806, 48.42364],
        [-123.37803, 48.42353],
        [-123.37806, 48.42342],
        [-123.37815, 48.42329],
        [-123.37819, 48.42328],
        [-123.37843, 48.42301],
        [-123.37864, 48.42282],
        [-123.37869, 48.4228],
        [-123.37904, 48.42246],
        [-123.37919, 48.42241],
        [-123.37918, 48.42241],
        [-123.37926, 48.42242],
        [-123.37962, 48.42259],
        [-123.37998, 48.42263],
        [-123.38011, 48.42222],
        [-123.38031, 48.42234],
        [-123.38039, 48.42241],
        [-123.38063, 48.42285],
        [-123.38062, 48.42286],
        [-123.38076, 48.42281],
        [-123.38071, 48.42269],
        [-123.38075, 48.42266],
        [-123.38097, 48.42262],
        [-123.38106, 48.42263],
        [-123.3812, 48.42258],
        [-123.38119, 48.42259],
        [-123.38129, 48.42241],
        [-123.38128, 48.42231],
        [-123.38128, 48.42226],
        [-123.38137, 48.42218],
        [-123.38128, 48.4221],
        [-123.38104, 48.422],
        [-123.38137, 48.4217],
        [-123.38204, 48.42201],
        [-123.38218, 48.4222],
        [-123.38219, 48.42227],
        [-123.38215, 48.42237],
        [-123.38201, 48.42242],
        [-123.38195, 48.42246],
        [-123.38215, 48.42237],
        [-123.38275, 48.42245],
        [-123.3827, 48.4226],
        [-123.38269, 48.42269],
        [-123.3828, 48.42276],
        [-123.38279, 48.42285],
        [-123.38252, 48.4231],
        [-123.38228, 48.42336],
      ],
    ],
  },
};

export const downtown_scenic_walk_geo_photos: GeoPhotos = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        img_src: "1_harbour.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Inner Harbour",
        description:
          "The Inner Harbour in Victoria, BC is a lively and picturesque waterfront area that serves as a popular destination for visitors. With the iconic Empress Hotel, and numerous shops, nearby restaurants, and attractions, there's always something to see and do. Visitors can watch seaplanes take off and land, enjoy street performers, and explore nearby attractions such as the Royal BC Museum.",
      },
      geometry: {
        coordinates: [-123.36861427024508, 48.42268037775693],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "2_harbour.JPG",
        img_alt: "1_harbour.JPG",
        title: "Boats in the Inner Harbour",
        description:
          "The boats in the harbour of Victoria, BC offer a diverse range of vessels to admire, from working fishing boats to luxury yachts. Visitors can also see tall ships and tour boats, and the types and numbers of boats vary throughout the year depending on the season and economic climate of the area.",
      },
      geometry: {
        coordinates: [-123.36854366719676, 48.42210538061829],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "3_harbour.JPG",
        img_alt: "1_harbour.JPG",
        title: "Parliment Buildings",
        description:
          "The Parliment Buildings in Victoria, BC is a stunning example of neoclassical architecture that houses the Legislative Assembly of British Columbia. Visitors can admire its beautiful grounds and prominent dome, and depending on the season, witness a range of decor, from festive lights during the holiday season to beautiful gardens in the spring and summer.",
      },
      geometry: {
        coordinates: [-123.36858633435301, 48.42264920972917],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "4_harbour.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.36931944381689, 48.42094224454095],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "5_harbour.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.36967020472727, 48.42089524448747],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "6_harbour.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.37046845667922, 48.42095476363559],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "7_harbour.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.37054092193111, 48.4209804039227],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "8_harbour.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.37071345427293, 48.42116283806183],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "9_manor.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.37483094673297, 48.42198487255217],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "10_david_foster.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.37515462637131, 48.42271733614703],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "11_david_foster.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.37522986934854, 48.422873278983246],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "12_david_foster.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.37561032338513, 48.423032874867914],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "13_david_foster.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.37580818083588, 48.42381558880467],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "14_david_foster.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.37578832977081, 48.42389534720641],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "15_david_foster.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.3773858158236, 48.42422836408136],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "16_david_foster.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.3791967620214, 48.42242536857549],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "18_fishermans_wharf.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.38075184627816, 48.42281381103322],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "19_fishermans_wharf.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.38087780117186, 48.42262757205066],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "20_fishermans_wharf.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.38109214615795, 48.422623172691374],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "22_fishermans_wharf.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.3818783896226, 48.422520817017784],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "23_fishermans_wharf.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.38187508146078, 48.4225071360018],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "24_fishermans_wharf.JPG",
        img_alt: "1_harbour.JPG",
        title: "Victoria Harbour Parliment Building",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, qui sequi eos corrupti asperiores iusto eveniet, vel saepe fuga odit minima, ipsum consectetur laboriosam? Suscipit aliquam numquam tempore labore modi.",
      },
      geometry: {
        coordinates: [-123.38281438825483, 48.42275058785444],
        type: "Point",
      },
    },
  ],
};
