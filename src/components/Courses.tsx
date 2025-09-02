import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Code, 
  Microscope, 
  Calculator, 
  Palette, 
  Users,
  Clock,
  Star,
  TrendingUp
} from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: Code,
      title: "Computer Science & Engineering",
      description: "Comprehensive program covering software development, AI, machine learning, and cutting-edge technologies.",
      students: "2,456",
      duration: "4 Years",
      rating: "4.9",
      achievements: ["100+ Projects", "Industry Partnerships", "Placement Rate: 95%"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Microscope,
      title: "Biotechnology & Life Sciences",
      description: "Advanced research-oriented program in genetics, molecular biology, and biotechnological applications.",
      students: "1,234",
      duration: "4 Years",
      rating: "4.8",
      achievements: ["Research Publications", "Lab Facilities", "International Collaborations"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Calculator,
      title: "Mathematics & Statistics",
      description: "Pure and applied mathematics with emphasis on data science, analytics, and mathematical modeling.",
      students: "876",
      duration: "3-4 Years",
      rating: "4.7",
      achievements: ["Research Projects", "Data Analytics", "Academic Excellence"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Palette,
      title: "Fine Arts & Design",
      description: "Creative programs in visual arts, digital design, and multimedia with modern studio facilities.",
      students: "654",
      duration: "3-4 Years",
      rating: "4.9",
      achievements: ["Art Exhibitions", "Design Awards", "Creative Portfolio"],
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Business Administration",
      description: "Comprehensive MBA program with specializations in marketing, finance, and entrepreneurship.",
      students: "1,890",
      duration: "2 Years",
      rating: "4.8",
      achievements: ["Industry Connect", "Startup Incubation", "Global Exposure"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Liberal Arts & Humanities",
      description: "Interdisciplinary program covering literature, philosophy, history, and social sciences.",
      students: "1,023",
      duration: "3 Years",
      rating: "4.6",
      achievements: ["Research Papers", "Cultural Events", "Academic Honors"],
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl floating" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 slide-up">
            📚 Academic Programs
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 slide-up stagger-1">
            Diverse{' '}
            <span className="gradient-text">Course Offerings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-up stagger-2">
            Our Smart Student Hub tracks achievements across all academic disciplines, 
            providing comprehensive portfolio management for every field of study.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.title}
              className={`group card-tilt bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant slide-up stagger-${(index % 3) + 1}`}
            >
              <CardContent className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                      <course.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {course.title}
                      </h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{course.students}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm font-medium text-foreground">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>Key Achievements</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.achievements.map((achievement) => (
                      <Badge 
                        key={achievement}
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 group-hover:scale-105"
                >
                  View Course Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16 slide-up stagger-4">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">
              Track Every Achievement Across{' '}
              <span className="gradient-text">All Disciplines</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our platform seamlessly integrates with all academic programs, 
              ensuring no student achievement goes unrecorded.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 glow-effect"
            >
              Explore Integration Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;