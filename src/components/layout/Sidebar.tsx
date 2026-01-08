import { MENU_ITEMS, OTHERS_MENU } from "../../constants/mockData";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = MENU_ITEMS;
  const otherItems = OTHERS_MENU;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-60 bg-primary-purple-50 transition-transform duration-300 z-50 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          {/* Logo */}
          <div className="flex pl-10 h-16 items-center  gap-2 border-b-[0.5px]  border-border-gray ">
            <div className="w-6 h-6 bg-primary-purple rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-[11px]">G</span>
            </div>
            <span className="text-[11px]  font-bold text-primary-purple">
              GOODFOOD
            </span>
          </div>

          {/* Menu */}
          <div className="space-y-6">
            {/* Main Menu */}
            <div>
              <p className="text-[11px] pl-10 pt-10 pb-3 text-primary-blue uppercase mb-3">
                Menu
              </p>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`flex items-center mx-auto font-medium text-[12px] h-10.5 w-50 gap-3 px-4 py-2 rounded-lg transition-colors  ${
                      item.id === "dashboard"
                        ? "bg-primary-active-bg/10 text-primary-active-text"
                        : "text-primary-inactive-text hover:bg-primary-active-bg/10"
                    }`}
                  >
                    <img className="text-lg" src={item.icon} alt={item.label} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Others */}
            <div>
              <p className="text-[11px] pl-10 pt-4 pb-3 text-primary-blue uppercase mb-3">
                Others
              </p>
              <nav className="space-y-2">
                {otherItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-3 h-10.5 w-50 mx-auto px-4 py-2 rounded-lg text-slate-600 hover:bg-primary-active-bg/10 transition-colors"
                  >
                    <img className="text-lg" src={item.icon} alt={item.label} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
