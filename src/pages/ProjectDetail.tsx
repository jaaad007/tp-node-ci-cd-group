
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import projectsData from '@/data/projects.json';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projet non trouvé</h1>
          <p className="text-gray-600 mb-8">Le projet que vous recherchez n'existe pas.</p>
          <Button onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Retour
          </Button>
        </div>
      </div>
    );
  }

  const relatedProjects = projectsData
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <SEO 
        title={project.title}
        description={project.description}
        image={project.image}
        keywords={`${project.technologies.join(', ')}, projet, portfolio, développement`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour
          </Button>
        </div>

        {/* Project Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="animate-fade-in">
            <div className="mb-6">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {project.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.liveUrl && (
                <Button asChild className="group">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    Voir le site
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild className="group">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Code source
                  </a>
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 w-5 h-5" />
                  Description détaillée
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>{project.longDescription}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Palette className="mr-2 w-5 h-5" />
                  Informations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Catégorie</h4>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Liens</h4>
                  <div className="space-y-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-primary/80 text-sm transition-colors"
                      >
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Site en ligne
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-primary/80 text-sm transition-colors"
                      >
                        <Github className="mr-2 w-4 h-4" />
                        Code source
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Projets similaires</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {relatedProjects.map((relatedProject) => (
                <Card key={relatedProject.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <Link to={`/project/${relatedProject.slug}`}>
                        {relatedProject.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{relatedProject.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {relatedProject.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline">
                <Link to="/projects">
                  Voir tous les projets
                </Link>
              </Button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
