import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useRouter } from 'next/router';

const AppCarousel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('frequently'); // State to track active button
  const apps = [
    { name: 'YouTube', icon: 'images_pop/Group 4569.svg' },
    { name: 'Google', icon: 'images_pop/Group 427319032.svg' },
    { name: 'Google Maps', icon: 'images_pop/Group 427319033.svg' },
    { name: 'Spotify', icon: 'images_pop/Vector (10).svg' },
    { name: 'Chess', icon: 'images_pop/Vector (11).svg' },
    { name: 'YouTube Music', icon: 'images_pop/Group 427319019.svg' },
    { name: 'Play Store', icon: 'images_pop/Vector (12).svg' },
    { name: 'Tetris', icon: 'images_pop/Vector (13).svg' },
    { name: 'Native Maps', icon: 'images_pop/Vector (14).svg' },
    { name: 'Phone', icon: 'images_pop/Vector (15).svg' },
    { name: 'Netflix', icon: 'images_pop/Vector (16).svg' },
    { name: 'Calculator', icon: 'images_pop/Vector (17).svg' },
    { name: 'Assistant', icon: 'images_pop/Assistant.svg', link: '/AI' },
  ];

  const handleAppClick = (app: { name: string; icon: string; link?: string }) => {
    if (app.link) {
      router.push(app.link);
    }
  };

  const carouselItems = apps.map((app, index) => (
    <div className="app-icon" key={index} onClick={() => handleAppClick(app)}>
      <img src={app.icon} alt={`${app.name} icon`} />
      <span>{app.name}</span>
    </div>
  ));

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div className="app-carousel-container">
      <div className="app-carousel">
        <div className="app-carousel-content">
          <button className="close-button" onClick={onClose}>&times;</button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <div className="search-bar">
  <input type="text" placeholder="Search for app or command" />
  <button className="search-button">
    <img src="/images_pop/Group 427318951.svg" alt="Search" />
  </button>
</div>

          <div className="button-container">
            <button 
              className={`app-button ${activeButton === 'frequently' ? 'active' : ''}`}
              onClick={() => handleButtonClick('frequently')}
            >
              Frequently Used
            </button>
            <button 
              className={`app-button ${activeButton === 'all' ? 'active' : ''}`}
              onClick={() => handleButtonClick('all')}
            >
              All Apps
            </button>
            <br></br>
            
            
            
          </div>
          <AliceCarousel
            mouseTracking
            items={carouselItems}
            responsive={{
              0: { items: 2 },
              568: { items: 3 },
              1024: { items: 5 },
            }}
            controlsStrategy="alternate"
          />
        </div>
      </div>
    </div>
  );
};

export default AppCarousel;
