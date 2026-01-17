import { motion } from "framer-motion";
import { CheckCircle, Globe, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Siempre a la vanguardia de las últimas tecnologías de IA.",
  },
  {
    icon: Users,
    title: "Enfoque Humano",
    description: "La tecnología al servicio de las personas y sus necesidades.",
  },
  {
    icon: Globe,
    title: "Impacto Regional",
    description: "Liderando la transformación digital en Latinoamérica.",
  },
];

const benefits = [
  "Soluciones 100% personalizadas",
  "Equipo experto certificado",
  "Soporte continuo 24/7",
  "Metodología ágil comprobada",
  "Resultados medibles garantizados",
  "Tecnología de última generación",
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-32 bg-gradient-mesh relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Impulsando la <span className="text-gradient">Innovación</span> desde Panamá
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              GenesixAI es una empresa líder en inteligencia artificial con sede en 
              Ciudad de Panamá. Nos especializamos en desarrollar soluciones de IA 
              que transforman la manera en que las empresas operan, toman decisiones 
              y se conectan con sus clientes.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Nuestro equipo combina experiencia técnica de clase mundial con un 
              profundo entendimiento del mercado latinoamericano, ofreciendo 
              soluciones que realmente funcionan en nuestra región.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ x: 8, transition: { duration: 0.3 } }}
                className="card-glass rounded-2xl p-6 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Panama highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl p-8 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 border border-primary/20"
            >
              <div className="text-center">
                <span className="text-4xl mb-4 block">🇵🇦</span>
                <h4 className="font-display text-2xl font-bold text-foreground mb-2">
                  Orgullosamente Panameños
                </h4>
                <p className="text-muted-foreground">
                  Conectando América Latina con el futuro de la tecnología
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
