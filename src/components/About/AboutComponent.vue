<template>
  <div class="max-w-[1140px] m-auto">
    <div class="flex flex-col-reverse items-center xl:flex-row">
      <img src="../../assets/img/about.jpg" width="600vw" height="100%" alt="logo" class="" style="border-radius: 28px;"  />

      <div
        class="flex flex-col justify-center items-center text-center xl:justify-end xl:items-end xl:text-right pl-0 lg:pl-0 xl:pl-5 gap-4"
      >
        <h3
          class="text-white text-[32px] sm:text-[32px] md:text-[32px] lg:text-[48px] xl:text-[48px] font-syne font-bold leading-none w-full xl:w-[516px]"
        >
          Cine suntem noi?
        </h3>

        <p
          class="text-silver font-rubik text-base font-normal leading-[154.5%] tracking-[0.99px]"
        >
          Liga Studenților de la Facultatea de Automatică și Calculatoare, o
          comunitate înființată în 2005, pune accent pe suport și dezvoltare
          pentru fiecare student. Nu doar că ne apărăm drepturile studenților,
          dar ne și distrăm organizând diverse activități, de la seri de jocuri
          <!-- până la evenimente care sprijină cauze nobile. <br><br>Iată câteva dintre
          evenimentele organizate anual: - Let's Start a Christmas Story, unde
          am vândut prăjituri făcute de noi și banii i-am donat asociației "O
          voce pentru autism" din Iași. - Olimpiada AC, în care studenții se
          întrec în diverse jocuri sportive și banii din taxele de participare
          sunt folosiți pentru a ajuta un student al facultății care are nevoie
          de o proteză pentru picior, și un copil de doar 7 ani diagnosticat cu
          autism. - IT Marathon, o competiție de punere în practică a
          abilităților tehnice, destinată tuturor studenților și elevilor care
          vor să-și măsoare cunoștințele. Acest eveniment include o serie de
          concursuri care vizează diferite domenii din sfera IT, propuse și
          jurizate de membrii reprezentanți ai companiilor partenere. -->
        </p>

        <a href="https://lsaciasi.ro" class="mt-[30px] mb-[32px] xl:mb-0">
          <button
            class="green-button flex gap-[10px] text-white text-center font-rubik text-[16px] font-semibold tracking-wider rounded-full bg-[#213B2A]"
          >
            AFLA MAI MULTE
            <ArrowIcon />
          </button>
        </a>
      </div>
    </div>

    <div
      class="py-[164px] flex flex-col items-center xl:flex-row"
      id="inscrieri"
    >
      <div
        class="flex flex-col justify-center items-center text-center xl:justify-start xl:items-start xl:text-left pr-0 lg:pr-0 xl:pr-5 gap-4"
      >
        <h3
          class="text-white text-[32px] sm:text-[32px] md:text-[48px] lg:text-[48px] xl:text-[48px] font-syne font-bold leading-none w-full xl:w-[516px]"
        >
          Inscrieri Olimpiada <span class="text-yellow">AC</span> 2026
        </h3>

        <p
          class="text-silver font-rubik text-base font-normal leading-[154.5%] tracking-[0.99px]"
        >
        Olimpiada AC este un eveniment caritabil care aduce împreună sporturile îndrăgite de studenți și ne apropie de spiritul de echipă. Indiferent de jocul ales sau de nivelul de experiență, toți participanții contribuie la același scop: acela de a face bine prin implicare.
Prin această serie de activități sportive, ne propunem să strângem fonduri pentru Centrul Maternal „Sf. Elena”  Fiecare participare înseamnă un pas înainte în sprijinirea mamelor și copiilor care au nevoie de ajutor.
Fiecare joc ales contribuie la sprijinul acestei cauze și demonstrează că, împreună, putem face diferența. ✨
Dacă doriți să ajutați această cauză, o puteți face aici cu mențiunea „Donație OlimpiadaAC”
        </p>

        <a href="https://forms.gle/7rJrXiMvm7Maryim8" class="mt-[30px] mb-[32px] xl:mb-0">
          <button
            class="green-button flex gap-[10px] text-white text-center font-rubik text-[16px] font-semibold tracking-wider rounded-full bg-[#213B2A]"
          >
            INSCRIE-TE ACUM!
            <ArrowIcon />
          </button>
        </a>
      </div>

      <img src="../../assets/img/teren-1.png" alt="logo" class="" />
    </div>
  </div>
</template>


<script setup>
import ArrowIcon from "../../assets/icons/RightArrow.vue";
</script>
