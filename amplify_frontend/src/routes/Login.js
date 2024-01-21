import { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/Textinput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const login = async () => {
    const data = { email, password };
    const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
    if (response && !response.err) {
      // console.log(response);
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success");
      navigate("/home");
    } else {
      alert("Failure");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-6 border-b border-solid border-gray-300 w-full flex justify-center">
        <div>
          <Icon icon="logos:aws-amplify" width={50} />
        </div>
        <div className="text-3xl text-yellow-500 pl-2 text-semibold">
          Amplify
        </div>
        {/* <Icon icon="logos:spotify" width={140} /> */}
      </div>
      <div className="inputRegion w-1/4 py-10 flex items-center justify-center flex-col">
        <div className="font-bold mb-4">To continue, log in to Amplify</div>
        <TextInput
          label="Email ID or Username"
          placeholder="Email ID or Username"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex items-center justify-end my-8 ">
          <button
            className="bg-green-400 font-semibold p-2 px-8 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
            Log In
          </button>
        </div>
        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-lg">Don't have an account?</div>
        <div className="border border-gray-500 text-gray-500 w-full flex item-center justify-center py-3 rounded-full font-bold">
          <Link to="/signup">Sign up for Amplify</Link>
          {/* a tag refreshes the whole page while Link tag will only refresh the new parts not the part which is common in both pages */}
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
