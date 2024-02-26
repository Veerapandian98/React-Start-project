import {CORE_CONCEPTS} from '../data.js';
import Coreconcept from './Coreconcept.jsx';

export default function Coreconcepts() {
    return (
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map(conceptItem => (
              <Coreconcept key={conceptItem.title} {...conceptItem}/>
            ))}
            {/* <Coreconcept {...CORE_CONCEPTS[0]} />
            <Coreconcept {...CORE_CONCEPTS[1]} />
            <Coreconcept {...CORE_CONCEPTS[2]} />
            <Coreconcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
    )
}