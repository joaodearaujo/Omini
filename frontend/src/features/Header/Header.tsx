import type { HeaderProps } from './Header.type';


const STYLE = {
    container: 'w-full max-h-[130px] flex justify-between items-center p-4 rounded-3xl shadow-xs border-1 border-black/10 bg-white',
    title: 'text-[#404040] font-semibold text-[32px]',
    subtitle: 'text-[#AEAEAE] text-[16px] font-light',
}

const Header = ({title, subtitle}: HeaderProps) => { 

    return (
        <header className={STYLE.container}>
                
            <div className='h-full flex items-start justify-center flex-col'>
                <h1 className={STYLE.title}>{title}</h1>
                <span className={STYLE.subtitle}>{subtitle}</span>
            </div>
        </header>
    )
}

export default Header; 