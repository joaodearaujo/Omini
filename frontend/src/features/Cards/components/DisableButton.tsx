const STYLE = { 
  wrapper: 'w-full flex-1 flex items-center justify-end',
  button: 'py-2 px-3 rounded-2xl bg-gray-100 border-none text-[#404040] hover:shadow-sm text-[12px] font-medium cursor-pointer transition duration-400 ease-in-out'
}

const DisableButton = () => {
  return (
    <div className={STYLE.wrapper}>
        <button className={STYLE.button}>
            Deactivate Card
        </button>
    </div>
  )
}

export default DisableButton
