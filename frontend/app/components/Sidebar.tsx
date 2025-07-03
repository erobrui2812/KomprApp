"use client";

import { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoHomeOutline, IoListSharp, IoSettingsOutline } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";

export default function Sidebar() {

    const [open, setOpen] = useState(true);

    const menuItems = [
        {
            icons: <IoHomeOutline size={20} />,
            label:'Inicio'
        },
        {
            icons: <IoListSharp size={20} />,
            label:'Lista'
        },
        {
            icons:<FiMessageSquare size={20} />,
            label:'Mensajes',
            pendingNotifications:98
        },
        {
            icons:<IoSettingsOutline size={20} />,
            label:'Ajustes'
        },
    ];

  return (
    <nav className="shadow-md h-screen w-60 p-2 border-r">
        {/* Header */}
        <div className="border px-3 py-2 h-20 flex justify-between">
            <img src="https://i.redd.it/4judejsfgk9b1.png" alt="Logo"  className="w-10 h-10 border rounded-full" />
            <MdMenuOpen size={30} />
        </div>

        {/* Body */}
        <ul>
            {
                menuItems.map((item,index) => {
                    return (
                        <li key={index} className="my-1 px-4 py-3 hover:bg-gray-600 rounded-md duration-300 cursor-pointer flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div>{item.icons}</div>
                                <p className="font-medium text-lg">{item.label}</p>
                            </div>
                            {item.pendingNotifications > 0 && (
                                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-red-500 text-white text-sm font-bold">
                                    {item.pendingNotifications < 99 ? item.pendingNotifications : "99+"}
                                </div>
                            )}
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  );
}
