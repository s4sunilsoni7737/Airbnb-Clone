const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
      filename: "img1.jpg",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "img2.jpg",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      filename: "img3.jpg",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "img4.jpg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-587439221666468647/original/77da70c3-2c53-4fdf-a674-93687f2ec508.jpeg?im_w=720",
      filename: "img5.jpg",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Luxury Penthouse in Paris",
    description:
      "Enjoy the ultimate luxury in this stunning penthouse with sweeping views of the Eiffel Tower.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1046270679399078512/original/6ad0721b-2201-4ff6-bdbe-391a4db8605d.jpeg?im_w=720",
      filename: "img6.jpg",
    },
    price: 5000,
    location: "Paris",
    country: "France",
  },
  {
    title: "Rustic Cabin in the Forest",
    description:
      "Escape the hustle and bustle in this cozy, rustic cabin surrounded by towering pines.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-507741036516104287/original/a89b73fb-0623-40d0-abf2-ed6d5cbc4d5f.jpeg?im_w=720",
      filename: "img7.jpg",
    },
    price: 950,
    location: "Colorado",
    country: "United States",
  },
  {
    title: "Island Villa in the Maldives",
    description:
      "Experience paradise in this luxurious island villa with private beach access and turquoise waters.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1199084366601985162/original/451f2ddc-5a9b-45d9-94c8-778445d6d9d6.jpeg?im_w=720",
      filename: "img8.jpg",
    },
    price: 8000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Switzerland",
    description:
      "A ski enthusiast's dream, this chalet offers easy access to the slopes and luxurious amenities.",
    image: {
      url: "https://a0.muscache.com/im/pictures/f5ceadbd-a34f-47d1-913f-7087a2c34398.jpg?im_w=720",
      filename: "img9.jpg",
    },
    price: 4000,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Charming Countryside Cottage",
    description:
      "Relax in this quaint countryside cottage, complete with a fireplace and beautiful garden.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-913527143602989732/original/6c1f4d3e-1282-42b1-844d-49657aef42a9.jpeg?im_w=720",
      filename: "img10.jpg",
    },
    price: 1200,
    location: "Yorkshire",
    country: "United Kingdom",
  },
  {
    title: "Luxury Condo in Downtown Toronto",
    description:
      "Stay in this sleek, modern condo with fantastic city views and high-end amenities.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1083334088822348718/original/cb21f1f2-3f92-43bf-b31c-f177172589ac.jpeg?im_w=720",
      filename: "img11.jpg",
    },
    price: 2500,
    location: "Toronto",
    country: "Canada",
  },
  {
    title: "Spacious Villa in Bali",
    description:
      "Live the dream in this stunning villa, with infinity pools and lush tropical gardens.",
    image: {
      url: "https://a0.muscache.com/im/pictures/75c5ea1b-eab0-4ec1-8295-cbeb20518fae.jpg?im_w=720",
      filename: "img12.jpg",
    },
    price: 3200,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Elegant Beachside Villa",
    description: "Relax in style with stunning ocean views and luxury amenities at this beachside villa.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1118078518152341390/original/53de5a38-21c3-44fd-8c96-6332e6115123.jpeg?im_w=720",
      filename: "img1.jpg",
    },
    price: 2800,
    location: "Canggu",
    country: "Indonesia",
  },
  {
    title: "Cozy Mountain Retreat",
    description: "Enjoy peace and fresh air in this cozy retreat surrounded by lush mountains.",
    image: {
      url: "https://a0.muscache.com/im/pictures/64a82eeb-c159-4268-a5d0-606aa52d762a.jpg?im_w=720",
      filename: "img2.jpg",
    },
    price: 1900,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Modern Jungle Villa",
    description: "Experience tropical living with this stylish villa set deep within the jungle.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1246078880893101870/original/8b44a534-7e86-4f8d-9906-61d5d7d0b05d.jpeg?im_w=720",
      filename: "img3.jpg",
    },
    price: 2500,
    location: "Seminyak",
    country: "Indonesia",
  },
  {
    title: "Serene Lakeside Cabin",
    description: "Unwind in a peaceful lakeside cabin, perfect for romantic getaways and quiet weekends.",
    image: {
      url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-54175042/original/388d208e-09dc-4db0-92bf-b9c7505de84c.jpeg?im_w=720",
      filename: "img4.jpg",
    },
    price: 1700,
    location: "Bedugul",
    country: "Indonesia",
  },
  {
    title: "Charming Forest Bungalow",
    description: "Wake up to the sounds of nature in this beautiful forest bungalow, perfect for a relaxing escape.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-665015970482989205/original/418f18b6-5dd4-4f5d-b381-97c05acc2035.jpeg?im_w=720",
      filename: "img5.jpg",
    },
    price: 2100,
    location: "Munduk",
    country: "Indonesia",
  },
  {
    title: "Elegant City Loft",
    description: "Stay in the heart of the city with this stylish loft featuring modern interiors and great views.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMyMTU0MjQ2ODE1NTAyMDQxNw%3D%3D/original/f05b785b-4355-4a19-8eef-a2529f9438e9.jpeg?im_w=720",
      filename: "img6.jpg",
    },
    price: 3000,
    location: "Denpasar",
    country: "Indonesia",
  },
  {
    title: "Minimalist Oceanfront Apartment",
    description: "Enjoy the perfect beach vibes in this clean and minimalist oceanfront apartment.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMyMTU0MjQ2ODE1NTAyMDQxNw%3D%3D/original/2e9291fd-2d67-4fc5-94fe-3ba2a0488e8c.jpeg?im_w=720",
      filename: "img7.jpg",
    },
    price: 2700,
    location: "Kuta",
    country: "Indonesia",
  },
  {
    title: "Peaceful Countryside Villa",
    description: "Rejuvenate your soul in this spacious countryside villa surrounded by green rice fields.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1321542468155020417/original/c22fac31-33dd-4fe0-bd68-d4c9ab287ba7.jpeg?im_w=720",
      filename: "img8.jpg",
    },
    price: 2300,
    location: "Tabanan",
    country: "Indonesia",
  },
  {
    title: "Luxury Poolside Escape",
    description: "Dive into pure luxury with this modern villa featuring a private pool and elegant decor.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMyMTU0MjQ2ODE1NTAyMDQxNw%3D%3D/original/3bd621ea-98bc-4254-8342-33ceffdbbf8a.jpeg?im_w=720",
      filename: "img9.jpg",
    },
    price: 3500,
    location: "Seminyak",
    country: "Indonesia",
  },
  
  
  
];

module.exports = { data: sampleListings };