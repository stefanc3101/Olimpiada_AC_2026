<template>
  <app-header>
    <nav>
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
      >
        <a href="#">
          <app-logo class="flex flex-row items-center gap-[10px]">
            <img
              src="../../assets/img/logo.png"
              alt="logo"
              class="w-[32px] h-[32px]"
            />

            <div class="h-[40px] bg-yellow w-[1px]"></div>

            <span
              class="text-white font-syne text-[16px] leading-none font-bold"
              >Olimpiada AC</span
            >
          </app-logo>
        </a>

        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
          :aria-expanded="isMenuOpen.toString()"
        >
          <BurgerIcon />
        </button>
        <div v-show="isMenuOpen" class="w-full md:w-auto" id="navbar-default">
          <ul
            class="nav-links text-gray font-rubik text-base font-medium uppercase flex items-center justify-center flex-col gap-[15px] p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:gap-[0px]"
          >
            <li @click="closeMenu">
              <a href="#inscrieri">INSCRIERI</a>
            </li>
            <li @click="closeMenu">
              <a href="#calendar">CALENDAR</a>
            </li>
            <li @click="closeMenu">
              <a href="#testimonial">TESTIMONIAL</a>
            </li>

            <li @click="closeMenu">
              <a href="#contact">
                <button
                  class="header-button flex text-white opacity-80 text-[14px] items-center px-[35px] py-[15px] justify-center gap-[10px] rounded-full border-2 border-white border-opacity-30 bg-opacity-50 bg-black hover:bg-opacity-100 focus:outline-none"
                >
                  CONTACT
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </app-header>
</template>

<script setup>
import { ref } from "vue";
import BurgerIcon from "../../assets/icons/BurgerIcon.vue";

const isMenuOpen = ref(false);
let closeMenu = ref(() => {});

if (window.innerWidth < 768) {
  isMenuOpen.value = false;

  closeMenu = () => {
    isMenuOpen.value = false;
  };
} else {
  isMenuOpen.value = true;
}

const resize = () => {
  if (window.innerWidth < 768) {
    isMenuOpen.value = false;

    closeMenu = () => {
      isMenuOpen.value = false;
    };
  } else {
    isMenuOpen.value = true;

    closeMenu = () => {};
  }
};

window.onresize = resize;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>


<style>

.nav-links > *:not(:last-child)::after {
  position: absolute;
  content: ' ';
  width: 0px;
  height: 2px;
  background: #fff;
  bottom: -4px;
  left: 50%;
  transform: translate(-50%, 0);
  transition: all 0.2s ease-in-out;
}

.nav-links > *:hover:not(:last-child)::after {
  width: 100%;
}


.nav-links >*{
  position: relative;
}

.header-button {
  cursor: pointer;
}

.header-button:hover {
  background: rgba(255, 255, 255, 0.3);
}


</style>