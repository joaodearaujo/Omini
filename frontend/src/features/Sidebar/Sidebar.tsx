import Nav from "./components/Nav"

const STYLE = {
    container: 'h-full w-[320px] flex-col items-center px-4 bg-white border-1 border-black/10',
    logoWrapper: 'w-full mt-8 flex items-center justify-center',
    linkLogo: 'text-center text-[#404040] font-bold text-[54px]',
}

const Sidebar = () => {

    return (
        <div className={STYLE.container}>
            <div className={STYLE.logoWrapper}>
                <a className={STYLE.linkLogo}>Omini</a>
            </div>
                <Nav/>
        </div>
    )
}
        
export default Sidebar