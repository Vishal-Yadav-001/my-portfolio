import workExperiences from "../data/work_expeirence.json";

const WorkExperience = () => (
  <section id="work-experience">
    <h2>Work Experience</h2>
    <ul>
      {workExperiences.map((exp, idx) => (
        <li
          key={exp.company + (exp.role || exp.position) + idx}
          style={{ marginBottom: "2rem" }}
        >
          <h3>
            {(exp.role || exp.position) + " @ " + exp.company}
            {exp.client && <span> ({exp.client})</span>}
          </h3>
          <p>
            <strong>
              {exp.startDate} - {exp.endDate}
            </strong>
            {exp.location && <span> | {exp.location}</span>}
          </p>
          <p>
            {exp.project && <b>Project:</b>} {exp.project}
          </p>
          <p>{exp.description}</p>
          {exp.achievements && (
            <ul>
              {exp.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          )}
          {exp.responsibilities && (
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          )}
          {exp.technologies && (
            <p>
              <b>Technologies:</b> {exp.technologies.join(", ")}
            </p>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default WorkExperience;
