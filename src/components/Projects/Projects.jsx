import '../Projects/Projects.scss'
import viberr from '../../assets/icons/viberr.png'
import fitlift from '../../assets/icons/fitlift.png'
import hipsster from '../../assets/icons/hipsster.png'
import freshBurger from '../../assets/icons/fresh-burger.png'
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {
  return (
    <section id='projects' className='projects'>
        <h1 className="projects__title">Projects</h1>
        <div className='projects__container'>
            <ProjectCard img={viberr} title='Viberr' description='Streaming App' />
            <ProjectCard img={fitlift} title='FitLift' description='Fitness App' />
            <ProjectCard img={hipsster} title='Hipsster' description='E-commerce App' />
            <ProjectCard img={freshBurger} title='Fresh Burger' description='Food App' />
        </div>
    </section>
  );
}