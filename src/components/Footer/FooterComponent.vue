<template>
  <footer class="w-full py-[42px] xl:py-[83px] bg-[#131313]" id="contact">
    <div class="flex flex-col gap-[45px] smd:gap-[96px]">
      <div class="text-center">
        <p
          class="text-[20px] md:text-[24px] font-syne font-bold text-yellow leading-none"
        >
          Get in Touch With Us
        </p>
        <h3
          class="text-[32px] md:text-[32px] lg:text-[64px] xl:text-[64px] font-syne font-bold text-white"
        >
          lsaciasi@gmail.com
        </h3>
      </div>

      <div
        class="flex flex-wrap xl:justify-between px-[35px] lg:px-[35px] xl:px-[146px]"
      >
        <div
          class="flex flex-row justify-between sm:justify-start md:justify-start xl:justify-center items-center gap-[10px] w-full md:w-1/2 xl:w-auto"
        >
          <img
            class="h-[64px] w-[64px] object-cover"
            alt="Olimpiada ac"
            src="../../assets/img/footer-logo.png"
          />
          <div class="bg-yellow h-16 w-[1px]" />
          <span
            class="text-white font-syne font-semibold text-[24px] tracking-normal leading-none relative inline"
          >
            Olimpiada AC
          </span>
        </div>

        <div
          class="flex flex-col justify-start items-start mt-[32px] md:mt-0 md:justify-end md:items-end xl:justify-center xl:items-center gap-[10px] w-full md:w-1/2 xl:w-auto"
        >
          <span
            class="text-white font-syne font-semibold text-[24px] tracking-normal leading-none relative inline"
          >
            Socials
          </span>

          <ul class="flex flex-row gap-[8px] xl:gap-[10px] links">
            <li>
              <a href="https://www.facebook.com/lsac.is" target="_blank">
                <FacebookIcon class="w-[24px] h-[24px] xl:w-auto xl:h-auto" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lsaciasi/" target="_blank">
                <InstagramIcon class="w-[24px] h-[24px] xl:w-auto xl:h-auto" />
              </a>
            </li>
            <li>
              <a href="https://lsaciasi.ro/" target="_blank">
                <img
                  :src="lsacWhiteLogo"
                  alt="LSAC"
                  class="h-[24px] w-auto xl:h-[36px] transition-transform duration-200 ease-in-out hover:scale-110"
                />
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-4 text-left mt-[32px] xl:mt-[0]">
          <div class="w-auto">
            <span
              class="bg-silver p-2 text-right leading-trim text-edge-cap font-syne font-bold text-base text-black"
              >Detalii Coordonator</span
            >
          </div>
          <div class="flex flex-row gap-4 items-center">
            <GuessIcon />
            <div
              class="text-white text-right leading-trim text-edge-cap font-syne font-bold text-[14px] md:text-base"
            >
              TBA
            </div>
          </div>
          <div class="flex flex-row gap-4 items-center">
            <PhoneIcon />
            <a href="tel:+TBA">
              <span
                class="text-white text-right leading-trim text-edge-cap font-syne font-bold text-[14px] md:text-base"
              >
                TBA</span
              >
            </a>
          </div>
          <div class="flex flex-row gap-4 items-center">
            <MailIcon />
            <a
              href="mailto:TBA@student.tuiasi.ro"
              target="_blank"
            >
              <span
                class="text-white text-right leading-trim text-edge-cap font-syne font-bold text-[14px] md:text-base"
              >
                TBA@student.tuiasi.ro</span
              >
            </a>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="h-[1px] bg-gray w-[100%] xl:w-[1145px]"></div>
      </div>

      <div class="text-center">
        <p class="text-white font-syne font-bold text-[24px] leading-none">
          © 2026. LSAC IASI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FacebookIcon from "../../assets/icons/FacebookIcon.vue";
import InstagramIcon from "../../assets/icons/InstagramIcon.vue";
import lsacWhiteLogo from "../../assets/img/logo_LSAC_WHITE.png";

import GuessIcon from "../../assets/icons/GuessIcon.vue";
import MailIcon from "../../assets/icons/MailIcon.vue";
import PhoneIcon from "../../assets/icons/PhoneIcon.vue";
</script>

<style>
.links svg {
  height: 36px;
  width: auto;
  transition: all 0.2s ease-in-out;
}

.links svg:hover {
  transform: scale(1.2);
}
</style>
