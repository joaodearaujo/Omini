import Sidebar from "./features/Sidebar/Sidebar"
import Header from "./features/Header/Header"
import Outlet from "./features/Outlet/Outlet"
import Overview from "./pages/Overview/Overview"

function App() {

  return (
  <div className="bg-white w-full h-screen flex ">                   
      <Sidebar/>

      <div className="h-full flex-1 flex-col gap-4 p-4 flex bg-blue " >
        <Header/>

        <main className="w-full flex-1 flex flex-col justify-between">
          <Outlet>
            <Overview/>
          </Outlet>
        </main>
      </div>

  </div>
  )
}

export default App
