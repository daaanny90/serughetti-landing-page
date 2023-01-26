<script>
  import "../app.css";
  import HeaderSection from "$lib/sections/HeaderSection.svelte"
  import HeroSection from "$lib/sections/HeroSection.svelte"
  import LogoCloud from "$lib/sections/LogoCloud.svelte"
  import AlternatingFeatureSection from "$lib/sections/AlternatingFeatureSection.svelte"
  import GradientFeatureSection from "$lib/sections/GradientFeatureSection.svelte"
  import StatSection from "$lib/sections/StatSection.svelte"
  import CtaSection from "$lib/sections/CtaSection.svelte"
  import FooterSection from "$lib/sections/FooterSection.svelte"
</script>

<div class="bg-white">
	<HeaderSection />
	<main>
		<HeroSection />
		<!-- <LogoCloud /> -->
		<AlternatingFeatureSection />
		<GradientFeatureSection />
		<StatSection />
		<CtaSection />
	</main>
	<FooterSection />
</div>
