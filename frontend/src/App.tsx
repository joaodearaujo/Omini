import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import Outlet from "./components/Outlet/Outlet"
import Overview from "./pages/Overview/Overview"

function App() {

  return (
  <div className="bg-white w-full h-screen items-center justify-center flex">
      <Sidebar/>
      <main className="w-full h-full flex items-center flex flex-col py-4 gap-6">
        <Header/>
        <Outlet>
          <Overview/>
        </Outlet>
      </main>
  </div>
  )
}

export default App
