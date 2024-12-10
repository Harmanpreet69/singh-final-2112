"use client";

import { useContext, useState } from "react";
import { themeContext, themeDispatchContext } from "../globalContext";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const intialTheme = useContext(themeContext);
  const dispatchTheme = useContext(themeDispatchContext);

  const [theme, setTheme] = useState(intialTheme);
  return (
    <div className="container">
      <h1>Home</h1>
      <p>Choose a color theme:</p>
      <div>
        <select onChange={(e) => setTheme(e.target.value)} defaultValue={theme}>
          <option>bg-danger</option>
          <option>bg-info</option>
          <option>bg-success</option>
          <option>bg-warning</option>
        </select>
        <button
          onClick={() => {
            dispatchTheme({ type: "update", theme });
            router.push("/home");
          }}
        >
          Set Theme
        </button>
      </div>
    </div>
  );
};

export default Home;
