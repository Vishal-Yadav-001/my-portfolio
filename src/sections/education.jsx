import educationData from "../data/education.json";

const Education = () => (
  <section id="education">
    <h2>Education</h2>
    <ul>
      {educationData.map((edu, idx) => (
        <li key={edu.institution + edu.degree + idx} style={{ marginBottom: "1.5rem" }}>
          <h3>{edu.degree} @ {edu.institution}</h3>
          <p>
            <strong>{edu.startDate} - {edu.endDate}</strong>
            {edu.location && <span> | {edu.location}</span>}
          </p>
          {edu.field && <p><b>Field:</b> {edu.field}</p>}
          {edu.grade && <p><b>Grade:</b> {edu.grade}</p>}
          {edu.description && <p>{edu.description}</p>}
        </li>
      ))}
    </ul>
  </section>
);

export default Education;