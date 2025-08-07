import { useTheme } from './context/ThemeContext'; 
import { FaMoon, FaSun } from 'react-icons/fa';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import Dock from './components/Dock/Docks';

function App() {
  const { theme, toggleTheme } = useTheme(); // ✅ Fixed

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
    {
      icon: theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />,
      label: 'Toggle Theme',
      onClick: toggleTheme
    }
  ];

  return (
    <>
    Hello
        <Dock
      items={items}
      panelHeight={55}
      baseItemSize={40}
      magnification={60}
      distance={140}
    />
    </>

  );
}

export default App;
