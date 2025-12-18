"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION, type NavigationItem } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12" aria-label="Main navigation">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-base sm:text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm min-h-[44px] min-w-[44px] flex items-center"
            >
              Mariselvam
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-1">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 sm:px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm min-h-[44px] flex items-center ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-x-0 -bottom-px h-px bg-foreground"
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center">
            <MobileMenu navigation={NAVIGATION} pathname={pathname} />
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({
  navigation,
  pathname,
}: {
  navigation: readonly NavigationItem[];
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-sm text-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="w-5 h-5 flex flex-col justify-center gap-1.5"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }}
            className="w-full h-px bg-current rounded-full"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-full h-px bg-current rounded-full"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 },
            }}
            className="w-full h-px bg-current rounded-full"
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 sm:top-20 left-0 right-0 bg-background z-50 border-b border-border"
            >
              <div className="container mx-auto px-4 sm:px-6 py-4 space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm min-h-[44px] flex items-center ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

