import "./output.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import SearchPage from "./routes/SearchPage";
import { useCookies } from "react-cookie";
import songContext from "./contexts/songContext";
import Library from "./routes/Library";
import SinglePlaylistView from "./routes/SinglePlaylistView";

function App() {
  const [currentSong, setCurrentSong] = useState("null");
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [cookie, setCookie] = useCookies(["token"]);
  // console.log(cookie.token);

  return (
    <div className="App">
      <div className="w-screen h-screen font-poppins">
        <BrowserRouter>
          {/* If user is already logged in then it is of no sense to access login and signup pages. Below doing the same thing that if token exist then rendering a set of routes else not */}
          {cookie.token ? (
            // Logged In Routes
            <songContext.Provider
              value={{
                currentSong,
                setCurrentSong,
                soundPlayed,
                setSoundPlayed,
                isPaused,
                setIsPaused,
              }}
            >
              {/* The below routes have accessibility to this songContext component */}
              <Routes>
                {/* Adding routes component here indicates to the package (react-router-dom) that we are starting to define our routes inside this */}
                <Route path="/" element={<HelloComponent />} />
                <Route path="/home" element={<LoggedInHomeComponent />} />
                <Route path="/uploadSong" element={<UploadSong />} />
                <Route path="/myMusic" element={<MyMusic />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/library" element={<Library />} />
                <Route
                  path="/playlist/:playlistId"
                  element={<SinglePlaylistView />}
                />
                <Route path="*" element={<Navigate to="/home" />} />
                {/* If person is going to any other route navigate it to home  */}
              </Routes>
            </songContext.Provider>
          ) : (
            // Logged Out Routes

            <Routes>
              <Route path="/home" element={<HomeComponent />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/signup" element={<SignupComponent />} />
              <Route path="*" element={<Navigate to="/login" />} />
              {/* If user is going to any other route navigate it to /login */}
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

const HelloComponent = () => {
  return <div>This is hello from component</div>;
};

export default App;
