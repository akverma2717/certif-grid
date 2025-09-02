import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  UserCheck, 
  Building, 
  Shield,
  Users,
  Award,
  BarChart3,
  FileText,
  CheckCircle
} from 'lucide-react';

const Stakeholders = () => {
  const stakeholders = [
    {
      icon: GraduationCap,
      title: "Students",
      role: "Digital Portfolio Owners",
      description: "Build comprehensive digital profiles, track achievements, and showcase accomplishments.",
      benefits: [
        "Lifetime achievement portfolio",
        "Verified skill certificates",
        "Career readiness tracking",
        "Easy document access"
      ],
      color: "from-blue-500 to-indigo-600",
      stats: { primary: "10K+", secondary: "Active Students" }
    },
    {
      icon: UserCheck,
      title: "Faculty Members",
      role: "Academic Mentors",
      description: "Real-time mentoring capabilities with data-driven insights for student guidance.",
      benefits: [
        "Student progress analytics",
        "Mentoring dashboard",
        "Achievement verification",
        "Performance insights"
      ],
      color: "from-green-500 to-emerald-600",
      stats: { primary: "500+", secondary: "Faculty Members" }
    },
    {
      icon: Building,
      title: "Institutions",
      role: "Educational Organizations",
      description: "Streamlined operations, automated reporting, and enhanced accreditation support.",
      benefits: [
        "NAAC/AICTE compliance",
        "Automated reporting",
        "Data-driven decisions",
        "Operational efficiency"
      ],
      color: "from-purple-500 to-pink-600",
      stats: { primary: "50+", secondary: "Partner Institutions" }
    },
    {
      icon: Shield,
      title: "Administrators",
      role: "System Managers",
      description: "Complete control over data management, user access, and system configuration.",
      benefits: [
        "User management",
        "Security controls",
        "System analytics",
        "Compliance monitoring"
      ],
      color: "from-orange-500 to-red-600",
      stats: { primary: "100%", secondary: "Data Security" }
    }
  ];

  const systemBenefits = [
    {
      icon: BarChart3,
      title: "Enhanced Decision Making",
      description: "Data-driven insights for better academic and administrative decisions."
    },
    {
      icon: FileText,
      title: "Streamlined Processes",
      description: "Automated workflows reduce paperwork and improve efficiency."
    },
    {
      icon: Award,
      title: "Recognition & Verification",
      description: "Authentic achievement verification and digital badge system."
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description: "Built-in support for NAAC, AICTE, and NIRF requirements."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 slide-up">
            👥 Stakeholders
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 slide-up stagger-1">
            Empowering Every{' '}
            <span className="gradient-text">Stakeholder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-up stagger-2">
            Our platform serves the diverse needs of all education stakeholders, 
            creating a connected ecosystem for academic excellence.
          </p>
        </div>

        {/* Stakeholder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {stakeholders.map((stakeholder, index) => (
            <Card 
              key={stakeholder.title}
              className={`group card-tilt bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant slide-up stagger-${(index % 3) + 1}`}
            >
              <CardContent className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${stakeholder.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                      <stakeholder.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {stakeholder.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">{stakeholder.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">{stakeholder.stats.primary}</div>
                    <div className="text-xs text-muted-foreground">{stakeholder.stats.secondary}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {stakeholder.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Users className="w-4 h-4 text-primary mr-2" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {stakeholder.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Benefits */}
        <div className="bg-gradient-secondary rounded-3xl p-8 border border-border/50 slide-up stagger-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Comprehensive{' '}
              <span className="gradient-text">System Benefits</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our integrated approach delivers value across the entire educational ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemBenefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`text-center space-y-4 card-tilt slide-up stagger-${index + 1}`}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 slide-up stagger-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your{' '}
              <span className="gradient-text">Educational Experience?</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of students, faculty, and institutions already using Smart Student Hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 glow-effect"
              >
                Get Started Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;