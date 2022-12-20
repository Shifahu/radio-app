import React, { useState } from 'react';

function App() {
  const [selectedRadio, setSelectedRadio] = useState(null);

  // Define the list of radio stations
  const radioStations = [
    { name: '80\'s RnB', url: 'http://listen.181fm.com/181-80srnb_128k.mp3' },
    { name: 'The Beat (HipHop/R&B)', url: 'http://listen.181fm.com/181-beat_128k.mp3' },
    { name: 'True R&B', url: 'http://listen.181fm.com/181-rnb_128k.mp3' },
    { name: 'Soul', url: 'http://listen.181fm.com/181-soul_128k.mp3' }
  ];

  function handleRadioSelection(e) {
    const selectedRadio = radioStations.find(radio => radio.name === e.target.value);
    setSelectedRadio(selectedRadio);
  }
  function handleNextButtonClick() {
    const currentIndex = radioStations.findIndex(radio => radio.name === selectedRadio.name);
    const nextIndex = (currentIndex + 1) % radioStations.length;
    setSelectedRadio(radioStations[nextIndex]);
  }

  function handleBackButtonClick() {
    const currentIndex = radioStations.findIndex(radio => radio.name === selectedRadio.name);
    let previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
      previousIndex = radioStations.length - 1;
    }
    setSelectedRadio(radioStations[previousIndex]);
  }


  return (
    <div className="App">
      <h1>FM Radio</h1>
      <p>Select a radio station:</p>
      <select onChange={handleRadioSelection}>
        {radioStations.map(radio => (
          <option key={radio.name} value={radio.name}>{radio.name}</option>
        ))}
      </select>
      {selectedRadio && (
        <>
          <p>Now playing: {selectedRadio.name}</p>
          <audio controls src={selectedRadio.url} />
        </>
      )}
      <button onClick={handleNextButtonClick}>Next</button>
      <button onClick={handleBackButtonClick}>Back</button>

    </div>
  );
}

export default App;
