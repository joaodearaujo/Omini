import type { LinkProps } from "../Sidebar.type";

import { 
  LayoutDashboard, 
  ArrowRightLeft, 
  CreditCard, 
  Target, 
  Settings 
} from "lucide-react";

const Nav = () => {

     const navLinks: Array<LinkProps> = [
        {name:'Overview', href:'#', icon: LayoutDashboard},
        {name:'Transactions', href:'#', icon: ArrowRightLeft},
        {name:'Cards', href:'#', icon: CreditCard},
        {name:'Goals', href:'#', icon: Target},
        {name:'Settings', href:'#', icon: Settings},
    ];
    
    return (
        <nav className="flex flex-col items-center mt-22 w-full" >
                <ul className="flex h-full flex-col">
                    {navLinks.map((link) => {
                    
                        const Icon = link.icon;
                        return (
                        <li className="flex items-center w-full h-full">
                            <a  className="w-full flex items-center justify-start rounded-lg  bg-white text-[#c7c7c7] hover:bg-[#F0F7FF] hover:text-[#197BBD] transition-all duration-600 ease-in-out p-4 gap-4"
                                href="link.href"
                                key={link.name}
                            >
                                    <Icon size={28} className="group-hover:text-[#197BBD] transition-colors" />
                                    <span className="text-center font-[500] text-[16px]">{link.name}</span>
                            </a>
                        </li>
                        );
                    })}
                </ul>
            </nav>
    )
}

export default Nav;