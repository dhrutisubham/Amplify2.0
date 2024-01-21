import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import LoggedInContainer from "../containers/LoggedInContainer";

// const songData = [
//   {
//     thumbnail:
//       "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Curtains",
//     artist: "Ed Sheeran",
//   },
// ];

const MyMusic = () => {
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    //fetch data
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
      setSongData(response.data);
    };

    getData();
  }, []);
  return (
    <LoggedInContainer curActiveScreen="mymusic">
      <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
        My Songs
      </div>
      <div className="space-y-3">
        {songData.map((item) => {
          return <SingleSongCard info={item} playSound={() => {}} />;
        })}
      </div>
    </LoggedInContainer>
  );
};

// const MyMusic = ({ setUrl }) => {
//   const [songData, setSongData] = useState([]);
//   const [soundPlayed, setSoundPlayed] = useState(null);

//   const playSound = (songSrc) => {
//     if (soundPlayed) {
//       soundPlayed.stop();
//     }
//     var sound = new Howl({
//       src: [songSrc],
//       html5: true,
//     });
//     setSoundPlayed(sound);
//     sound.play();
//     console.log(sound);
//   };

//   useEffect(() => {
//     //fetch data
//     const getData = async () => {
//       const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
//       setSongData(response.data);
//     };

//     getData();
//   }, []);

//   return (
//     <div className="h-full w-full flex">
//       {/* This first div will be the left panel */}
//       <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-14">
//         <div>
//           {/* This div is for logo */}
//           <div className="logoDiv p-5">
//             <img src={spotify_logo} alt="spotify logo" width={100} />
//           </div>
//           <div className="py-5">
//             <IconText iconName={"ic:round-home"} displayText={"Home"} />
//             <IconText iconName={"tabler:search"} displayText={"Search"} />
//             <IconText
//               iconName={"fluent:library-20-filled"}
//               displayText={"Library"}
//             />
//             <IconText
//               iconName={"entypo:music"}
//               displayText={"My Music"}
//               active
//             />
//           </div>
//           <div className="pt-7">
//             <IconText
//               iconName={"basil:add-solid"}
//               displayText={"Create Playlist"}
//             />
//             <IconText
//               iconName={"tdesign:heart-filled"}
//               displayText={"Liked Songs"}
//             />
//           </div>
//         </div>
//         <div className="px-5">
//           <div className="border border-gray-100 text-white w-2/6 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
//             <Icon icon="mynaui:globe" />
//             <div className="ml-2 text-sm font-semibold">English</div>
//           </div>
//         </div>
//       </div>
//       {/* This second div will be the right panel */}
//       <div className="h-full w-4/5 bg-app-black overflow-auto">
//         {/* Tailwind does not have a height smaller than 1/6 so here h-1/10 is a default class, see tailwind.config.js file. After adding class run the tailwind commmand */}
//         <div className="navbar bg-black w-full h-1/10 bg-opacity-40 flex items-center justify-end">
//           <div className="w-1/2 flex h-full">
//             <div className="w-2/3 flex justify-around items-center">
//               <TextWithHover displayText={"Premium"} />
//               <TextWithHover displayText={"Support"} />
//               <TextWithHover displayText={"Download"} />
//               <div className="h-1/2 border-r border-white"></div>
//             </div>
//             <div className="w-1/3 flex justify-around h-full items-center">
//               <TextWithHover displayText={"Upload Song"} />
//               <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
//                 AJ
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="content p-8 overflow-auto">
//           <div className="text-white text-xl font-semibold pb-4 pl-2">
//             My Songs
//           </div>
//           <div className="space-y-3">
//             {songData.map((item) => {
//               return <SingleSongCard info={item} playSound={playSound} />;
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default MyMusic;
