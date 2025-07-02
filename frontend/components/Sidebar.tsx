"use client";

import { useState } from "react";

export default function Sidebar() {

    const [open, setOpen] = useState(true);


  return (
    <nav className="shadow-md h-screen w-60 p-2 border-r">
        {/* Header */}
        <div className="border px-3 py-2 h-20">
            <img src="logo.png" alt="Logo"  className="w-10 rounded-md"/>

        </div>
    </nav>
  );
}
