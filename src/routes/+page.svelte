<script>
  import "../app.css";
  import HeaderSection from "$lib/sections/HeaderSection.svelte";
  import HeroSection from "$lib/sections/HeroSection.svelte";
  import LogoCloud from "$lib/sections/LogoCloud.svelte";
  import AlternatingFeatureSection from "$lib/sections/AlternatingFeatureSection.svelte";
  import GradientFeatureSection from "$lib/sections/GradientFeatureSection.svelte";
  import StatSection from "$lib/sections/StatSection.svelte";
  import CtaSection from "$lib/sections/CtaSection.svelte";
  import FooterSection from "$lib/sections/FooterSection.svelte";
  import WhyChooseMe from "$lib/sections/WhyChooseMe.svelte";
  import TestimonialSection from "$lib/sections/TestimonialSection.svelte";
  import PricingSection from "$lib/sections/PricingSection.svelte";
  import WhoIAmSection from "$lib/sections/WhoIAmSection.svelte";
  import ContactModal from "$lib/components/ContactModal.svelte";
</script>

<div class="bg-white">
  <HeaderSection />
  <main>
    <HeroSection />
    <TestimonialSection
      text="Grazie a te ottengo  dei risultati mai visti."
      name="Yenia Delgado"
    />
    <!-- <LogoCloud /> -->
    <WhyChooseMe />
    <CtaSection />
    <!-- <AlternatingFeatureSection /> -->
    <TestimonialSection
      text="Onesto, sincero, professionale, schietto, chiaro, sempre aperto all'ascolto e al confronto. Una persona che ama il suo lavoro e ci mette impegno, passione e dedizione. Motiva i suoi atleti a dare sempre il massimo.
Ho appena iniziato il percorso con Ema e fin da subito mi ha spiegato tutto in modo molto chiaro, ascoltando prima quelle che erano le mie esigenze e i miei desideri. Dopo qualche allenamento e tante correzioni da parte sua, ho subito notato di essere più padrona dei miei movimenti e che l'esecuzione di certi esercizi mi veniva meglio, più fluida."
      name="Valeria Valastro"
    />
    <PricingSection />
    <TestimonialSection
      text="Penso che tu sia una persona che mette l’anima e il cuore in tutto ciò che fa. Mi sono sempre sentita seguita nonostante il percorso online
Appena ti mando un video spendi un sacco di tempo anche solo per spiegarmi come poter  migliorare una minima cosa, personalmente mi sento molto più accompagnata in questo percorso da te online che da tanti in presenza che lavorano nelle palestre
Sei flessibile, disponibile e sai andare incontro alle esigenze e richieste senza alcun tipo di giudizio. C’è passione in ciò che fai e la si percepisce in ogni parola che dici e da come ti poni. Non vorrei essere seguita da nessun altro."
      name="Elena Giulia Arena"
    />
    <WhoIAmSection />
    <CtaSection />
    <FooterSection />
    <ContactModal />
  </main>
</div>
