<template>
  <div class="overflow-x-hidden font-semibold text-center bg-gradient-to-r from-[#141E30] to-[#243B55] h-screen w-screen overflow-y-scroll scrollChrome">
    <div class="py-20 scrollChild h-screen w-screen">
      <span class="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#74ebd5] to-[#ACB6E5]">Bienvenue à
        Score BAC</span><br>
      <span class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#74ebd5] to-[#ACB6E5]">Ici vous
        pouvez
        calculer votre score de formule générale (FG) rapidement.</span><br>
      <div class="h-full">
        <div class="relative h-full">
          <MouseAnimation />
        </div>
      </div>
    </div>
    <div class="py-20 scrollChild h-screen w-screen">
      <div class="h-full w-full inline-block">
        <span class="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#74ebd5] to-[#ACB6E5]">Choix de
          Section</span><br>
        <div class="grid place-items-center mt-10">
          <ListMenuComponent @select-option="onSelectOption" />
        </div>
        <transition enter-active-class="delay-100 duration-300 ease-out" enter-from-class="transform opacity-0 scale-75"
          enter-to-class="opacity-100 scale-100">

          <div v-if="selectedOption == 'info'">
            <InfoComponent class="transition-all" @formule-generale="getFormuleGenerale" />
          </div>
        </transition>
        <transition enter-active-class="delay-100 duration-300 ease-out" enter-from-class="transform opacity-0 scale-75"
          enter-to-class="opacity-100 scale-100">

          <div v-if="selectedOption == 'maths'">
            <MathsComponent @formule-generale="getFormuleGenerale" />
          </div>
        </transition>
        <transition enter-active-class="delay-100 duration-300 ease-out" enter-from-class="transform opacity-0 scale-75"
          enter-to-class="opacity-100 scale-100">

          <div v-if="selectedOption == 'science'">
            <ScienceComponent @formule-generale="getFormuleGenerale" />
          </div>
        </transition>
        <transition enter-active-class="delay-100 duration-300 ease-out" enter-from-class="transform opacity-0 scale-75"
          enter-to-class="opacity-100 scale-100">

          <div v-if="selectedOption == 'tech'">
            <TechniquesComponent @formule-generale="getFormuleGenerale" />
          </div>
        </transition>
        <transition enter-active-class="delay-100 duration-300 ease-out" enter-from-class="transform opacity-0 scale-75"
          enter-to-class="opacity-100 scale-100">

          <div v-if="selectedOption == 'lettres'">
            <LettresComponent @formule-generale="getFormuleGenerale" />
          </div>
        </transition>
        <transition enter-active-class="delay-100 duration-300 ease-out" enter-from-class="transform opacity-0 scale-75"
          enter-to-class="opacity-100 scale-100">

          <div v-if="selectedOption == 'eco'">
            <EconomieComponent @formule-generale="getFormuleGenerale" />
          </div>
        </transition>
        <transition enter-active-class="delay-100 duration-300 ease-out" enter-from-class="transform opacity-0 scale-75"
          enter-to-class="opacity-100 scale-100">

          <div v-if="selectedOption == 'oldinfo'">
            <OldInfoComponent @formule-generale="getFormuleGenerale" />
          </div>
        </transition>
        <transition enter-active-class="delay-100 duration-300 ease-out" enter-from-class="transform opacity-0 scale-75"
          enter-to-class="opacity-100 scale-100">

          <div v-if="selectedOption == 'sport'">
            <SportComponent @formule-generale="getFormuleGenerale" />
          </div>
        </transition>
        <transition enter-active-class="delay-100 duration-300 ease-out" enter-from-class="transform opacity-0 scale-75"
          enter-to-class="opacity-100 scale-100">

          <div v-if="fGenerale != null" class="mt-10">
            <span class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#74ebd5] to-[#ACB6E5]">Votre
              formule générale (FG) est {{ fGenerale }}.</span>
          </div>
        </transition>
      </div>
      <div class="relative bottom-[-2.25rem]">
        <span class="text-sm">Website made by Med Dhiaa "Lux" Jaziri with love ❤️.</span>
      </div>
    </div>
  </div>
</template>

<script>
// normal <script>, executed in module scope (only once)
// runSideEffectOnce()

export default {

  data() {
    return {
      selectedOption: "",
      fGenerale: null
    }
  },

  methods: {
    onSelectOption(option) {
      this.fGenerale = null;
      this.selectedOption = option.value;
      console.log(this.selectedOption);
    },

    getFormuleGenerale(fg) {
      this.fGenerale = fg;
      console.log(this.fGenerale);
    },

    scrollFunc() {
      if(navigator.userAgent.indexOf("Firefox") === -1){
        let canScroll = true;
        let scrollContainer = document.querySelector('.scrollChrome')
        scrollContainer.addEventListener('wheel', function (e) {
          console.log(canScroll)
          if (canScroll) {
            scrollContainer.scrollBy(0, e.deltaY);
            canScroll = false;
            setTimeout(() => {
              canScroll = true;
            }, 500);
          }
          e.preventDefault();
        }, { passive: false });
      }
    }
  },

  mounted() {
    this.scrollFunc();
  }
}
</script>

<script setup>
import ListMenuComponent from './components/ListMenuComponent.vue'
import InfoComponent from './components/InfoComponent.vue'
import MathsComponent from './components/MathsComponent.vue';
import ScienceComponent from './components/ScienceComponent.vue';
import TechniquesComponent from './components/TechniquesComponent.vue';
import LettresComponent from './components/LettresComponent.vue';
import EconomieComponent from './components/EconomieComponent.vue';
import OldInfoComponent from './components/OldInfoComponent.vue';
import SportComponent from './components/SportComponent.vue';
import MouseAnimation from './components/MouseAnimation.vue';
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.scrollChrome {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -ms-scroll-snap-type: mandatory;
}

.scrollChild {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
</style>