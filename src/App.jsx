import { useTheme } from "./context/ThemeContext";
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import {
  VscHome,
} from "react-icons/vsc";
import Dock from "./components/Dock/Docks";
import "./App.css";
import aboutData from "./data/about.json";
import { MdEmail } from "react-icons/md";

function App() {
  const { theme, toggleTheme } = useTheme(); // ✅ Fixed

  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <FaGithub size={18} />,
      label: "GitHub",
      onClick: () => window.open(aboutData.github, "_blank"),
    },
    {
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      onClick: () => window.open(aboutData.linkedin, "_blank"),
    },
    {
      icon: <MdEmail size={18}  />,
      label: "Email",
      onClick: () => window.open(aboutData.email, "_blank"),
    },
    {
      icon: theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />,
      label: "Toggle Theme",
      onClick: toggleTheme,
    },
  ];

  return (
    <div className="container">
      Hello
      <Dock
        items={items}
        panelHeight={55}
        baseItemSize={40}
        magnification={60}
        distance={140}
      />
    </div>
  );
}

export default App;
