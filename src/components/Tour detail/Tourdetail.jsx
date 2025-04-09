import React from 'react';
import { useParams, Link } from 'react-router-dom';
import tourData from '../../TourData';

const TourDetails = () => {

  const params = useParams();
  console.log("🔍 Full Params Object:", params);
  const { id } = useParams(); // Get ID from URL
  console.log("✅ URL ID from useParams():", params.id);
  const tour = tourData.find((t) => t.id === id);

  // const tour = tourData.find((t) => t.id.toString() === tourId); // Find tour by ID

  console.log("✅ Found Tour Data:", tour); // Check if tour is found

  if (!tour) {
    return <div className="min-h-screen bg-gray-100 p-4 text-center text-3xl font-bold uppercase">Tour not found</div>;
  }

  const { agencyDetails } = tour;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 md:flex">
        {/* Left Section: Tour Agency Details */}
        <div className="md:w-2/3 md:pr-6">
          {/* <div className="mb-4">
            <Link to="/" className="text-blue-500 hover:underline">← Back to Tours</Link>
          </div> */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{tour.title}</h2>

          {/* Agency Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">About the Agency</h3>
            <p className="text-gray-600"><strong>Name:</strong> {agencyDetails.name}</p>
            <p className="text-gray-600"><strong>Location:</strong> {agencyDetails.location}</p>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Amenities Provided</h3>
            <ul className="list-disc list-inside text-gray-600">
              {agencyDetails.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>

          {/* Pickup Location */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Pickup Information</h3>
            <p className="text-gray-600">{agencyDetails.pickupLocation}</p>
          </div>

          {/* Places to Visit */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Places You'll Visit</h3>
            <ul className="list-disc list-inside text-gray-600">
              {agencyDetails.placesToVisit.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>
          </div>

          {/* Hotel Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Hotel Accommodation</h3>
            <p className="text-gray-600">{agencyDetails.hotel}</p>
          </div>
        </div>

        {/* Right Section: Fare and Payment Details */}
        <div className="md:w-1/3 md:pl-6 md:border-l md:border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h3>

          {/* Final Fare */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700">Final Fare</h4>
            <p className="text-gray-600">{agencyDetails.finalFare}</p>
          </div>

          {/* Payment Details */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700">Payment Details</h4>
            <p className="text-gray-600">{agencyDetails.paymentDetails}</p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Contact for Payment</h4>
            <p className="text-gray-600"><strong>Phone:</strong> {agencyDetails.contact.phone}</p>
            <p className="text-gray-600"><strong>Email:</strong> {agencyDetails.contact.email}</p>
            <p className="text-sm text-gray-500 mt-2">
              Please contact the agency directly to make your payment using the provided mobile number or email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;




// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import tourData from '../../TourData';

// const TourDetails = ({}) => {

//   const params = useParams();
  
//   const { id } = params; 
//   console.log("URL ID:", id); // This should now log the correct ID
//   console.log("Params:", {id}); // Debugging to check if params exist

//   const tour = tourData.find((t) => t.id === id); // Find the tour by ID

//   // Debugging: Log the ID and tour data to verify
//   console.log("URL ID:",id);
//   console.log("Tour Data:", tourData);
//   console.log("Found Tour:", tour);

//   if (!tour) {
//     return <div className="min-h-screen bg-gray-100 p-4 text-center text-3xl font-bold uppercase">Tour not found</div>;
//   }

//   const { agencyDetails } = tour;

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-8">
//       <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 md:flex">
//         {/* Left Section: Tour Agency Details */}
//         <div className="md:w-2/3 md:pr-6">
//           <div className="mb-4">
//             <Link to="/destinationdetail" className="text-blue-500 hover:underline">← Back to Tours</Link>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">{tour.title}</h2>

//           {/* Agency Info */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-gray-700">About the Agency</h3>
//             <p className="text-gray-600"><strong>Name:</strong> {agencyDetails.name}</p>
//             <p className="text-gray-600"><strong>Location:</strong> {agencyDetails.location}</p>
//           </div>

//           {/* Amenities */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-gray-700">Amenities Provided</h3>
//             <ul className="list-disc list-inside text-gray-600">
//               {agencyDetails.amenities.map((amenity, index) => (
//                 <li key={index}>{amenity}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Pickup Location */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-gray-700">Pickup Information</h3>
//             <p className="text-gray-600">{agencyDetails.pickupLocation}</p>
//           </div>

//           {/* Places to Visit */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-gray-700">Places You'll Visit</h3>
//             <ul className="list-disc list-inside text-gray-600">
//               {agencyDetails.placesToVisit.map((place, index) => (
//                 <li key={index}>{place}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Hotel Details */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold text-gray-700">Hotel Accommodation</h3>
//             <p className="text-gray-600">{agencyDetails.hotel}</p>
//           </div>
//         </div>

//         {/* Right Section: Fare and Payment Details */}
//         <div className="md:w-1/3 md:pl-6 md:border-l md:border-gray-200">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h3>

//           {/* Final Fare */}
//           <div className="mb-6">
//             <h4 className="text-lg font-semibold text-gray-700">Final Fare</h4>
//             <p className="text-gray-600">{agencyDetails.finalFare}</p>
//           </div>

//           {/* Payment Details */}
//           <div className="mb-6">
//             <h4 className="text-lg font-semibold text-gray-700">Payment Details</h4>
//             <p className="text-gray-600">{agencyDetails.paymentDetails}</p>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h4 className="text-lg font-semibold text-gray-700">Contact for Payment</h4>
//             <p className="text-gray-600"><strong>Phone:</strong> {agencyDetails.contact.phone}</p>
//             <p className="text-gray-600"><strong>Email:</strong> {agencyDetails.contact.email}</p>
//             <p className="text-sm text-gray-500 mt-2">
//               Please contact the agency directly to make your payment using the provided mobile number or email.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TourDetails;



