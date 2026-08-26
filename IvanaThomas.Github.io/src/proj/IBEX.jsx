import AGU24_POSTER from "../assets/AGU24_POSTER.jpg";
import {useState} from "react";
import './ProjectDetails.css';

function IBEX() {
    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <div className = "project-page">
            <h1>Solar Wind Backscattering from the Moon as Observed by IBEX</h1>

            <div className = "project-img-container">
                <img src = {AGU24_POSTER}
                alt = "AGU 2024 Poster Presentation"
                className = "project-image" 
                onClick = {() => setIsImageOpen(true)} />
            </div>

            {isImageOpen && (
                            <div
                                className="image-overlay"
                                onClick={() => setIsImageOpen(false)}
                            >
                                <img
                                    src={AGU24_POSTER}
                                    alt="IBEX research poster"
                                    className="expanded-image"
                                    onClick={(event) => event.stopPropagation()}
                                />
            
                                <button
                                    className="close-button"
                                    onClick={() => setIsImageOpen(false)}
                                    aria-label="Close image"
                                >
                                    
                                </button>
                            </div>
                        )}
        </div>


    );
};


export default IBEX;