import React from 'react'

const DisableButton = () => {
  return (
    <div className='w-full flex-1 flex items-center justify-end'>
        <button className='py-2 px-3 rounded-2xl bg-gray-100 border-1 border-black/10 hover:shadow-sm text-[12px] font-semibold cursor-pointer transition display-400 ease-in-out'>
            Deactivate Card
        </button>
    </div>
  )
}

export default DisableButton
