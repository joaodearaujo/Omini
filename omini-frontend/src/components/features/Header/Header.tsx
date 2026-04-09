import type { HeaderProps } from './Header.type';
import useFadeIn from '../../../hooks/useFadeIn';


const STYLE = {
    container: 'w-full max-h-[130px] flex justify-between items-center p-4 rounded-3xl border-1 border-black/10 bg-white ',
    title: 'text-[#404040] font-semibold text-[32px]',
    subtitle: 'text-[#AEAEAE] text-[16px] font-light',
}

const Header = ({title, subtitle}: HeaderProps) => { 

    const { isVisible } = useFadeIn()

    return (
        <header className={STYLE.container}>       
            <div className={`h-full flex items-start justify-center flex-col transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0 ' : 'opacity-0 -translate-x-1'}`}>
                <h1 className={STYLE.title}>{title}</h1>
                <p className={STYLE.subtitle}>{subtitle}</p>
            </div>
        </header>
    )
}

export default Header; 