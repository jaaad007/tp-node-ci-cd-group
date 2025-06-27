
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
      featured ? 'md:col-span-2 lg:col-span-1' : ''
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
        <Badge className="absolute top-2 right-2 bg-primary text-white">
          {project.category}
        </Badge>
      </div>

      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">
          <Link to={`/project/${project.slug}`}>
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        <Link
          to={`/project/${project.slug}`}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors"
        >
          Voir le projet
          <ExternalLink className="w-4 h-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
