import Nav from "./components/Nav"

const Sidebar = () => {

    return (
        <div className="h-full w-3xs border-r-1 border-[#c7c7c7]/40 flex flex-col items-center ">
            <div className="w-full m-8 flex items-center justify-center">
                <a className="text-center  font-bold text-[54px]">Omini</a>
            </div>

            <Nav/>
        </div>
    )
}
        
export default Sidebar