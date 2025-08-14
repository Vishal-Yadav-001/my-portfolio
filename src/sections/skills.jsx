import React from "react";
import skillsData from "../data/skills.json";
import './skills.css'
export default function SkillsList() {
  const { skills } = skillsData;

  return (
    <div>
      <h2>Skills</h2>
      <div className="skills-category-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category-block">
            <h4>{formatCategoryName(category)}</h4>
            <div className="skills-pills">
              {items.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatCategoryName(str) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}
