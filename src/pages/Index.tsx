import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import Stakeholders from '@/components/Stakeholders'; // renamed from Instructors
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Users, FileText } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Courses />
      <Stakeholders />
      
      {/* Background / Problem Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl floating" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 slide-up">
              🎯 Challenge Identified
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 slide-up stagger-1">
              Background &{' '}
              <span className="gradient-text">Problem</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto slide-up stagger-2">
              Despite increasing digitization, student achievements remain scattered across departments or lost in paper-based records. 
              Lack of a centralized platform hampers efficiency, limits verified portfolios, and complicates processes like NAAC accreditation.
            </p>
          </div>

          {/* Problem visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="card-tilt bg-card/50 backdrop-blur-sm border-border/50 hover:border-destructive/30 transition-all duration-500 slide-up stagger-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center mx-auto">
                  <FileText className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-bold text-foreground">Scattered Records</h3>
                <p className="text-sm text-muted-foreground">Achievements lost across different departments</p>
              </CardContent>
            </Card>
            
            <Card className="card-tilt bg-card/50 backdrop-blur-sm border-border/50 hover:border-destructive/30 transition-all duration-500 slide-up stagger-2">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-bold text-foreground">Limited Portfolios</h3>
                <p className="text-sm text-muted-foreground">No verified digital student profiles</p>
              </CardContent>
            </Card>
            
            <Card className="card-tilt bg-card/50 backdrop-blur-sm border-border/50 hover:border-destructive/30 transition-all duration-500 slide-up stagger-3">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-bold text-foreground">Complex Accreditation</h3>
                <p className="text-sm text-muted-foreground">Difficult NAAC and compliance processes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section className="py-20 bg-gradient-secondary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-glow/15 rounded-full blur-3xl floating" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-up stagger-1">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                🚀 Proposed Solution
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Introducing the{' '}
                <span className="gradient-text">Smart Student Hub</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A centralized mobile + web platform that digitally catalogs and manages every student's academic and non-academic achievements throughout their journey in higher education.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 card-tilt transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-lg">Builds a verified student profile from Day 1</span>
                </div>
                <div className="flex items-center space-x-4 card-tilt transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-lg">Empowers faculty with real-time mentoring data</span>
                </div>
                <div className="flex items-center space-x-4 card-tilt transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-lg">Reduces paperwork and aids accreditation</span>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 glow-effect px-8 py-4 text-base font-semibold"
                onClick={() => window.open("https://youtu.be/-MhXozNPOeg?si=GYJ28nWtzOHYf-x8", "_blank")}
              >
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="relative slide-up stagger-2">
              <Card className="card-tilt bg-gradient-primary text-primary-foreground shadow-glow">
                <CardContent className="p-8 space-y-6">
                  <h3 className="font-bold text-2xl">Expected Outcomes</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>Reduced paperwork and improved transparency</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>Enhanced placement and higher studies readiness</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>Data-driven decision-making for institutions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm">✓</span>
                      </div>
                      <span>Streamlined NAAC, AICTE, and NIRF reporting</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 slide-up">
            🎯 Impact & Benefits
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 slide-up stagger-1">
            Impact &{' '}
            <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed slide-up stagger-2">
            Empower students with holistic digital profiles, simplify faculty tasks, and modernize institutional operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center slide-up stagger-3">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 glow-effect px-8 py-4 text-base font-semibold"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 px-8 py-4 text-base"
              onClick={() => window.open("https://youtu.be/-MhXozNPOeg?si=GYJ28nWtzOHYf-x8", "_blank")}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-secondary py-16 border-t border-border/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-6 slide-up">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                <span className="text-lg font-bold text-primary-foreground">H</span>
              </div>
              <span className="text-2xl font-bold gradient-text">
                Higher Education Department
              </span>
            </div>
            <p className="text-muted-foreground text-lg slide-up stagger-1">
              Government of Jammu & Kashmir • Smart Education Initiative
            </p>
            <div className="w-16 h-px bg-gradient-primary mx-auto my-8 slide-up stagger-2"></div>
            <p className="text-sm text-muted-foreground slide-up stagger-3">
              © 2024 Smart Student Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;