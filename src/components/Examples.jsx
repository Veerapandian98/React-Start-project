import TabButton from './TabButton.jsx';
import {EXAMPLES} from '../data.js';
import { useState } from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
    const [selectedValue, setSelectedValue] = useState();

    function handleSelect(selectedButton) {
        setSelectedValue(selectedButton);
    }

    let tabContent = <p>Please select a topic!!</p>
    if (selectedValue) {
        tabContent = (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedValue].title}</h3>
            <p>{EXAMPLES[selectedValue].description}</p>
            <pre>
            <code>
                {EXAMPLES[selectedValue].code}
            </code>
            </pre>
        </div>
        )
    }
    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={
                <>
                    <TabButton isSelected={selectedValue === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedValue === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedValue === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedValue === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
          
          {/* on way of rendering code with condition */}
          {/* {!selectedValue && <p>Please select a topic</p>}
          {selectedValue && <div id="tab-content">
            <h3>{EXAMPLES[selectedValue].title}</h3>
            <p>{EXAMPLES[selectedValue].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedValue].code}
              </code>
            </pre>
          </div>} */}
        </Section>
    )
}