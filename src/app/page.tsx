import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Developer from "@/components/devloper";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <Container>
        <div className="h-24"></div>
        <div className="m-10 mx-auto">
          <p className="text-center text-5xl md:text-7xl font-bold">Features</p>
        </div>
        <Benefits />

        {/* <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing /> */}
        {/* </Section> */}

        {/* <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section> */}
<Developer/>
        <FAQ />

        <Stats />
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
