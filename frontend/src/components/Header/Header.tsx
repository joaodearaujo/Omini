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
        <div className="w-[95%] h-[130px] flex justify-between items-center mb-4">
            <div>
                <h1 className="text-[#404040] text-[55px] font-semibold">Weekly sumup</h1>
                <p className="text-[#AEAEAE] -text-[16px]">Get summary of your weekly online transactions here.</p>
            </div>

            <div className='flex items-center p-2 gap-6'>
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
    )
}

export default Header; 