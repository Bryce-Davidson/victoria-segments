import type {
  GeoPhotos,
  GeoRouteProperties,
  BasicSegmentDetailProps,
} from "./content";
import type { MultiLineString, Feature } from "geojson";

export const downtown_scenic_walk_basic_segment_details: BasicSegmentDetailProps[] =
  [
    {
      main_src: "/photos/1_harbour.JPG",
      main_alt: "downtown victoria harbour",
      map_preview_src: "/previews/0_harbour_segment.png",
      map_preview_alt: "preview map",
      title: "Victoria Harbour",
      description:
        "Victoria's Inner Harbour is a popular tourist destination located on Vancouver Island in British Columbia, Canada. The harbour, originally a trading post established by the Hudson's Bay Company in the 1800s, is now home to a variety of attractions. One of the most popular is the stunning Fairmont Empress Hotel, which has been a landmark of Victoria's Inner Harbour for over a century. Visitors can also enjoy a variety of restaurants, shops, and museums, including the Royal BC Museum and the Maritime Museum of British Columbia. The harbour is also a hub for boat tours, including whale watching tours and seaplane adventures.",
    },
    {
      main_src: "/photos/11_david_foster.JPG",
      main_alt: "david foster path",
      map_preview_src: "/previews/0_david_foster_segment.png",
      map_preview_alt: "david foster path preview",
      object_fit: "object-[50%,60%]",
      title: "David Foster Path",
      description:
        "The David Foster Walking Path is a popular attraction in Victoria, British Columbia, Canada. Named after the famous Canadian musician, the path spans the length of the city's scenic waterfront, offering stunning views of the ocean and the Victoria's inner harbour. The path also features several public art installations and historical landmarks, such as views of Empress Hotel. Whether you're a music lover or simply looking for a picturesque stroll, the David Foster Walking Path offers a unique way to experience Victoria's rich culture and natural beauty.",
    },
    {
      main_src: "/photos/22_fishermans_wharf.JPG",
      main_alt: "fishermans wharf",
      map_preview_src: "/previews/0_fishermans_wharf_segment.png",
      map_preview_alt: "fishermans wharf map preview",
      object_fit: "object-[50%,70%]",
      title: "Fishermans Wharf",
      description:
        "Originally a working fishing community, the wharf is now home to a variety of shops, restaurants, and activities. Visitors can sample fresh seafood, take a whale watching tour, rent kayaks or paddleboards, or simply stroll along the docks and watch the boats come and go. The wharf also features colorful floating homes, which have become a popular attraction in their own right. Whether you're looking for a bite to eat, a unique shopping experience, or a chance to get out on the water, Fisherman's Wharf offers something for everyone.",
    },
  ];

export const downtown_scenic_walk_route: Feature<
  MultiLineString,
  GeoRouteProperties
> = {
  type: "Feature",
  properties: {
    title: "A Walk to Remember",
    description:
      "This path takes walkers along the David Foster Path towards Fisherman's Wharf, offering breathtaking views of the Inner Harbour, the Victoria Legislature Building, and the iconic Empress Hotel. Visitors can spot various marine life such as seals, otters, and birds on the way to the vibrant Fisherman's Wharf, where they can indulge in fresh seafood, explore local shops and enjoy the lively atmosphere. This walk is perfect for those seeking a peaceful escape while soaking in the beauty of Victoria's waterfront and experiencing the city's culture and history.",
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

export const downtown_scenic_walk_photos: GeoPhotos = {
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
        title: "Empress Hotel",
        description:
          "The Empress Hotel in Victoria, BC Canada is a luxurious and iconic landmark that boasts a rich history and a prime location in the heart of the city. Built in 1908, this stunning property features elegant architecture and charming details that transport guests back to the golden age of travel.",
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
          "The Steamship Grill and Bar in Victoria, BC Canada is a unique and charming restaurant that offers a one-of-a-kind dining experience. Housed in a historic steamship terminal building dating back to 1924, the restaurant features stunning views of Victoria's Inner Harbour. Guests can choose to dine inside the beautifully restored building or enjoy the stunning views from the outdoor patio. In addition to its exceptional cuisine and atmosphere, the Steamship Grill and Bar also hosts live music performances and events throughout the year, making it a popular destination for locals and visitors alike.",
      },
      geometry: {
        coordinates: [-123.36967020472727, 48.42089524448747],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        img_src: "7_harbour.JPG",
        img_alt: "1_harbour.JPG",
        title: "Lemonade Stand",
        description:
          "Surrounded by stunning views of the harbor and passing boats, the lemon-shaped lemonade stand is the perfect spot to take a break from your sightseeing and quench your thirst on a sunny day. Whether you're a local or a visitor, this stand is a must-visit for a refreshing taste of summer in Victoria.",
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
        title: "Black Ball Ferry Terminal",
        description:
          "The Black Ball Ferry Terminal in Victoria, BC is a bustling hub of activity as passengers embark on the journey across the Salish Sea to Port Angeles, Washington.",
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
        title: "Huntingdon Manor Hotel",
        description:
          "Nestled in the heart of Victoria's historic James Bay neighborhood, the Huntingdon Manor Hotel is a charming and elegant destination for travelers seeking a comfortable and convenient stay. The hotel is just a short walk from the bustling Inner Harbour and many of Victoria's top attractions, including the Royal BC Museum and the Parliament Buildings.",
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
        title: "Great Blue Heron",
        description:
          'The Great Blue Heron is an impressive bird that can be found in North America. It is the largest Heron in the continent, boasting a wingspan that can reach over 2 meters. These birds are quite tall, with a long neck and a beautiful blue-grey plumage. When in flight, they tuck their long necks into a tight "S" shape, which helps them achieve a more streamlined and efficient flight. Great Blue Herons are known for their patience and can often be observed standing completely still for hours as they scan the water for fish, waiting for the perfect opportunity to catch their prey.',
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
        img_alt:
          "ocean view of david foster path with a bench to sit on and view of the inner harbour",
        title: "David Foster Path",
        description:
          "The David Foster Path is a scenic walkway that offers breathtaking views of Victoria's inner harbor. The path is lined with benches, providing a perfect spot to sit and enjoy the ocean view. It's a great place to take a stroll or go for a jog, and it's also a popular spot for birdwatching. Don't miss the opportunity to experience the natural beauty of Victoria on the David Foster Path!",
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
        img_alt:
          "david foster path looking into the inner harbour and at the delta hotel. A zodiac whale watching boat drives by",
        title: "Ocean Views",
        description:
          "The David Foster Path is a beautiful waterfront trail in Victoria, offering stunning views of the inner harbour and the Delta hotel. Visitors can enjoy a leisurely walk along the path, taking in the sights and sounds of the ocean.",
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
        img_alt:
          "A stunning view of the empress hotel and the boats in the inner harbour from the david foster path",
        title: "Empress Hotel",
        description: "",
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
        img_alt: "A sea plane and a water taxi cross path in the inner harbour",
        title: "Sea Plane & Water Taxi",
        description:
          "Experience the thrill of exploring Victoria's stunning inner harbour by sea plane or water taxi. You might just catch a glimpse of both on your adventure! As you cross paths with these vessels, take in the beautiful scenery that surrounds you. The lush greenery, sparkling water, and bustling harbour make for a memorable sightseeing experience.",
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
        img_alt:
          "An expensive-looking yacht leaving the Victoria inner harbour",
        title: "Boats in the Inner Harbour",
        description:
          "Victoria's inner harbour is a hub of maritime activity, with boats of all shapes and sizes coming and going throughout the day. From luxury yachts to charming sailboats, there's always something interesting to see on the water. With its picturesque setting and lively atmosphere, the inner harbour is a \"must-sea\" for any visitor to Victoria.",
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
        img_alt:
          "Charming red brick buildings along David Foster Path with ponds outside of the building",
        title: "Local Living",
        description:
          "David Foster Path is a great place to experience local living in Victoria. The path winds its way past charming red brick buildings that house local shops, restaurants, and cafes. Take a break from your walk and sit by one of the ponds outside of the buildings, enjoying the tranquil surroundings. This is a great spot to people-watch and soak up the local atmosphere.",
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
        img_alt:
          "colorful houses on the shore side of fishermans wharf with people enjoying the sun",
        title: "Colorful Houses",
        description:
          "Fisherman's Wharf is a must-visit spot in Victoria. The wharf is lined with brightly colored houses, providing a beautiful backdrop for a relaxing day by the water.",
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
        img_alt: "view of fishermans wharf from david foster path",
        title: "Fishermans Wharf",
        description:
          "The colorful floating houses and the local fishing boats make for a unique and memorable experience. Don't forget to try the fresh seafood at one of the many restaurants in the area.",
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
        img_alt:
          "man enjoys the sun sitting on the dock outside of a green colorful house in Fishermans Wharf",
        title: "Fishermans Wharf",
        description:
          "Sit on one of the docks, enjoy the sun, and soak in the local atmosphere.",
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
        img_alt:
          "a person gets kayaks ready for rental on the docks of Fishermans Wharf as a woman enjoys her ice cream in the sun",
        title: "Kayak Rentals",
        description:
          "With the sun shining and ice cream in hand, take in the beautiful scenery and paddle around the colorful floating homes. The rental process is easy, and the staff is always willing to help. Don't miss out on this unique experience!",
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
        img_alt: "a beautiful glass building beside Fishermans Wharf",
        title: "Local Architecture",
        description:
          "Victoria is known for its impressive architecture, and this beautiful glass building near Fishermans Wharf is no exception. Take a stroll around the area and admire the unique buildings and structures that make up the city's skyline. With its modern design and prime waterfront location, this building is a must-see for any architecture enthusiast!",
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
        img_alt: "mexican seafood stand on fishermans wharf",
        title: "Mexican Seasfood",
        description:
          "Looking for some delicious Mexican seafood? Look no further than this restaurant located in the heart of Victoria. With fresh, flavorful dishes made using traditional techniques and local ingredients, it's the perfect spot for lunch or dinner. Don't miss their famous fish tacos or ceviche, and be sure to wash it all down with a refreshing margarita or cold beer.",
      },
      geometry: {
        coordinates: [-123.38281438825483, 48.42275058785444],
        type: "Point",
      },
    },
  ],
};
