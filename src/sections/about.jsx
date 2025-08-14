
import aboutData from '../data/about.json';



export default function About() {
  return (
    <section className="about-section">
      <h2>About</h2>
      <ul>
        {aboutData.description
          ? aboutData.description.split('. ').map((sentence, i) => (
              <li key={i}>{sentence.trim()}</li>
            ))
          : null}
      </ul>
    </section>
  );
}
