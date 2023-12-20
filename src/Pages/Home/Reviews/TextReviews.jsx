import img1 from '../../../assets/reviews/p1.png';
import img2 from '../../../assets/reviews/p2.png';
import img3 from '../../../assets/reviews/p3.png';
import img4 from '../../../assets/reviews/p4.png';
import img5 from '../../../assets/reviews/p5.png';
import img6 from '../../../assets/reviews/p6.png';
import img7 from '../../../assets/reviews/p7.png';
import img8 from '../../../assets/reviews/p8.png';
import img9 from '../../../assets/reviews/p9.png';
import img from '../../../assets/reviews/p.png';
import { useState } from 'react';
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useRef } from 'react';

const TextReviews = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(100);

    // overflow-scroll
    const [dragging, setDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

    const imageRef = useRef(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
        setZoomLevel(100);
        setImagePosition({ x: 0, y: 0 });
    };

    const handleZoomIn = () => {
        setZoomLevel((prevZoom) => Math.min(prevZoom + 10, 200));
    };

    const handleZoomOut = () => {
        setZoomLevel((prevZoom) => Math.max(prevZoom - 10, 50));
    };

    const handleMouseDown = (e) => {
        setDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            const deltaX = e.clientX - dragStart.x;
            const deltaY = e.clientY - dragStart.y;

            setImagePosition({
                x: imagePosition.x + deltaX,
                y: imagePosition.y + deltaY,
            });

            setDragStart({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <div className="grid sm:grid-cols-2 gap-2 pt-16">
            <div className="space-y-3">
                <img
                    className="w-full hover:brightness-50 duration-500 cursor-pointer"
                    src={img1}
                    alt=""
                    onClick={() => openModal(img1)}
                />
                <img
                    className="w-full hover:brightness-50 duration-500
                    cursor-pointer"
                    src={img2}
                    alt=""
                    onClick={() => openModal(img2)}
                />
                <img
                    className="w-full hover:brightness-50 duration-500
                    cursor-pointer"
                    src={img3}
                    alt=""
                    onClick={() => openModal(img3)}
                />
                <img
                    className="w-full hover:brightness-50 duration-500
                    cursor-pointer"
                    src={img4}
                    alt=""
                    onClick={() => openModal(img4)}
                />
                <img
                    className="w-full hover:brightness-50 duration-500
                    cursor-pointer"
                    src={img5}
                    alt=""
                    onClick={() => openModal(img5)}
                />
            </div>
            <div className="space-y-3">
                <img
                    className="w-full hover:brightness-50 duration-500 cursor-pointer"
                    src={img6}
                    alt=""
                    onClick={() => openModal(img6)}
                />
                <img
                    className="w-full hover:brightness-50 duration-500"
                    src={img7}
                    alt=""
                    onClick={() => openModal(img7)}
                />
                <img
                    className="w-full hover:brightness-50 duration-500"
                    src={img8}
                    alt=""
                    onClick={() => openModal(img8)}
                />
                <img
                    className="w-full hover:brightness-50 duration-500"
                    src={img9}
                    alt=""
                    onClick={() => openModal(img9)}
                />
                <img
                    className="w-full hover:brightness-50 duration-500"
                    src={img}
                    alt=""
                    onClick={() => openModal(img)}
                />
            </div>

            {modalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-[#000000b3] z-50"
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <div
                        className="max-w-screen-lg p-4 bg-transparent rounded-md"
                        onMouseDown={handleMouseDown}
                    >
                        <img
                            ref={imageRef}
                            className="w-full"
                            src={selectedImage}
                            alt=""
                            style={{
                                transform: `scale(${zoomLevel / 100})`,
                                position: 'relative',
                                left: `${imagePosition.x}px`,
                                top: `${imagePosition.y}px`,
                            }}
                        />
                        <div className="absolute top-4 right-4 text-white text-2xl rounded-md space-x-10">
                            <button
                                className=""
                                onClick={handleZoomIn}
                            >
                                <BsZoomIn />
                            </button>
                            <button
                                className=""
                                onClick={handleZoomOut}
                            >
                                <BsZoomOut />
                            </button>
                            <button
                                className=""
                                onClick={closeModal}
                            >
                                <RxCross1 />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TextReviews;