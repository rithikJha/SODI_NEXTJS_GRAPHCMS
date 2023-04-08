import React from 'react';

const TextToSpeech = ({msg}) => {
  const handleTextToSpeech = () => {
    
    const speechSynthesis = window.speechSynthesis;
    if (!speechSynthesis) {
        alert("Sorry, your browser doesn't support text to speech!");
        return;
    }
    const utterance = new SpeechSynthesisUtterance(); // Text to be spoken
    utterance.text = msg;
    utterance.rate = 1.1;
    utterance.pitch = 1.2;
    utterance.volume = 0.8;
    /*utterance.voice = speechSynthesis.getVoices().filter(function(voice) {
    return voice.name == "Microsoft Zira Desktop - English (United States)"

        })[0];*/
    speechSynthesis.speak(utterance); // Speak the text
  };

  return (
    <div>
      <h1>Text-to-Speech Example</h1>
      <button onClick={handleTextToSpeech}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
