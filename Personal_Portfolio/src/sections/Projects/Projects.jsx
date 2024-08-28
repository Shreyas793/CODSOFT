import styles from './ProjectsStyles.module.css';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="https://cdn.slidesharecdn.com/ss_thumbnails/railwayreservationmanagementbysandipmurari-140112073430-phpapp02-thumbnail-4.jpg?cb=1389513797"
          link="https://github.com/Shreyas793/Railway-reservation-management-system/"
          h3="Railway Reservation Management Systems"
         
        />
        <ProjectCard
          src="https://assets-global.website-files.com/595d6b420002832258c527cb/618abc9cdfbae01bc36d2ce5_hero_advanced_drowsiness.jpg"
          link="https://github.com/Shreyas793/Driver_Drowsiness_Detection_System-"
          h3="Drowsiness Detection System"
         
        />
        <ProjectCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGAnj0gwjBGBAMFcM2z5PX_1RxYSTyZ_RnQ&s"
          link="https://github.com/Shreyas793/Road-Lane-Detection-System"
          h3="Road Lane Detection System"
         
        />
    
      </div>
    </section>
  );
}

export default Projects;
