"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { nav_items } from "@/constants";


export default function Header() {
  const path = usePathname();
  return (
    <nav className="flex justify-between items-center h-24 px-24 bg-black text-slate-500 shadow-slate-500">
      <div className="flex items-center">
        <img src="/gdscSSIU.png" alt="Forum" className="h-64 pt-3" />
        {/*<span className="text-2xl satisfy font-bold capitalise">Forum</span>*/}
      </div>
      <div className="flex items-center gap-10">
        {nav_items.map((link, index) => (
          <a
            href={link.href}
            key={index}
            className={`${path === link.href ? "font-extrabold" : "font-light"} tracking-widest text-lg`}
          >
            {link.label}
          </a>
        ))}
      </div>
      {/*<Link href="/" className="">*/}
      {/*    <img src="/badge.svg" alt="badge" className="h-16 mr-4" />*/}
      {/*  /!*<FaUserGroup size={36} className="border-2 rounded-full text-white" />*!/*/}
      {/*</Link>*/}
    </nav>
  );
}
