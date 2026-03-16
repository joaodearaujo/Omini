import Nav from "./components/Nav"

const Sidebar = () => {

    return (
        <div className="flex-1 max-w-3xs flex-col items-center ">
            <div className="w-full mt-8 flex items-center justify-center">
                <a className="text-center text-[#404040] font-bold text-[54px]">Omini</a>
            </div>

            <Nav/>
        </div>
    )
}
        
export default Sidebar