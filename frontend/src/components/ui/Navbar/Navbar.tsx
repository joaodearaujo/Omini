import type { LinkProps } from "./Navbar.type";

import { 
  LayoutDashboard, 
  ArrowRightLeft, 
  CreditCard, 
  Target, 
  Settings 
} from "lucide-react";

const Navbar = () => {

     const navLinks: Array<LinkProps> = [
        {name:'Overview', href:'#', icon: LayoutDashboard},
        {name:'Transactions', href:'#', icon: ArrowRightLeft},
        {name:'Cards', href:'#', icon: CreditCard},
        {name:'Goals', href:'#', icon: Target},
        {name:'Settings', href:'#', icon: Settings},
    ];
    
    return (
        <nav className="flex flex-col items-center gap-2 mt-22 w-[90%] p-2" >
                {navLinks.map((link) => {
                    
                    const Icon = link.icon;

                    return (
                    <a  className="w-[175px] h-[49px] flex items-center justify-start rounded-lg bg-white text-[#c7c7c7] hover:bg-[#F0F7FF] hover:text-[#197BBD] transition-all duration-600 ease-in-out p-4"
                        href="link.href"
                        key={link.name} 
                    >   
                        <div className=" flex items-center gap-2">
                            <Icon size={24} className="group-hover:text-[#197BBD] transition-colors" />
                            <span className="text-center font-semibold text-[16px]">{link.name}</span>
                        </div>
                    </a>
                    );
                })} 
            </nav>
    )
}

export default Navbar;