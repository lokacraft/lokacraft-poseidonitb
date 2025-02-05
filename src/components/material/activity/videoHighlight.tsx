import React from 'react'

function VideoHighlight() {
  return (
      <div id="highlight" className="mt-20 w-[90%] mx-auto flex flex-col gap-y-6 lg:gap-y-8 items-center z-10">
      <h1 className="text-3xl z-20 font-semibold leading-[50px]">
        <span className="italic">
          Highlight Kegiatan POSEIDON 2024
        </span> 
      </h1>
      <div className="flex flex-col w-[80%] mx-auto items-center gap-y-5">
            {/* day 1 */}
            <div className="w-full h-[480px] rounded-lg">
            <video
          controls
          playsInline
          className="w-full h-full object-cover rounded-xl"
          poster="https://res.cloudinary.com/dxfvm5vwo/image/upload/v1738738591/LOKACRAFT-POSEIDON/HighlightVideo/yawxe2ygai4idn6phqrf.jpg"
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/ahawallet-ec31c.appspot.com/o/VideoPoseidon.mp4?alt=media&token=984e376d-9f17-44da-8e2b-d95f4dd84c04"
            type="video/mp4"
          />
                      </video>
            </div>
            {/* day 2 */}
            <div className="w-full h-[480px] rounded-lg">
            <video
          controls
          playsInline
          className="w-full h-full object-cover rounded-xl"
          poster="https://res.cloudinary.com/dxfvm5vwo/image/upload/v1738738591/LOKACRAFT-POSEIDON/HighlightVideo/xhkq6ytotxdlysad6p8q.jpg"
          >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/ahawallet-ec31c.appspot.com/o/VideoPoseidon.mp4?alt=media&token=984e376d-9f17-44da-8e2b-d95f4dd84c04"
            type="video/mp4"
          />
                      </video>
            </div>
      </div>
      
    </div>
  )
}

export default VideoHighlight