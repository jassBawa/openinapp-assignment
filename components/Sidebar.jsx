"use client";
import useSidebarStore from "../store/sidebarStore";
import {
  BaseLogo,
  CalendarIcon,
  DashboardIcon,
  InvoiceIcon,
  ScheduleIcon,
  UploadIcon,
} from "../assets/icons";
import React from "react";

export function Sidebar() {
  const { isSidebarOpen } = useSidebarStore();

  const sidebarItems = [
    { id: 1, icon: DashboardIcon, label: "Dashboard" },
    { id: 2, icon: UploadIcon, label: "Upload", active: true },
    { id: 3, icon: InvoiceIcon, label: "Invoice" },
    { id: 4, icon: ScheduleIcon, label: "Schedule" },
    { id: 5, icon: CalendarIcon, label: "Calendar" },
    { id: 6, icon: UploadIcon, label: "Settings" },
  ];

  console.log(isSidebarOpen);

  return (
    <div
      className={`absolute -left-full top-0 md:left-0 z-20 transition md:relative md:block bg-white p-4 max-w-56 w-full h-full 
    ${isSidebarOpen ? "left-0 md:block" : ""}
  `}
    >
      <div className=" mt-8 flex gap-2 items-center justify-center mb-6">
        <BaseLogo />
        <span className="font-semibold text-xl">Base</span>
      </div>
      <ul className="mt-8 space-y-4 text-black/40 font-semibold">
        {sidebarItems.map((item) => {
          const { icon: Icon } = item;
          return (
            <li
              key={item.id}
              className={`flex gap-3 items-center p-2 rounded-lg hover:bg-gray-300 cursor-pointer bg-gradient-to-r hover:from-[#ACA9FF] hover:to-transparent ${
                item.active ? "text-[#605BFF]" : ""
              }`}
            >
              <Icon />
              <span className="text-sm">{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
