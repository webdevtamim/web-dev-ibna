import { useEffect, useState } from "react";

const VideoReviews = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('videoReviews.json')
            .then(res => res.json())
            .then(data => setVideos(data))
    }, [])

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {
                videos.map(video => (
                    <div key={video.id}>
                        <iframe
                            className="w-full lg:h-[20vw] md:h-[30vw] h-[50vw]"
                            src={video.link}
                            title={`Video ${video.id}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    </div>
                ))
            }
        </div>
    );
};

export default VideoReviews;