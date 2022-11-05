import React from 'react'
import '../VideoRow.css'
export default function VideoRow({image,subs,description, title, channel, views, timestamp }) {
    return (
        <div className='videoRow'>
            <img src={image} alt="" />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className='video_headline'>
                    {channel} - {subs} Subcribers {views} views - {timestamp}
                </p>
                <p className='videoRow_description'>
                    {description}
                </p>
            </div>
        </div>
    )
}
