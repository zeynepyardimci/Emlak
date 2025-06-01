import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  return (
    <header className="bg-navbar w-full px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.jpg" alt="Logo" className="h-20 w-35" />
        </Link>
        <Link to="/" className="text-2xl font-bold text-green-800">
          YARDIMCI EMLAK & iNŞAAT
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-green-800 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-emlakText" : "hover:text-green-600 font-semibold"
            }
          >
            Ana Sayfa
          </NavLink>
          <NavLink
            to="/ilanlar"
            className={({ isActive }) =>
              isActive ? "text-emlakText" : "hover:text-green-600 font-semibold"
            }
          >
            İlanlar
          </NavLink>
          <NavLink
            to="/hakkimizda"
            className={({ isActive }) =>
              isActive ? "text-emlakText" : "hover:text-green-600 font-semibold"
            }
          >
            Hakkımızda
          </NavLink>
          <NavLink
            to="/iletisim"
            className={({ isActive }) =>
              isActive ? "text-emlakText" : "hover:text-green-600 font-semibold"
            }
          >
            İletişim
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "text-emlakText" : "hover:text-green-600 font-semibold"
            }
          >
            Admin Paneli
          </NavLink>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px]">
              <div className="flex flex-col space-y-4 mt-6">
                <NavLink to="/" className="nav-link" end>
                  Ana Sayfa
                </NavLink>
                <NavLink to="/ilanlar" className="nav-link">
                  İlanlar
                </NavLink>
                <NavLink to="/hakkimizda" className="nav-link">
                  Hakkımızda
                </NavLink>
                <NavLink to="/iletisim" className="nav-link">
                  İletişim
                </NavLink>
                <NavLink to="/admin" className="nav-link">
                  Admin Paneli
                </NavLink>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

