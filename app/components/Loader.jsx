import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2" 
           style={{ borderTopColor: '#936DFF', borderBottomColor: '#936DFF' }}>
      </div>
    </div>
  )
}

export default Loader
