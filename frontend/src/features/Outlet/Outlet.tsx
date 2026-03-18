import type { OutletProps } from "./Outlet.type"

const Outlet = ({ children }: OutletProps) => {
  
  return (
    <main className="w-full h-full flex justify-center items-center">
      {children}
    </main>
  )
}

export default Outlet
