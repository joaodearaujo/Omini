import type { OutletProps } from "./Outlet.type"

const Outlet = ({ children }: OutletProps) => {
  return (
    <section className="w-full h-full flex justify-center items-center px-6 ">
      {children}
    </section>
  )
}

export default Outlet
