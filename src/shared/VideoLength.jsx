import React from 'react'
import moment from 'moment/moment'

const VideoLength = ({ time }) => {

    const video_Length = moment()
        .startOf("day")
        .seconds(time)
      
      let videoLengthFormatted = '';

      (video_Length.hours() === 0) ? videoLengthFormatted = video_Length.format('m:ss') : videoLengthFormatted = video_Length.format('H:mm:ss');

  return (
    <div className='absolute bottom-2 right-2 bg-black py-1 px-1 text-white text-xs rounded-md'>
        {videoLengthFormatted}
    </div>
  )
}

export default VideoLength
