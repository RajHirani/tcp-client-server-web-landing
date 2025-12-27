import { Download, Server, Monitor, Zap, ArrowRight, Terminal, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Network className="w-5 h-5 text-primary" />
            </div>
            <span className="font-semibold text-lg">TCP Connect</span>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            v1.0.0
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Desktop Application for Windows</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Create TCP Servers & Clients{" "}
            <span className="text-primary">Effortlessly</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            A lightweight desktop tool that lets you spin up TCP servers and connect clients in seconds. 
            Perfect for testing, debugging, and development workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group animate-pulse-glow"
              asChild
            >
              <a href="#download" className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-secondary">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <FeatureCard 
            icon={<Server className="w-6 h-6" />}
            title="TCP Server"
            description="Start a TCP server on any port with just a few clicks. Monitor incoming connections in real-time."
          />
          <FeatureCard 
            icon={<Monitor className="w-6 h-6" />}
            title="TCP Client"
            description="Connect to any TCP server instantly. Send and receive data with a clean, intuitive interface."
          />
          <FeatureCard 
            icon={<Zap className="w-6 h-6" />}
            title="Fast & Lightweight"
            description="Minimal resource usage with instant startup. No complex setup or configuration required."
          />
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-float">
                <Download className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Download TCP Connect
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest version for Windows. Free and open source.
              </p>

              <Button 
                size="lg" 
                className="w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://your-download-link.com/tcp-connect-v1.0.0.zip" 
                  download
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download v1.0.0 (Windows)
                </a>
              </Button>

              <p className="text-sm text-muted-foreground mt-4">
                Version 1.0.0 • Windows 10/11
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 TCP Connect. Built for developers, by developers.</p>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="group bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary transition-transform group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

export default Index;
