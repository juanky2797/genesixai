import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#inicio" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-xl">G</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Genesix<span className="text-primary">AI</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Transformando empresas con inteligencia artificial. 
              Soluciones innovadoras desde Panamá para toda Latinoamérica.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/in/juan-carlos-montenegro-pino-183623150/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:contacto@genesixai.com"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {["Inicio", "Servicios", "Nosotros", "Fundador", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Servicios
            </h4>
            <ul className="space-y-3">
              {[
                "Machine Learning",
                "Chatbots IA",
                "Análisis Predictivo",
                "Automatización",
                "Visión Computacional",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} GenesixAI. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Hecho con ❤️ en Panamá 🇵🇦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
