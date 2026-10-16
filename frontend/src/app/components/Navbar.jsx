"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getCurrentUser, clearAuth } from "../../services/api";
import {
  User,
  Menu,
  X,
  LogOut,
  History,
  Shield,
  ChevronDown,
  Sparkles,
  LayoutDashboard,
  ScanSearch,
  FileText,
  BookOpen,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Sync user state on mount, path changes, and on auth custom events
  useEffect(() => {
    const syncUser = () => {
      setUser(getCurrentUser());
    };

    syncUser();

    window.addEventListener("vulnexa_auth_change", syncUser);
    window.addEventListener("storage", syncUser);

    return () => {
      window.removeEventListener("vulnexa_auth_change", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Close menus on path changes
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    clearAuth();
    setUser(null);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    router.push("/");
    router.refresh();
  };

  // Smooth scroll handler for anchor links on homepage
  const handleAnchorClick = (e, anchorId) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${anchorId}`);
      }
    }
  };

  // Public Navigation Links (Logged Out)
  const publicNavLinks = [
    { label: "Features", href: "/#features", anchor: "features" },
    { label: "How It Works", href: "/#how-it-works", anchor: "how-it-works" },
    { label: "Threat Library", href: "/owasp" },
    { label: "About Us", href: "/#about-us", anchor: "about-us" },
  ];

  // Authenticated Application Navigation Links (Logged In)
  const authNavLinks = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Scanner", href: "/scan", icon: ScanSearch },
    { label: "Reports", href: "/report", icon: FileText },
    { label: "AI Assistant", href: "/assistant", icon: Sparkles },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-4 h-4 bg-white rotate-45 transition-transform group-hover:rotate-90 duration-300" />
          <span className="font-medium tracking-wide text-white">vulNexa</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {user ? (
            // Logged-in / Authenticated Navigation Links
            authNavLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/report" && pathname.startsWith("/report")) ||
                (item.href === "/scan" && pathname.startsWith("/scanner"));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition duration-150 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })
          ) : (
            // Public Navigation Links
            publicNavLinks.map((item) => {
              const isActive = item.href === pathname;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => item.anchor && handleAnchorClick(e, item.anchor)}
                  className={`transition duration-150 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })
          )}
        </nav>

        {/* Right Action / Auth Area */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              {/* User Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  id="user-avatar-button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl border transition text-xs font-medium cursor-pointer ${
                    dropdownOpen || pathname === "/profile"
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {user.profileImageUrl ? (
                    <img
                      src={user.profileImageUrl}
                      alt={user.name || "Profile"}
                      className="w-6 h-6 rounded-full object-cover border border-white/20"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-white text-black text-[11px] font-bold flex items-center justify-center uppercase">
                      {user.name ? user.name.charAt(0) : <User size={13} />}
                    </div>
                  )}

                  <span className="truncate max-w-[120px]">
                    {user.name || "Account"}
                  </span>
                  <ChevronDown
                    size={13}
                    className={`text-zinc-400 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-2xl p-1.5 z-50 text-xs">
                    {/* User summary header */}
                    <div className="px-3 py-2.5 border-b border-white/10 mb-1">
                      <p className="font-semibold text-white truncate">
                        {user.name || "Security Auditor"}
                      </p>
                      <p className="text-[11px] text-zinc-400 font-mono truncate mt-0.5">
                        {user.email}
                      </p>
                    </div>

                    {/* Profile Link */}
                    <Link
                      href="/profile"
                      onClick={() => setDropdownOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition ${
                        pathname === "/profile"
                          ? "bg-white/10 text-white"
                          : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      <User size={14} className="text-zinc-400" />
                      <span>Profile</span>
                    </Link>

                    {/* Scan History Link */}
                    <Link
                      href="/profile#scan-history"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/[0.05] transition"
                    >
                      <History size={14} className="text-zinc-400" />
                      <span>Scan History</span>
                    </Link>

                    {/* Threat Library */}
                    <Link
                      href="/owasp"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/[0.05] transition"
                    >
                      <BookOpen size={14} className="text-zinc-400" />
                      <span>Threat Library</span>
                    </Link>

                    <div className="border-t border-white/10 my-1" />

                    {/* Logout Button */}
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/[0.08] transition text-left cursor-pointer"
                    >
                      <LogOut size={14} className="text-zinc-400" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Primary New Scan CTA */}
              <Link
                href="/scan"
                className="px-4 py-1.5 bg-white text-black hover:bg-zinc-200 rounded-xl text-xs font-medium transition"
              >
                New Scan
              </Link>
            </>
          ) : (
            // Public Navigation Buttons (Log In & Get Started)
            <>
              <Link
                href="/Login"
                className="px-4 py-1.5 border border-white/20 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:border-white/50 bg-white/[0.02] hover:bg-white/[0.08] transition cursor-pointer"
              >
                Log In
              </Link>
              <Link
                href="/Signup"
                className="px-4 py-1.5 bg-white text-black hover:bg-zinc-200 rounded-xl text-xs font-medium transition cursor-pointer shadow-sm"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white md:hidden transition"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-black/95 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm">
            {user ? (
              // Authenticated mobile navigation
              <>
                {authNavLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-1.5 flex items-center gap-2.5 transition ${
                      pathname === item.href
                        ? "text-white font-medium"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <item.icon size={16} className="text-zinc-400" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                <Link
                  href="/owasp"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 flex items-center gap-2.5 transition ${
                    pathname === "/owasp"
                      ? "text-white font-medium"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <BookOpen size={16} className="text-zinc-400" />
                  <span>Threat Library</span>
                </Link>
              </>
            ) : (
              // Public mobile navigation
              publicNavLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.anchor) handleAnchorClick(e, item.anchor);
                    else setMobileMenuOpen(false);
                  }}
                  className={`py-1.5 transition ${
                    pathname === item.href
                      ? "text-white font-medium"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))
            )}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            {user ? (
              <>
                <div className="flex items-center gap-3 py-2 text-sm text-zinc-200">
                  {user.profileImageUrl ? (
                    <img
                      src={user.profileImageUrl}
                      alt={user.name || "Profile"}
                      className="w-8 h-8 rounded-full object-cover border border-white/20"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center uppercase">
                      {user.name ? user.name.charAt(0) : "U"}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-medium text-white truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-zinc-500 font-mono truncate">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-1">
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-2 border border-white/10 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-white/5 transition"
                  >
                    <User size={14} />
                    <span>Profile</span>
                  </Link>

                  <Link
                    href="/profile#scan-history"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-2 border border-white/10 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-white/5 transition"
                  >
                    <History size={14} />
                    <span>History</span>
                  </Link>
                </div>

                <Link
                  href="/scan"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 bg-white text-black rounded-xl text-xs font-medium mt-1 hover:bg-zinc-200 transition"
                >
                  Start Scan
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2 text-xs text-zinc-400 hover:text-white transition cursor-pointer"
                >
                  <LogOut size={14} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/Login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2 border border-white/20 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition"
                >
                  Log In
                </Link>
                <Link
                  href="/Signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2 bg-white text-black rounded-xl text-xs font-medium hover:bg-zinc-200 transition"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
