import './App.css';

import DropdownMenu from "./DropdownMenu.js"

function App() {

  const items_single_title = "Intelligent Search APIs";
  const items_single = [
    {displayText: "Web Search", value:""},
    {displayText: "Custom Search", value:""},
    {displayText: "Copyright Search", value:""},
    {displayText: "NFT Search", value:""},
    {displayText: "Contextual Search", value:""},
  ];

  const items_multi_title = "Content Tagging APIs";
  const items_multi = [
    {displayText: "Visual Moderation", value:""},
    {displayText: "Text Moderation", value:""},
    {displayText: "Audio Moderation", value:""},
    {displayText: "Demographic", value:""},
    {displayText: "Logo & Logo Location", value:""},
    {displayText: "Visual Context", value:""},
    {displayText: "OCR", value:""},
    {displayText: "Speech-to-Text", value:""},
    {displayText: "Translation", value:""},
    {displayText: "AI-Generated Media Recognition", value:""},
  ];

  return (
    <div className="App">
      <header className="App-header">
      </header>
      
      <div className="use-cases">
        <div class="column"><DropdownMenu itemsTitle={items_single_title} items={items_single} isMulti={false} /></div>
        <div class="column"><DropdownMenu itemsTitle={items_multi_title} items={items_multi} isMulti={true} /></div>
      </div>
      
    </div>
  );
}

export default App;
