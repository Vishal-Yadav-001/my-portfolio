

const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'HTML & CSS', level: 'Advanced' },
    { name: 'Git', level: 'Intermediate' },
];

const Skills = () => (
    <section>
        <h2>Skills</h2>
        <ul>
            {skills.map((skill, idx) => (
                <li key={skill.name}>
                    <strong>{skill.name}</strong> - {skill.level}
                </li>
            ))}
        </ul>
    </section>
);

export default Skills;