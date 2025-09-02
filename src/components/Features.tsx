import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Globe, 
  Lock,
  Smartphone,
  FileText,
  Award
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Data Management",
      description: "Enterprise-grade security with encrypted data storage and role-based access control.",
      badge: "Security First"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instant synchronization of student achievements and academic progress across all platforms.",
      badge: "Lightning Fast"
    },
    {
      icon: Users,
      title: "Multi-stakeholder Access",
      description: "Seamless collaboration between students, faculty, and administrative staff.",
      badge: "Collaborative"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Data-driven insights for better decision-making and institutional improvements.",
      badge: "Smart Insights"
    },
    {
      icon: Globe,
      title: "Cloud-based Platform",
      description: "Access your data anywhere, anytime with our robust cloud infrastructure.",
      badge: "Always Available"
    },
    {
      icon: Smartphone,
      title: "Mobile-first Design",
      description: "Optimized for mobile devices with native app experience and offline capabilities.",
      badge: "Mobile Ready"
    },
    {
      icon: FileText,
      title: "Automated Documentation",
      description: "Generate reports, certificates, and portfolios automatically with smart templates.",
      badge: "Paperless"
    },
    {
      icon: Award,
      title: "Achievement Tracking",
      description: "Comprehensive tracking of academic and co-curricular achievements with verification.",
      badge: "Recognition"
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "GDPR compliant with granular privacy controls and student data ownership.",
      badge: "Privacy First"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 slide-up">
            ✨ Powerful Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 slide-up stagger-1">
            Everything You Need for{' '}
            <span className="gradient-text">Modern Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-up stagger-2">
            Our comprehensive platform brings together cutting-edge technology and educational expertise 
            to create the ultimate student management experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`group card-tilt bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant slide-up stagger-${(index % 4) + 1}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 slide-up stagger-4">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your educational institution?
          </p>
          <div className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors duration-300 cursor-pointer group">
            <span className="font-semibold">Explore all features</span>
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary text-sm">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;