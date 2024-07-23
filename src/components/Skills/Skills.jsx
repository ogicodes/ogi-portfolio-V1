import "./Skills.scss";
import checkMarkIcon from "../../assets/icons/checkmark-dark.svg";
import SkillList from "../SkillList/SkillList";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skills__skillList">
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      <div className="skills__skillList">
        <SkillList src={checkMarkIcon} skill="HTML5" />
        <SkillList src={checkMarkIcon} skill="CSS3" />
        <SkillList src={checkMarkIcon} skill="Sass" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="THREE.JS" />
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="React Three/Fiber" />
        <SkillList src={checkMarkIcon} skill="React Three/Drei" />
      </div>
      <hr />
      <div className="skills__skillList">
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Express" />
        <SkillList src={checkMarkIcon} skill="REST API" />
      </div>
      <hr />
      <div className="skills__skillList">
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="Knex" />
      </div>
      <hr />
      <div className="skills__skillList">
        <SkillList src={checkMarkIcon} skill="Blender" />
        <SkillList src={checkMarkIcon} skill="AWS S3 Buckets" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
    </section>
  );
}
