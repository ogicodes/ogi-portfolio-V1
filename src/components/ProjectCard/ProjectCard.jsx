export default function ProjectCard({ img, title, description, link, border }) {
    return (
        <a className='projects__link' href={link} target='_blank'>
                <img className={border ? 'projects__img projects__img--border' : 'projects__img' } src={img} alt="viberr logo" />
                <h3>{title}</h3>
                <p>{description}</p>
        </a>
    );
}