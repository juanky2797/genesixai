import { motion } from "framer-motion";
import { Brain, Cpu, LineChart, MessageSquare, Shield, Workflow } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Modelos predictivos personalizados que aprenden de tus datos para optimizar decisiones empresariales.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots Inteligentes",
    description:
      "Asistentes virtuales con procesamiento de lenguaje natural para atención al cliente 24/7.",
  },
  {
    icon: LineChart,
    title: "Análisis Predictivo",
    description:
      "Anticipamos tendencias y comportamientos para que tomes decisiones informadas antes que tu competencia.",
  },
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    description:
      "Optimizamos flujos de trabajo repetitivos con IA para aumentar la productividad de tu equipo.",
  },
  {
    icon: Cpu,
    title: "Visión por Computadora",
    description:
      "Reconocimiento de imágenes y videos para control de calidad, seguridad y análisis visual.",
  },
  {
    icon: Shield,
    title: "IA Segura y Ética",
    description:
      "Implementamos soluciones responsables con transparencia, privacidad y cumplimiento normativo.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Soluciones <span className="text-gradient">Inteligentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos un portafolio completo de servicios de IA diseñados para 
            transformar tu negocio y mantenerte a la vanguardia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="card-glass rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/30">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
