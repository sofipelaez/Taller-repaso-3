import { useParams, Link } from 'react-router-dom'
import data from '../data/data.json'

function ProjectDetail() {
  const { id } = useParams()

  const project = data.find((p) => p.id === Number(id))

  if (!project) {
    return <h2>Proyecto no encontrado</h2>
  }

  return (
    <div>
      <h1>{project.name}</h1>

      <p>
        <strong>Ubicación:</strong> {project.location}
      </p>

      <p>
        <strong>Capacidad:</strong> {project.capacity} kWh
      </p>

      <p>
        <strong>Estado:</strong> {project.status}
      </p>

      <p>
        <strong>Descripción:</strong> {project.description}
      </p>

      <Link to="/"> Volver</Link>
    </div>
  )
}

export default ProjectDetail