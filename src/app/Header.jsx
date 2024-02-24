"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { nav_items } from "@/constants";
import Link from "next/link";
import { FaUserGroup } from "react-icons/fa6";


export default function Header() {
  const path = usePathname();
  return (
    <nav className="flex justify-between items-center h-24 px-24 bg-black text-slate-500 shadow-slate-500">
      <div className="flex items-center">
        <img src="/1.png" alt="Forum" className="h-16 mr-4" />
        <span className="text-2xl satisfy font-bold capitalise">Forum</span>
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
      <Link href="/login" className="">
        <FaUserGroup size={36} className="border-2 rounded-full text-white" />
      </Link>
    </nav>
  );
}
