import React from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PricingCard = ({ title, price, rating, reviews, category, image, id }) => {

  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mx-auto transition-transform duration-300 hover:scale-105">
      
      {/* Wishlist Button */}
      <div className="absolute top-2 right-2 bg-white rounded-full p-2 cursor-pointer shadow-md hover:bg-gray-100" onClick={() => setIsFavorited(!isFavorited)}>
        <span className="text-lg">{isFavorited ? '❤️' : '🤍'}</span>
      </div>
      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>

        {/* Star Rating */}
        <div className="flex items-center mt-2">
          {[...Array(Math.floor(rating))].map((_, index) => (
            <FaStar key={index} className="text-yellow-400" />
          ))}
          {rating % 1 !== 0 && <FaStar className="text-yellow-400 opacity-50" />} {/* Half Star */}
          <span className="ml-2 text-gray-600 text-sm">{rating} ({reviews} Reviews)</span>
        </div>

        {/* Category & Price */}
        <p className="text-sm text-gray-500 mt-1">{category}</p>
        <div className="mt-2">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <p className="text-xs text-gray-500">Per Adult (Prices may vary)</p>
        </div>
        
        {/* CTA Button */}
        <Link to={`/tours/${id}`}>
          <button className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-800 font-semibold py-2 px-5 rounded-md w-full transition-shadow duration-300 shadow-md hover:shadow-lg">
            Select Package
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;





// import React from 'react';
// import { FaStar } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';



// const PricingCard = ({ title, price, rating, reviews, category, image, id }) => {
//   const [isFavorited, setIsFavorited] = useState(false);

//   console.log("✅ Tour ID received in PricingCard:", id);
//   return (
//     <div className="max-w-xs w-full bg-yellow-50 border border-gray-200 rounded-lg shadow-md overflow-hidden mx-auto px-4 py-4">
//        <div className="relative w-full h-10">
//        <div className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer" onClick={() => setIsFavorited(!isFavorited)}>
//         <span className="text-lg">{isFavorited ? '❤️' : '🤍'}</span>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-4">
//         <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{title}</h3>
//         <div className="flex items-center mt-2">
//           <div className="flex space-x-1 text-green-500">
//             {[...Array(5)].map((_, index) => (
//               <FaStar key={index} />
//             ))}
//           </div>
//           <span className="ml-1 text-gray-600">{rating}</span>
//           <span className="ml-1 text-gray-500 text-sm">({reviews})</span>
//         </div>
//         <p className="text-sm text-gray-500 mt-1">{category}</p>
//         <div className="mt-2">
//           <span className="text-xl font-bold text-gray-800">{price}</span>
//           <p className="text-xs text-gray-500">per adult (price varies by group size)</p>
//         </div>
        
//         <Link to={`/tours/${id}`}>
//           <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-5 rounded-md float-right">
//             Select Package
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default PricingCard;



// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// const PricingCard = ({ title, price, rating, reviews, category, image }) => {
//   const [isFavorited, setIsFavorited] = useState(false);

//   return (
//     <div className="max-w-xs w-full bg-white border border-gray-500 rounded-lg shadow-md overflow-hidden mx-auto px-4 py-4">
//       {/* <div className="relative w-full h-48">
//         <img src={image} alt="Tour Image" className="w-full h-full object-cover" />
//       </div> */}
//         <div
//           className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer"
//           onClick={() => setIsFavorited(!isFavorited)}
//         >
//           <span className="text-lg">{isFavorited ? '❤️' : '🤍'}</span>
//         </div>
//       <div className="p-4">
//         <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{title}</h3>
//         <div className="flex items-center mt-2">
//           <div className="flex space-x-1 text-green-500">
//             {[...Array(5)].map((_, index) => (
//               <FaStar key={index} />
//             ))}
//           </div>
//           <span className="ml-1 text-gray-600">{rating}</span>
//           <span className="ml-1 text-gray-500 text-sm">({reviews})</span>
//         </div>
//         <p className="text-sm text-gray-500 mt-1">{category}</p>
//         <div className="mt-2">
//           <span className="text-xl font-bold text-gray-800">{price}</span>
//           <p className="text-xs text-gray-500">per adult (price varies by group size)</p>
//         </div>
//         <button className="mx-auto bg-yellow-300 hover:bg-yellow-500 transition duration-300 text-gray-800 font-semibold py-2 px-4 rounded-md float-right">
//           Select Package
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PricingCard;