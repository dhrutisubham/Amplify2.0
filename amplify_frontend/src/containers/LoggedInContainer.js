import { useContext, useLayoutEffect, useState, useRef } from "react";
import { Howl, Howler } from "howler";
import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import songContext from "../contexts/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";
import AddToPlaylistModal from "../modals/AddToPlaylistModal";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

const LoggedInContainer = ({ children, curActiveScreen }) => {
  //   const [soundPlayed, setSoundPlayed] = useState(null);
  //   const [isPaused, setIsPaused] = useState(true);

  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);

  const {
    currentSong,
    setCurrentSong,
    soundPlayed,
    setSoundPlayed,
    isPaused,
    setIsPaused,
  } = useContext(songContext);
  // console.log(currentSong);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    // the below if statement will prevent the useEffect from running on the first render
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (!currentSong) {
      return;
    }
    console.log("here");
    changeSong(currentSong.track);
  }, [currentSong && currentSong.track]);

  const addSongToPlaylist = async (playlistId) => {
    const songId = currentSong._id;

    const payload = { playlistId, songId };
    const response = await makeAuthenticatedPOSTRequest(
      "/playlist/add/song",
      payload
    );
    if (response._id) {
      setAddToPlaylistModalOpen(false);
    }
  };

  const playSound = () => {
    if (!soundPlayed) {
      return;
    }
    soundPlayed.play();
  };

  const changeSong = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    var sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);
    console.log(sound);
  };

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const togglePlayPause = () => {
    if (isPaused) {
      playSound(currentSong.track);
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  return (
    <div className="h-full w-full bg-app-black">
      {createPlaylistModalOpen && (
        <CreatePlaylistModal
          closeModal={() => {
            setCreatePlaylistModalOpen(false);
          }}
        />
      )}
      {addToPlaylistModalOpen && (
        <AddToPlaylistModal
          closeModal={() => {
            setAddToPlaylistModalOpen(false);
          }}
          addSongToPlaylist={addSongToPlaylist}
        />
      )}
      <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
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
              <IconText
                iconName={"ic:round-home"}
                displayText={"Home"}
                active={curActiveScreen === "home"}
                targetLink={"/home"}
              />
              <IconText
                iconName={"tabler:search"}
                displayText={"Search"}
                active={curActiveScreen === "search"}
                targetLink={"/search"}
              />
              <IconText
                iconName={"fluent:library-20-filled"}
                active={curActiveScreen === "Library"}
                displayText={"Library"}
                targetLink={"/library"}
              />
              <IconText
                iconName={"entypo:music"}
                displayText={"My Music"}
                active={curActiveScreen === "mymusic"}
                targetLink={"/mymusic"}
              />
            </div>
            <div className="pt-7">
              <IconText
                iconName={"basil:add-solid"}
                displayText={"Create Playlist"}
                onClick={() => setCreatePlaylistModalOpen(true)}
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
                  AA
                </div>
              </div>
            </div>
          </div>
          <div className="content px-8 pt-0 overflow-auto">{children}</div>
        </div>
      </div>
      {/* This div is for currently plaing song */}
      {currentSong && (
        <div className="h-1/10 w-full bg-black bg-opacity-30 text-white flex items-center px-4">
          <div className="w-1/4 flex items-center">
            <img
              src={currentSong.thumbnail}
              alt="Current Song Thumbnail"
              className="h-14 w-14 rounded"
            />
            <div className="pl-4">
              <div className="text-sm hover:underline cursor-pointer">
                {currentSong.name}
              </div>
              <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                {currentSong.artist?.firstName +
                  " " +
                  currentSong.artist?.lastName}
                {/* Ed Sheeran */}
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center h-full flex-col items-center">
            <div className="flex w-1/3 justify-between items-center">
              {/* Song controls */}
              <Icon
                icon="ph:shuffle-fill"
                fontSize={30}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
              <Icon
                icon="material-symbols:skip-previous-outline"
                fontSize={30}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
              <Icon
                icon={isPaused ? "carbon:play-outline" : "carbon:pause-outline"}
                fontSize={40}
                className="cursor-pointer text-gray-500 hover:text-white"
                onClick={togglePlayPause}
              />
              <Icon
                icon="material-symbols:skip-next-outline"
                fontSize={30}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
              <Icon
                icon="gg:repeat"
                fontSize={30}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
            </div>
            {/* <div>Progress bar here</div> */}
          </div>
          <div className="w-1/4 flex justify-end pr-4 space-x-4 items-center">
            <Icon
              icon="ic:round-playlist-add"
              fontSize={30}
              className="cursor-pointer text-gray-500 hover:text-white"
              onClick={() => {
                setAddToPlaylistModalOpen(true);
              }}
            />
            <Icon
              icon="ph:heart-bold"
              fontSize={25}
              className="cursor-pointer text-gray-500 hover:text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInContainer;
