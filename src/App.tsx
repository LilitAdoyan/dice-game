import UpperSection from "./components/upper-section";
import Popup from "./components/customModal";
import { useState } from "react";




function App() {
  const [showTemplatesPopup,setShowTemplatesPopup]=useState(false)
    const handleCloseModal = () => setShowTemplatesPopup(false);

 return <div className="App">
  <UpperSection/>
  { showTemplatesPopup&&(
        <Popup onModalClose={handleCloseModal}               ShowPopup={showTemplatesPopup}
        />
      )}
 </div>
}

export default App;

