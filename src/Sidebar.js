import React from "react";
import { FaFire, FaPoo } from "react-icons/fa";
import { BsPlus, BsFillLightningFill } from "react-icons/bs";
const SidebarComponent = ({ icon, text = "tooltip" }) => {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    );
};

export default function Sidebar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow">
            <SidebarComponent icon={<FaFire size="28" />} />
            <SidebarComponent icon={<BsPlus size="32" />} />
            <SidebarComponent icon={<BsFillLightningFill size="20" />} />
            <SidebarComponent icon={<FaPoo size="20" />} />
        </div>
    );
}
