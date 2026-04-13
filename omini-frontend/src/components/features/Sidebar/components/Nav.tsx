import type { navLinksProps } from "../Sidebar.type";
import { Link } from "react-router";

import { 
  LayoutDashboard, 
  ArrowRightLeft, 
  CreditCard, 
  Goal, 
  Settings, 
} from "lucide-react";

const STYLE = { 
    nav: 'flex flex-col items-center mt-22 w-full',
    link: 'w-full flex items-center justify-start rounded-lg bg-white text-link hover:bg-link-bgHover hover:text-link-hover transition-all duration-300 ease-in-out p-4 gap-4',
    icon: 'group-hover:text-link transition-colors',
    span: 'text-center text-small font-[500]'
}
    const navLinks: navLinksProps[] = [
    {name:'Overview', to:'', icon: LayoutDashboard},
    {name:'Cards', to:'mycards', icon: CreditCard},
    {name:'Transactions', to:'transactions', icon: ArrowRightLeft},
    {name:'Goals', to:'goals', icon: Goal},
    {name:'Settings', to:'settings', icon: Settings},
];

const Nav = () => {  
    return (
        <nav className={STYLE.nav} >
            <ul className="flex h-full flex-col">
                {navLinks.map((link) => {
                
                    const Icon = link.icon;
                    
                    return (
                    <li key={link.name} className="flex items-center w-full h-full">
                        <Link to={`/${link.to}`} className={STYLE.link}
                            key={link.name}
                        >
                                <Icon size={28} className={STYLE.icon} />
                                <span className={STYLE.span}>{link.name}</span>
                        </Link>
                    </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Nav;