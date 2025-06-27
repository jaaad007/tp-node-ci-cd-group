
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';
import SEO from '@/components/SEO';
import projectsData from '@/data/projects.json';

const Home = () => {
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Accueil"
        description="Portfolio professionnel d'un développeur full stack. Découvrez mes projets en React, Node.js et développement web moderne."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                Disponible pour de nouveaux projets
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Développeur
                <span className="block text-primary">Full Stack</span>
                Passionné
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Je crée des applications web modernes et performantes avec React, Node.js et les dernières technologies. 
                Transformons ensemble vos idées en solutions digitales innovantes.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="group">
                  <Link to="/projects">
                    Voir mes projets
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                  Télécharger CV
                </Button>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Développeur au travail"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-2xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies Maîtrisées</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une expertise technique complète pour réaliser vos projets web les plus ambitieux.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
              'Docker', 'AWS', 'Git', 'Figma', 'Next.js', 'GraphQL'
            ].map((skill) => (
              <div key={skill} className="text-center group">
                <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-primary font-bold">{skill.charAt(0)}</span>
                  </div>
                  <h3 className="font-medium text-gray-900">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projets Sélectionnés</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets les plus récents et les technologies utilisées.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                Voir tous les projets
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
