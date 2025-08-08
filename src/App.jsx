import { useTheme } from './context/ThemeContext';
import { FaGithub, FaLinkedin, FaInstagram, FaMoon, FaSun } from 'react-icons/fa';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import Dock from './components/Dock/Docks';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme(); // ✅ Fixed

  const items = [
      { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    {
      icon: <FaGithub size={18} />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/Vishal-Yadav-001', '_blank')
    },
    {
      icon: <FaLinkedin size={18} />,
      label: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/vishal-yadav-741956222/', '_blank')
    },
    {
      icon: theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />,
      label: 'Toggle Theme',
      onClick: toggleTheme
    }
  ];

  return (
    <div className='container'>
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
