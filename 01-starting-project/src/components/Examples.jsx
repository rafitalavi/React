import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton/TabButton.jsx";
import Section from "./Section.jsx";
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
        
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() =>handleClick('components')}>
            Component
          </TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClickt={() =>handleClick('jsx')}>
            Jsx
          </TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() =>handleClick('props')}>
            Props
          </TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() =>handleClick('state')}>
            State
          </TabButton>
          

        </menu>
        {tabContent}
      </Section>
    );
}