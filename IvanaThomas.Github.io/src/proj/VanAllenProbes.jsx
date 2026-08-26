import AGU25_POSTER from "../assets/AGU25_POSTER.jpg";
import {useState} from "react";
import './ProjectDetails.css';

function VanAllenProbes() {
    const [isImageOpen, setIsImageOpen] = useState(false);
    return (
        <div className = "project-page">
            <h1>Analysis of Chorus Waves nearthe Kennel-Petscheck Limit</h1>

            <div className = "project-img-container">
                <img src={AGU25_POSTER}
                alt = "AGU 2025 Poster Presentation"
                className = "project-image"
                onClick = {() => setIsImageOpen(true)} />
            </div>

            {isImageOpen && (
                <div
                    className="image-overlay"
                    onClick={() => setIsImageOpen(false)}
                >
                    <img
                        src={AGU25_POSTER}
                        alt="Van Allen Probes research presented at AGU 2025"
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

export default VanAllenProbes;
