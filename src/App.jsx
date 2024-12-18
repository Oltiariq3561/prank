import React, { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNoClicked, setIsNoClicked] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });

  const handleYesClick = () => {
    // Onlayn URL orqali baqiriq ovozi
    const screamAudio = new Audio('https://www.soundjay.com/button/beep-07.wav'); // Onlayn URL
    screamAudio.play();

    setIsModalOpen(true);
  };

  const handleNoClick = () => {
    setIsNoClicked(true);
  };

  const handleMouseEnter = () => {
    const randomX = Math.random() * 90;  // 0-90% orasida
    const randomY = Math.random() * 90;  // 0-90% orasida
    setButtonPosition({ top: `${randomY}%`, left: `${randomX}%` });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative h-screen overflow-hidden flex justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Sen geymisan?</h1>
      <button 
        onClick={handleYesClick} 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Ha
      </button>
      <button
        onClick={handleNoClick}
        onMouseEnter={handleMouseEnter}
        style={{
          position: 'absolute',
          top: buttonPosition.top,
          left: buttonPosition.left,
          transition: 'top 0.5s, left 0.5s',
        }}
        className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
      >
        Yo'q
      </button>

      {isModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
            <p className="text-xl font-semibold">Bilardim sen sen Geysan 🗿😂</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
