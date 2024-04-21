// import Image from "next/image";
// import Link from "next/link";
// import React, { FC } from "react";
// import { BiSearch } from "react-icons/bi";

// type Props = {};

// const Hero: FC<Props> = (props) => {
//   return (
//     <div className="w-full 1000px:flex item-center">
//       <div className="absolute top-[100px] 1000px:top-[unset] 1500:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero_animation">
//         <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
//           <Image
//             src={require("../../../public/assests/banner-img-png.png")}
//             alt=""
//             className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
//           />
//         </div>
//         <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px) text-center 1000px:text-left mt-[150px]">
//           <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px: leading-[75px]">
//             Improve Your Online Learning Experience Better Instantly
//           </h2>
//           <br />
//           <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">
//             We have 40k+ Online courses & 500K+ Online registered student. Find
//             Your desired Courses from them
//           </p>
//           <br />
//           <br />
//           <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
//             <input
//               type="search"
//               placeholder="Search Courses..."
//               className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin "
//             />
//             <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
//               <BiSearch className="text-white" size={30} />
//             </div>
//           </div>
//           <br />
//           <br />
//           <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center ">
//             <Image
//               src={require("../../../public/assests/client-1.jpg")}
//               alt=""
//               className="rounded-full"
//             />
//             <Image
//               src={require("../../../public/assests/client-2.jpg")}
//               alt=""
//               className="rounded-full ml-[-20px]"
//             />
//             <Image
//               src={require("../../../public/assests/client-3.jpg")}
//               alt=""
//               className="rounded-full ml-[-20px]"
//             />
//             <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
//               500K+ People already trusted us.{""}
//               <Link
//                 href="/courses"
//                 className="dark:text-[#46e256] text-[crimson]"
//               >
//                 View Courses
//               </Link>{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black min-h-screen 100px:flex items-center justify-center ">
      <div className="absolute top-[100px] w-full 1000px:top-[unset]  1000px:h-[700px] 1500px:w-[700px] 1500px:h-[600px] hero_animation">
        <div className="pl-10 max-w-6xl flex flex-col md:flex-row items-center justify-between py-20">
          <div className="w-full md:w-3/5 rounded-lg overflow-hidden shadow-md">
            <Image
              src={require("../../../public/assests/banner-img-png.png")}
              alt="Hero Image"
              className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
            />
          </div>

          <div className="w-full md:w-2/5 mt-10 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Improve Your Online Learning Experience Better Instantly
            </h2>
            <p className="text-lg mb-8">
              We have 40k+ Online courses &amp; 500K+ Online registered student.
              Find Your desired Courses from them.
            </p>
            <div className="relative mx-auto max-w-md mb-8">
              <input
                type="search"
                placeholder="Search Courses..."
                className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full py-3 px-4 text-lg dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute right-0 top-0 mt-3 mr-4">
                <BiSearch className="text-white dark:text-gray-500" size={30} />
              </div>
            </div>
            <br />
            <br />
            <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center ">
              <Image
                src={require("../../../public/assests/client-1.jpg")}
                alt=""
                className="rounded-full"
              />
              <Image
                src={require("../../../public/assests/client-2.jpg")}
                alt=""
                className="rounded-full ml-[-20px]"
              />
              <Image
                src={require("../../../public/assests/client-3.jpg")}
                alt=""
                className="rounded-full ml-[-20px]"
              />
              <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
                500K+ People already trusted us.{""}
                <Link
                  href="/courses"
                  className="dark:text-[#46e256] text-[crimson]"
                >
                  View Courses
                </Link>{" "}
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
