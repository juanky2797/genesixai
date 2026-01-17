import { motion } from "framer-motion";
import { Linkedin, Mail, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const FounderSection = () => {
  return (
    <section id="fundador" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Liderazgo
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Conoce al <span className="text-gradient">Fundador</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo/Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full border border-accent/20" />
              
              {/* Avatar container */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="font-display text-7xl font-bold text-gradient">JC</span>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-2xl">🧠</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-xl">💡</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Juan Carlos Montenegro Pino
            </h3>
            <p className="text-primary font-semibold text-lg mb-6">
              Fundador & CEO de GenesixAI
            </p>

            {/* Quote */}
            <div className="relative mb-8">
              <Quote className="w-10 h-10 text-primary/30 absolute -top-2 -left-2" />
              <p className="text-lg text-muted-foreground italic pl-8 leading-relaxed">
                "Mi visión es democratizar el acceso a la inteligencia artificial en 
                Latinoamérica. Creo firmemente que la IA puede ser una herramienta 
                transformadora para empresas de todos los tamaños, y desde Panamá 
                estamos construyendo ese puente hacia el futuro."
              </p>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Con amplia experiencia en desarrollo de software y consultoría tecnológica, 
              Juan Carlos fundó GenesixAI con la misión de llevar soluciones de 
              inteligencia artificial de clase mundial a empresas en toda la región. 
              Su enfoque combina innovación técnica con un profundo entendimiento de 
              las necesidades del mercado latinoamericano.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="heroOutline"
                size="lg"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/juan-carlos-montenegro-pino-183623150/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="#contacto">
                  <Mail className="w-5 h-5" />
                  Contactar
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
