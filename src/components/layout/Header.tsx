import searchBar from "../../assets/icons/Icon.svg";
import burger from "../../assets/icons/Emoticon.png";
import notification from "../../assets/icons/Notif Icon.svg";
interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="sticky top-0 right-0 bg-white border-b-[0.5px] border-border-gray z-30 h-16">
      <div className="mx-auto h-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8  flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Search Bar */}
        <div className="hidden sm:flex flex-1 ">
          <div className="relative w-full max-w-2xl h-8">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-5 pr-4 h-full rounded-[5px] bg-primary-purple-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-primary-active-bg placeholder:text-primary-purple-200/30"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-purple-200  ">
              <img
                src={searchBar}
                alt="Search icon"
                width={16}
                height={16}
                className="hover:scale-110 cursor-pointer"
              />
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="w-8 h-8 rounded-full bg-secondary-yellow flex items-center justify-center text-base">
            <img src={burger} alt="burger" />
          </div>

          {/* Profile */}
          <button
            className="flex items-center gap-3 px-2 py-1.5 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Account menu"
          >
            <p className="hidden sm:block text-sm font-semibold text-primary-purple-200">
              Delicious Burger
            </p>
            <svg
              className="w-4 h-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Notification Bell */}
          <button
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative"
            aria-label="Notifications"
          >
            <img src={notification} alt="Notification bell" />

            <span className="absolute top-1.5 right-1.5 w-2 h-2 border border-white bg-red-500 rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
};
