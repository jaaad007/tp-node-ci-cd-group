
import { MapPin, Calendar, Award, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import SEO from '@/components/SEO';

const About = () => {
  const skills = [
    { name: 'React / Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 }
  ];

  const experiences = [
    {
      title: 'Développeur Full Stack Senior',
      company: 'TechCorp Solutions',
      period: '2022 - Présent',
      description: 'Développement d\'applications web complexes avec React et Node.js. Management d\'équipe et architecture de solutions.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Développeur Frontend',
      company: 'StartupInnovante',
      period: '2020 - 2022',
      description: 'Création d\'interfaces utilisateur modernes et responsives. Optimisation des performances et expérience utilisateur.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Développeur Junior',
      company: 'WebAgency',
      period: '2019 - 2020',
      description: 'Développement de sites web et applications. Apprentissage des bonnes pratiques et méthodologies agiles.',
      technologies: ['JavaScript', 'PHP', 'MySQL']
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <SEO 
        title="À propos"
        description="Découvrez mon parcours de développeur full stack, mes compétences techniques et mon expérience professionnelle."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              À propos de moi
            </h1>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Tabia Es.said
                Passionné par le développement web depuis mon jeun age , je combine créativité et 
                expertise technique pour créer des solutions digitales innovantes. Mon approche 
                centrée sur l'utilisateur et ma maîtrise des technologies modernes me permettent 
                de transformer des idées complexes en applications performantes.
              </p>
              <p>
                Spécialisé dans l'écosystème JavaScript, j'aime particulièrement travailler avec 
                React, Node.js et les architectures cloud. Je suis également passionné par l'UX/UI 
                design et l'optimisation des performances.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>4+ années d'expérience</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Coffee className="w-5 h-5 mr-2" />
                <span>Remote-friendly</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img
              src="https://i.postimg.cc/QxGDNNh1/DSC-0522.jpg"
              alt="Portrait professionnel"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>


        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compétences Techniques</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Expérience Professionnelle</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mes Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Recherche constante de la qualité et de l'amélioration continue dans chaque projet.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Travail d'équipe efficace et communication transparente pour atteindre les objectifs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Veille technologique active et adoption des meilleures pratiques du secteur.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
