import Link from 'next/link';
import React from 'react';




export interface ProductCardProps {
  id: number;
  name: string;
  vendor: string;
  price: number;
  image: string;
  rating: number;
  ratingCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, vendor, price, image, rating, ratingCount }) => {
  const starsTotal = 5; // Total number of stars



  

  // Function to render the star rating
  const renderRatingStars = () => {
    const ratingNumber = rating; // Convert rating to number
    const fullStars = Math.floor(ratingNumber); // Number of full stars
    const halfStars = ratingNumber % 1 !== 0; // Check if there's a half star

    // Array to hold star elements
    const starElements = [];

    // Push full stars
    for (let i = 0; i < fullStars; i++) {
      starElements.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="h-5 w-5 text-yellow-500"
        >
          <path
            fillRule="evenodd"
            d="M10 0l2.5 6.25H20l-5 4.25 1.5 6.25-5.5-3.75-5.5 3.75 1.5-6.25-5-4.25h7.5L10 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    }

    // Push half star if exists
    if (halfStars) {
      starElements.push(
        <svg
          key="half-star"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="h-5 w-5 text-yellow-500"
        >
          <path
            fillRule="evenodd"
            d="M10 0l2.5 6.25H20l-5 4.25 1.5 6.25-5.5-3.75-5.5 3.75 1.5-6.25-5-4.25h7.5L10 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    }

    // Push empty stars if necessary
    const emptyStars = starsTotal - starElements.length;
    for (let i = 0; i < emptyStars; i++) {
      starElements.push(
        <svg
          key={`empty-star-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4l1.417 3.95L18 9.583l-3.417 2.842L15.083 18 12 15.334 8.917 18l1.5-5.575L6 9.583 10.583 7.95 12 4z"
          />
        </svg>
      );
    }

    return (
      <div className="flex items-center">
        {starElements} ({ratingCount})
      </div>
    );
  };



  return (
<Link href={`/products/${id}`} legacyBehavior>

  
    <article className="rounded-xl bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-95 border border-slate-300 duration-300" style={{ height: '380px', width: '250px' }}>
      <div className="relative flex items-end justify-center overflow-hidden rounded-t-lg" style={{ height: '50%' }}>
  
          <a>
            <img src={image} alt="Product Photo" className="w-full h-full object-cover" />
          </a>
      
      </div>
      <div className="mt-1 flex flex-col gap-2 p-3" style={{ height: '50%' }}>
        <div className="flex flex-col gap-1">
          <h2 className="text-black text-sm font-bold font-Montserrat">{name}</h2>
          <p className="text-sm text-black font-bold font-Montserrat">{vendor}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-between pt-3">
            <p className="text-black text-2xl">BD {price}</p>
            {renderRatingStars()}
          </div>
          <button
            className="flex rounded-full items-center justify-center w-14 h-14 bg-gray-700 text-right text-white duration-100 hover:bg-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
        </div>
      </div>
    </article>

    </Link>
     
  );
};

export default ProductCard;
