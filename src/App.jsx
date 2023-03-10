import "./App.css";
import PastSpeakerSection from "./SpeakerSection/pastSpeakers/PastSpeakerSection";
import SpeakerSection from "./SpeakerSection/speaker/SpeakerSection";
import Clock from "./timer";

function App() {
  return (
    <div className="App bg-[#333]">
      <SpeakerSection></SpeakerSection>
      <PastSpeakerSection></PastSpeakerSection>
      <Clock />
    </div>
  );
}

export default App;
