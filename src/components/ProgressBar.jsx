import React from 'react'

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="relative w-full h-12">
      <div className="absolute top-1/4 left-0 transform -translate-y-1/2 w-full h-1 bg-[#006198]"></div>
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative w-6 h-6 items-center flex rounded-full ${
              index < currentStep ? 'bg-[#006198]' : 'bg-gray-300'
            }`}
          >
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
