import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import { useRouter } from 'next/router';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const isMainPage = router.pathname === '/';

  return (
    <button
      onClick={isMainPage ? toggleTheme : undefined}
      className={`p-2 rounded-full transition-all duration-300 ease-in-out flex items-center gap-2
                ${isMainPage ? 'cursor-pointer' : 'cursor-not-allowed opacity-75'}
                focus:outline-none focus:ring-2 focus:ring-offset-2
                dark:focus:ring-offset-gray-800 focus:ring-[#d4b595]`}
      aria-label="Theme indicator"
      title={isMainPage ? "Toggle theme" : "Theme can only be changed on main page"}
    >
      {theme === 'dark' ? (
        <>
          <FaSun className="w-5 h-5 text-amber-400" />
          <span className="text-sm text-white dark:text-white">Theme</span>
        </>
      ) : (
        <>
          <FaMoon className="w-5 h-5 text-[#8b7355]" />
          <span className="text-sm text-[#333333] dark:text-white">Theme</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle; 