import Nav from "./components/Nav"

const STYLE = {
    container: 'h-full w-[320px] flex-col items-center px-4 bg-white border-1 border-black/10',
    logoWrapper: 'w-full mt-8 flex items-center justify-center',
    linkLogo: 'text-center text-primary font-bold text-[54px]',
}

const Sidebar = () => {
    return (
        <aside className={STYLE.container}>
            <header className={STYLE.logoWrapper}>
                <a className={STYLE.linkLogo}>Omini</a>
            </header>
            
            <Nav/>
        </aside>
    )
}
        
export default Sidebar