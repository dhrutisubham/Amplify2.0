import { useState } from "react";
import { Icon } from "@iconify/react";
import { Cloudinary } from "@cloudinary/url-gen";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/Textinput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";

const UploadSong = ({ setUrl }) => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [uploadedSongFileName, setUploadedSongFileName] = useState();
  const navigate = useNavigate();

  const submitSong = async () => {
    // console.log(name);
    // console.log(thumbnail);
    // console.log(playlistUrl);

    const data = { name, thumbnail, track: playlistUrl };
    const response = await makeAuthenticatedPOSTRequest("/song/create", data);
    if (response.error) {
      alert("Could not create song");
      return;
    }
    alert("Success");
    navigate("/home");
    // console.log(response);
  };
  // console.log(window);
  // console.log(window.cloudinary);
  return (
    <div className="h-full w-full flex">
      {/* This first div will be the left panel */}
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-14">
        <div>
          {/* This div is for logo */}
          <div className="logoDiv p-5 text-white flex">
            {/* <img src={spotify_logo} alt="spotify logo" width={100} /> */}
            <div>
              <Icon icon="simple-icons:awsamplify" className="text-4xl" />
            </div>
            <div className="text-xl font-semibold px-3 pt-2">Amplify</div>
          </div>
          <div className="py-5">
            <IconText iconName={"ic:round-home"} displayText={"Home"} active />
            <IconText iconName={"tabler:search"} displayText={"Search"} />
            <IconText
              iconName={"fluent:library-20-filled"}
              displayText={"Library"}
            />
            <IconText iconName={"entypo:music"} displayText={"My Music"} />
          </div>
          <div className="pt-7">
            <IconText
              iconName={"basil:add-solid"}
              displayText={"Create Playlist"}
            />
            <IconText
              iconName={"tdesign:heart-filled"}
              displayText={"Liked Songs"}
            />
          </div>
        </div>
        <div className="px-5">
          <div className="border border-gray-100 text-white w-2/6 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
            <Icon icon="mynaui:globe" />
            <div className="ml-2 text-sm font-semibold">English</div>
          </div>
        </div>
      </div>
      {/* This second div will be the right panel */}
      <div className="h-full w-4/5 bg-app-black overflow-auto">
        {/* Tailwind does not have a height smaller than 1/6 so here h-1/10 is a default class, see tailwind.config.js file. After adding class run the tailwind commmand */}
        <div className="navbar bg-black w-full h-1/10 bg-opacity-40 flex items-center justify-end">
          <div className="w-1/2 flex h-full">
            <div className="w-2/3 flex justify-around items-center">
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white"></div>
            </div>
            <div className="w-1/3 flex justify-around h-full items-center">
              <TextWithHover displayText={"Upload Song"} />
              <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                AJ
              </div>
            </div>
          </div>
        </div>
        <div className="content px-8 pt-0 overflow-auto">
          <div className="text-2xl font-semibold mb-5 text-white mt-8">
            Upload Your Music
          </div>
          <div className="w-2/3 flex space-x-3">
            <div className="w-1/2">
              <TextInput
                label="Name"
                labelClassName={"text-white"}
                placeholder={"Name"}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label="Thumbnail"
                labelClassName={"text-white"}
                placeholder={"Thumbnail"}
                value={thumbnail}
                setValue={setThumbnail}
              />
            </div>
          </div>
          <div className="py-5">
            {uploadedSongFileName ? (
              <div className="bg-white rounded-full p-3 w-1/3">
                {uploadedSongFileName.substr(0, 30)}......
              </div>
            ) : (
              <CloudinaryUpload
                setUrl={setPlaylistUrl}
                setName={setUploadedSongFileName}
              />
            )}
          </div>
          <div
            className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold"
            onClick={submitSong}
          >
            Submit Song
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSong;
