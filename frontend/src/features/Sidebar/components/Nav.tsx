import type { navLinksProps } from "../Sidebar.type";

import { 
  LayoutDashboard, 
  ArrowRightLeft, 
  CreditCard, 
  Target, 
  Settings 
} from "lucide-react";

const STYLE = { 
    nav: 'flex flex-col items-center mt-22 w-full',
    link: 'w-full flex items-center justify-start rounded-lg  bg-white text-[#c7c7c7] hover:bg-[#F0F7FF] hover:text-[#197BBD] transition-all duration-600 ease-in-out p-4 gap-4',
    icon: 'group-hover:text-[#197BBD] transition-colors',
    span: 'text-center font-[500] text-[16px]'
}

const Nav = () => {

     const navLinks: navLinksProps[] = [
        {name:'Overview', href:'#', icon: LayoutDashboard},
        {name:'My cards', href:'#', icon: CreditCard},
        {name:'Transactions', href:'#', icon: ArrowRightLeft},
        {name:'Goals', href:'#', icon: Target},
        {name:'Settings', href:'#', icon: Settings},
    ];
    
    return (
        <nav className={STYLE.nav} >
                <ul className="flex h-full flex-col">
                    {navLinks.map((link) => {
                    
                        const Icon = link.icon;
                        return (
                        <li key={link.name} className="flex items-center w-full h-full">
                            <a  className={STYLE.link}
                                href="link.href"
                                key={link.name}
                            >
                                    <Icon size={28} className={STYLE.icon} />
                                    <span className={STYLE.span}>{link.name}</span>
                            </a>
                        </li>
                        );
                    })}
                </ul>
            </nav>
    )
}

export default Nav;