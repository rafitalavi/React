import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton/TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples(){
    const [selectedTopic, setSelectedTopic] =useState(); 
  //let tabContent = 'Please Click A button';
  function  handleClick(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(tabContent)

  }
  let tabContent = <p>Please Select A topic..</p>;
  if(selectedTopic){
    tabContent=  <div id= "tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  }
    return(
        <Section title="Examples" id="examples">
        <Tabs 
        buttonsContainer ="menu"
         buttons={
          <div>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>
            Component
          </TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>
            Jsx
          </TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>
            Props
          </TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>
            State
          </TabButton>
        </div>
        }>
  
  {tabContent}
</Tabs>

      </Section>
    );
}