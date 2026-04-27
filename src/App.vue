<script setup>
import About from "./components/About/AboutComponent.vue";
import Calendly from "./components/Calendly/CalendlyComponent.vue";
import Footer from "./components/Footer/FooterComponent.vue";
import Hero from "./components/Hero/HeroComponent.vue";
import Header from "./components/Header/HeaderComponent.vue";
import Testimonial from "./components/Testimonial/TestimonialComponent.vue";
</script>

<template>
  <div class="w-full h-auto bg-black pt-[35px] overflow-x-hidden">
    <div class="px-[35px] lg:px-[35px] xl:px-[0px]">
      <Header />
      <Hero />
      <About />
      <Calendly />
      <Testimonial />
    </div>
    <Footer />
  </div>
</template>
