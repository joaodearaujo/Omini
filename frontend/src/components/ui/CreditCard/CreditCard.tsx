
const CreditCard = () => {
  return (
        <div className="w-[400px] h-[250px] rounded-4xl bg-linear-to-r shadow-md from-[#197BBD] to-[#3391D0] flex flex-col items-start justify-around px-6 py-4 transition ease-in-out display-400 hover:scale-101 text-white">
            <div>
                <h1 className="font-semibold ">Nubank</h1>
                <p className="text-[12px] opca">PREMIUM ACCOUNT</p>
            </div>
            <h1 className="text-[32px] font-semibold">0000 000 0000 0000</h1>
            <div className="w-full grid grid-cols-4 gap-4">
                <div className="cols-span-2">
                    <p className="text-nowrap text-[12px] opacity-70 uppercase tracking-wider font-medium">Card Holder</p>
                    <p className="text-[18px] font-medium">Name</p>
                </div>
                <div className="cols-span-2">
                    <p className="text-nowrap text-[12px] opacity-70 uppercase tracking-wider font-medium">Expirate Date</p>
                    <p className="text-[18px] font-medium">07/24</p>
                </div>
            </div>
        </div>
  )
}

export default CreditCard
