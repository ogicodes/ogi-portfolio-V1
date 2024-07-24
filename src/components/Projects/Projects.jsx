import '../Projects/Projects.scss'
import OutfitAi from '../../assets/icons/Outfit.png'
import CAV from '../../assets/icons/CAV_LOGO_1.webp'
import mineCraft from '../../assets/icons/Minecraft_Recipe_Book.png'
import artGallery from '../../assets/icons/Virtual_Art_Gallery.png'
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {
  return (
    <section id='projects' className='projects'>
        <h1 className="projects__title">Projects</h1>
        <div className='projects__container'>
            <ProjectCard img={OutfitAi} title='OutfitAi' description='Your Personal Ai Stylist' link='https://github.com/ogicodes/OutfitAi' />
            <ProjectCard border img={CAV} title={`Cameron Alastaire\nVintage`} description='E-commerce Site' link='https://cameronalastairevintage.com/' />
            <ProjectCard img={mineCraft} title='MineCraft Api' description='Open Source Public Minecraft API' />
            <ProjectCard img={artGallery} title='Virtual Gallery' description='3D virtual art gallery' />
        </div>
    </section>
  );
}