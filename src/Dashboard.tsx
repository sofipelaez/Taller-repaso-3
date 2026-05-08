import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type{ Project } from './types/Project'
import data from './data/data.json'

function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState('Todos')

  useEffect(() => {
    setProjects(data as Project[])
  }, [])

  const filteredProjects =
    filter === 'Todos'
      ? projects
      : projects.filter((p) => p.status === filter)

  return (
    <div>
      <h1>☀️ Proyectos Instalados</h1>

      <p className="subtitle">
        Gestiona y supervisa instalaciones solares
      </p>

      <div className="filter-container">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option>Todos</option>
          <option>Activo</option>
          <option>Mantenimiento</option>
          <option>Pendiente</option>
        </select>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">

            <span
              className={`status ${project.status.toLowerCase()}`}
            >
              {project.status}
            </span>

            <h2>{project.name}</h2>

            <p> {project.location}</p>

            <p>  {project.capacity} kWh</p>

            <Link to={`/proyecto/${project.id}`}>
              Ver parámetros técnicos 
            </Link>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard