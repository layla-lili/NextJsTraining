import {Product, Vendor} from "./interfaces";

// npx json-server --watch db.json --port 8000    
export const dummyUsers = [
   {
    id: '1',
    name: 'Layla',
    email: 'Layla@example.com',
    password: 'password',
    role: 'customer',
  },
   {
    id: '2',
    name: 'Sameer',
    password: 'password',
    email: 'Sameer@example.com',
    role: 'vendor',
  },
  {
    id: '3',
    name: 'Mariam',
    password: 'password',
    email: 'Mariam@example.com',
    role: 'customer',
  },
  {
    id: '4',
    name: 'Judie',
    email: 'Judie@example.com',
    role: 'founder',
  },
]

//id, name, vendor, price, image, rating, ratingCount
export const dummyProducts: Product[] = [
    { id:1,
      name: "Good Qulaity AC",
      vendor: "Reboot",
      price: 200,
      image:"/ac.jpg",
      rating: 4,
      ratingCount: 120
    },
    {
      id:2,
      name: "Good Qulaity AC",
      vendor: "Reboot",
      price: 14.5,
      image:"/ac.jpg",
      rating: 3,
      ratingCount: 120
    },
    {
      id:3,
      name: "Good Qulaity AC",
      vendor: "Reboot",
      price: 14.5,
      image:"/ac.jpg",
      rating: 2,
      ratingCount: 120
    },
    {
     id:4,
      name: "Good Qulaity AC",
      vendor: "Reboot",
      price:14.5,
      image:"/ac.jpg",
      rating: 2,
      ratingCount: 120
    },
    {
    id:5,
      name: "Good Qulaity AC",
      vendor: "Reboot",
      price: 14.5,
      image:"/ac.jpg",
      rating: 2,
      ratingCount: 120
    },
    {
    id:6,
      name: "Good Qulaity AC",
      vendor: "Reboot",
      price: 14.5,
      image:"/ac.jpg",
      rating: 2,
      ratingCount: 120
    },
    {
    id:7,
      name: "Good Qulaity AC",
      vendor: "Reboot",
      price: 14.5,
      image:"/ac.jpg",
      rating: 2,
      ratingCount: 120
    },
    {
    id:8,
      name: "Good Qulaity AC",
      vendor: "Reboot",
      price: 14.5,
      image:"/ac.jpg",
      rating: 2,
      ratingCount: 120
    },
    {
    id:9,
      name: "Good Qulaity AC",
      vendor: "Reboot",
      price: 14.5,
      image:"/Ac.jpg",
      rating: 2,
      ratingCount: 120
    }
  ];

  export const dummyVendors: Vendor[] = [
    {
      id:1,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/images/newVendor.png",
      rating: 4,
      ratingCount: 120
    },
    {
      id:2,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/placeHolder2.png",
      rating: 4,
      ratingCount: 120
    },
    {
      id:3,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/placeHolder2.png",
      rating: 4,
      ratingCount: 120
    },
    {
      id:4,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/placeHolder2.png",
      rating: 4,
      ratingCount: 120
    },
    {
      id:5,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/placeHolder2.png",
      rating: 4,
      ratingCount: 120
    },
    {
      id:6,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/placeHolder2.png",
      rating: 4,
      ratingCount: 120
    },
    {
      id:7,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/placeHolder2.png",
      rating: 4,
      ratingCount: 120
    },
    {
      id:8,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/placeHolder2.png",
      rating: 4,
      ratingCount:120
    },
    {
      id:9,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/placeHolder2.png",
      rating: 4,
      ratingCount: 120
    },
    {
      id:10,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/placeHolder2.png",
      rating: 4,
      ratingCount: 120
    },
    {
      id:11,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/placeHolder2.png",
      rating: 4,
      ratingCount: 120
    },
    {
      id:12,
      name: "reboot",
      products: dummyProducts,
      category:"Electronics",
      image: "/placeHolder2.png",
      rating: 4,
      ratingCount: 120
    }

  ]

  