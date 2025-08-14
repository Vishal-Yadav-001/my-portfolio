
import aboutData from "../data/about.json";

export default function About() {
  return (
    <section className="about-section">
      <h2>About</h2>

      {aboutData.description
        ? aboutData.description
            .split()
            .map((sentence, i) => <p>{sentence.trim()}</p>)
        : null}
    </section>
  );
}
