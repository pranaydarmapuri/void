import css from './project-card.module.css'
import Text from './../../typography'
import Link from 'next/link'

const ProjectCard = () => {
  return (
    <div className={css.project_card}>
      <div className={css.project_img}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1635333607229-10cabf0d892f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80")'
        }} />
      <div className={css.project_info}>
        <Text type="heading4" weight="w7" color="secondary" >Project Title</Text>
        <div>
          <span className={css.technologies}>
            <Text type="caption" color="text-secondary">React</Text>
            <Text type="caption" color="text-secondary">MongoDB</Text>
          </span>
        </div>
        <Text type="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quod at a amet facere saepe sint fuga voluptate.
          Explicabo, sequi iusto veniam laudantium cumque repudiandae accusantium ipsam asperiores amet libero.
        </Text>
        <Link href="/about" passHref><Text _as="a" type="caption" color="primary">Know more about it</Text></Link>
      </div>
    </div>
  )
}

export default ProjectCard