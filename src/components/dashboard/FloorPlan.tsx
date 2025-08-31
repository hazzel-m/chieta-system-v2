import newFloorPlan from "@/assets/new-floorplan.png";

export const FloorPlan = () => {
  // Only show the new floor plan image, fully responsive
  return (
    <div className="w-full flex justify-center items-center">
      <img
        src={newFloorPlan}
        alt="Open Floor Plan"
        className="w-full h-auto max-w-10xl object-contain rounded-lg shadow-md"
        style={{ aspectRatio: '16/9', background: '#fff' }}
      />
    </div>
  );
// };
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </div>

  //     {/* Legend - Mobile Optimized */}
  //     <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs">
  //       <div className="flex items-center space-x-1">
  //         <div className="w-3 h-3 rounded-full bg-desk-available border-2 border-green-600"></div>
  //         <span className="whitespace-nowrap">Available</span>
  //       </div>
  //       <div className="flex items-center space-x-1">
  //         <div className="w-3 h-3 rounded-full bg-desk-unavailable border-2 border-red-600"></div>
  //         <span className="whitespace-nowrap">Unavailable</span>
  //       </div>
  //       <div className="flex items-center space-x-1">
  //         <div className="w-3 h-3 rounded-full bg-desk-booked border-2 border-orange-600"></div>
  //         <span className="whitespace-nowrap">Your Booking</span>
  //       </div>
  //       <div className="flex items-center space-x-1">
  //         <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-blue-600"></div>
  //         <span className="whitespace-nowrap">Checked In</span>
  //       </div>
  //       <div className="flex items-center space-x-1">
  //         <div className="w-3 h-3 rounded-full bg-desk-inactive border-2 border-gray-500"></div>
  //         <span className="whitespace-nowrap">Inactive</span>
  //       </div>
  //     </div>
  //   </div>
  // );
};