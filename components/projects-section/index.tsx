import { ProjectCard } from "../ui-elements/card"
import Text from "../ui-elements/typography"

const ProjectSection = () => {
  return (
    <>
      <Text type="heading3" >Featured <Text color="primary">Projects</Text></Text>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </>
  )
}

export default ProjectSection