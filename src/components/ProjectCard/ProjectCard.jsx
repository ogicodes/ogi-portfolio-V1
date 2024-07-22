export default function ProjectCard({ img, title, description }) {
    return (
        <a className='projects__link' href="https://github.com/ogicodes/OutfitAi" target='_blank'>
                <img className='projects__img' src={img} alt="viberr logo" />
                <h3>{title}</h3>
                <p>{description}</p>
        </a>
    );
}