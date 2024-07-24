import "./Skills.scss";
import SkillList from "../SkillList/SkillList";

const skills = [
  "JavaScript",
  "TypeScript",
  "THREE.Js",
  "React",
  "React Three/Fiber",
  "React Three/Drei",
  "Bootstrap",
  "HTML",
  "CSS",
  "Sass",
  "Node.js",
  "Express",
  "REST API",
  "Knex",
  "SQL",
  "MySQL",
  "Blender",
  "AWS S3 Buckets",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skills__skillList">
        {skills.map((skill, index) => (
          <SkillList key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
