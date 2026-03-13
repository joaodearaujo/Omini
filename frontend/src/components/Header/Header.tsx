import { Mail, Bell, BellDot, CircleUserRound } from 'lucide-react';
import type { ButtonProps } from './Header.type';

const headerButtons: Array<ButtonProps> = [
    {icon: Mail, name: 'mail-button', size: 28},
    {icon: Bell, name: 'notifications-button', size: 28},
    {icon: CircleUserRound, name: 'profile-button', size: 42},
]

const Header = () => {

    const notification: boolean = true;

    return (
        <header className="w-fulls h-[130px] flex justify-between items-center px-4 mx-4 rounded-3xl border-1 border-black/10 ">
            <div className='h-full flex items-start justify-center flex-col'>
                <h1 className="text-[#404040] text-[46px] font-semibold ">Weekly sumup</h1>
                <p className="text-[#AEAEAE] -text-[16px]">Get summary of your weekly online transactions here.</p>
            </div>

            <div className='h-full flex items-center'>
                <div className='flex flex-1 items-center justify-center gap-6' >
                    {headerButtons.map((button) => {
                        const Icon = button.icon
                        if (notification && button.name === 'notifications-button') {
                    
                            button.icon = BellDot;
                        }
                        return (
                            <button className='cursor-pointer transition duration-400 ease-in-out hover:-translate-y-1'
                                key={button.name}
                                >
                                <Icon size={button.size} className='text-[#c7c7c7] hover:text-[#197BBD] transition-colors'></Icon>
                            </button>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header; 