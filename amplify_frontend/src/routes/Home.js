import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";

{
  /* <Card
          title="Lofi-Beats"
          description="New-beats, chill everyday and enjoy the songs"
          imgUrl="https://images.unsplash.com/photo-1509098681029-b45e9c845022?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Deep-Focus"
          description="Keep calm and focus with this music"
          imgUrl="https://images.unsplash.com/photo-1517926112623-f32a800790d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Instrumental Study"
          description="Focus with soft study music on the background"
          imgUrl="https://media.istockphoto.com/id/1411570010/photo/close-up-shot-of-an-electric-guitar-macro-black-and-white.jpg?s=2048x2048&w=is&k=20&c=6o4wmL2ybW3i62hAhWMTNavURCK8zSBaMTNm6dtZxEA="
        />
        <Card
          title="Focus-Flow"
          description="Up tempo instrumental hip hop beats"
          imgUrl="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Chillout-Lounge"
          description="Just sit back and enjoy lounge beats"
          imgUrl="https://images.unsplash.com/photo-1534276866337-55723bdee569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        /> */
}

const focusCardsData = [
  {
    title: "Lofi-Beats",
    description: "New-beats, chill everyday and enjoy the songs",
    imgUrl:
      "https://images.unsplash.com/photo-1509098681029-b45e9c845022?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Deep-Focus",
    description: "Keep calm and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1517926112623-f32a800790d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study music on the background",
    imgUrl:
      "https://media.istockphoto.com/id/1411570010/photo/close-up-shot-of-an-electric-guitar-macro-black-and-white.jpg?s=2048x2048&w=is&k=20&c=6o4wmL2ybW3i62hAhWMTNavURCK8zSBaMTNm6dtZxEA=",
  },
  {
    title: "Focus-Flow",
    description: "Up tempo instrumental hip hop beats",
    imgUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Chillout-Lounge",
    description: "Keep calm and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1534276866337-55723bdee569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const AmplifyPlaylist = [
  {
    title: "Chill Hits",
    description: "New-beats, chill everyday and enjoy the songs",
    imgUrl:
      "https://images.unsplash.com/photo-1564415051543-cb73a7468103?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rock Classics",
    description: "Keep calm and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Today's Top Hits",
    description: "Focus with soft study music on the background",
    imgUrl:
      "https://media.istockphoto.com/id/1411570010/photo/close-up-shot-of-an-electric-guitar-macro-black-and-white.jpg?s=2048x2048&w=is&k=20&c=6o4wmL2ybW3i62hAhWMTNavURCK8zSBaMTNm6dtZxEA=",
  },
  {
    title: "Jazz in the back",
    description: "Up tempo instrumental hip hop beats",
    imgUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "All out 80s",
    description: "Keep calm and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1534276866337-55723bdee569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home = () => {
  return (
    <div className="h-full w-full flex">
      {/* This first div will be the left panel */}
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-14">
        <div>
          {/* This div is for logo */}
          <div className="logoDiv p-5">
            <img src={spotify_logo} alt="spotify logo" width={100} />
          </div>
          <div className="py-5">
            <IconText iconName={"ic:round-home"} displayText={"Home"} active />
            <IconText iconName={"tabler:search"} displayText={"Search"} />
            <IconText
              iconName={"fluent:library-20-filled"}
              displayText={"Library"}
            />
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
            <div className="w-3/5 flex justify-around items-center">
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white"></div>
            </div>
            <div className="w-2/5 flex justify-around h-full items-center">
              <TextWithHover displayText={"Sign up"} />
              <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                Log in
              </div>
            </div>
          </div>
        </div>
        <div className="content px-8 pt-0 overflow-auto">
          <PlaylistView titleText="Focus" cardsData={focusCardsData} />
          <PlaylistView
            titleText="Amplify Playlist"
            cardsData={AmplifyPlaylist}
          />
          <PlaylistView titleText="Sound of India" cardsData={focusCardsData} />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex justify-between space-x-6">
        {
          // cardsData will be an array
          cardsData.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })
        }
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
      <div className="pb-4 pt-2">
        <img className="w-full rounded-md pb-4" src={imgUrl} alt="label" />
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default Home;
