import { CircleUserRound} from 'lucide-react';

const STYLE = {
    container: 'w-full min-h-[130px] flex justify-between items-center px-6 rounded-3xl border-1 border-black/10',
    title: 'text-[#404040] text-[46px] font-semibold',
    subtitle: 'text-[#AEAEAE] -text-[16px]',
}

const title = 'Weekly sumup'
const subtitle = 'Get summary of your weekly online transactions here.'

const Header = () => { 

    const Icon = CircleUserRound;

    return (
        <header className={STYLE.container}>

            <div className='h-full flex items-start justify-center flex-col'>
                <h1 className={STYLE.title}>{title}</h1>
                <p className={STYLE.subtitle}>{subtitle}</p>
            </div>

            <div className='h-full flex items-center'>
                <button className='cursor-pointer transition duration-400 ease-in-out hover:-translate-y-1'>
                    <Icon size={50} className='text-[#c7c7c7] hover:text-[#197BBD] transition-colors'></Icon>
                </button>
            </div>
        </header>
    )
}

export default Header; 