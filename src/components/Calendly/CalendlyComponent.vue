<script setup>
import SportCard from "./components/SportCard.vue";
import Fotbal from "./../../assets/img/football.jpeg";
import Biliard from "./../../assets/img/biliard.jpeg";
import PingPong from "./../../assets/img/pingpong.jpeg";
import Cros from "./../../assets/img/cros.jpg";
import Volei from "./../../assets/img/volei.jpeg";
import Chess from "./../../assets/img/chess.jpeg";
import Table from './../../assets/img/table.jpg'
import Remi from './../../assets/img/remi.jpeg'
import Baschet from './../../assets/img/baschet.jpeg'
import Badminton from './../../assets/img/badminton.jpg'
</script>

<template>
  <div class="max-w-[1140px] m-auto" id="calendar">
    <h1
      class="text-white text-center text-[32px] sm:text-[32px] md:text-[56px] lg:text-[56px] xl:text-[56px] font-syne font-bold leading-none w-full"
    >
      Calendar Eveniment <br />
      <span class="text-yellow">2026</span>
    </h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[40px] pt-[120px]"
    >
      <SportCard
        title="Fotbal"
        text="Run for your team and make it easy. Fotbalul este un joc de echipă - odată ce echipa și-a stabilit pozițiile și energia, mingea poate fi urmărită și ghidată spre un gol ce poate face diferența în ultimul minut."
        :imageSrc="Fotbal"
        locatie="Teren de fotbal sintetic - La Locomotivă"
        data="17 mai"
        taxa="MINIM 150 RON/echipă"
      />
      
       <SportCard
        title="Baschet 3x3"
        text="Baschetul 3x3 este un joc rapid și intens, care se joacă pe un teren mai mic și cu doar trei jucători pe fiecare echipă. Fiecare echipă încearcă să înscrie cât mai multe puncte într-un timp limitat, iar jocul este plin de acțiune și de momente spectaculoase."
        :imageSrc="Baschet"
        locatie="Sala De Sport - Tudor Vladimirescu"
        data="17 mai"
        taxa="MINIM 60 RON/echipă"
      />

      <SportCard
      title="Ping Pong"
      text="Mingile sunt aruncate, iar jucătorii răspund provocării adversarului. Ce trebuie să facă este să lase mingea în cădere o singură dată în terenul propriu și să o trimită imediat celuilalt. Câștigă cel care prezintă concentrare, reflexe agere și adună punctajul maxim: enjoy the ping-pong sound."
      :imageSrc="PingPong"
      locatie="Sala De Sport - Tudor Vladimirescu" 
      data="15 mai"
      taxa="MINIM 15 RON/jucător"
      />
      
      <SportCard
      title="Volei"
      text="Un salt pentru minge înseamnă un salt pentru echipă. Voleiul este mai mult decât un joc, este o legătură între coechipieri și un moment trăit împreună ce îi unește spre același scop: victoria echipei."
      :imageSrc="Volei"
      locatie="Sala De Sport - Tudor Vladimirescu"
      data="16 mai"
      taxa="MINIM 150 RON/echipă"
      />

      <SportCard
        title="Remi"
        text="Cu oponenți aleși sau nu, totul depinde de participant și de ce piese are pe tablă. Regulile sunt simple: scapă de duble și caută să cobori piesele pe tablă în suite sau perechi. Punctele adunate ne anunță câștigătorul, trust the process"
        :imageSrc="Remi"
        locatie="Sala de Lectură Camin T1-T2/T3-T4"
        data="16 mai"
        taxa="MINIM 15 RON/jucător"
      />

      <SportCard
        title="Sah"
        text="&quot;Chess is everything: art, science and sport.&quot;
         Pentru a câștiga este nevoie de câțiva pași pe tabla de șah, însă atunci când vezi o mișcare bună, caută una și mai bună, indiferent de ce piesă alegi să folosești împotriva adversarului tău.
        It&apos;s not over until you win."
        :imageSrc="Chess"
        locatie="Sala de Lectură Camin T1-T2/T3-T4"
        data="15 mai"
        taxa="MINIM 15 RON/jucător"
      />

      <SportCard
        title="Table"
        text="Old, but gold: jocul de table, învățat de mulți în copilărie, rămâne unul dintre cele mai dorite activități. Zarurile sunt aruncate, piesele se adună în casă și se scot afară. Competiția este strânsă: primul care reușește este declarat câștigător, be quick!"
        :imageSrc="Table"
        locatie="Sala de Lectură Camin T1-T2/T3-T4"
        data="16 mai"
        taxa="MINIM 15 RON/jucător"
      />

      <SportCard
        title="Cros 2.5km"
        text="Crosul este un joc de echipă care îmbină distracția cu mișcarea. Fie că alergi singur sau în echipă, crosul este o provocare care te va face să te simți bine și să te bucuri de fiecare pas. Alergarea este un mod excelent de a-ți menține sănătatea și de a-ți îmbunătăți starea de spirit."
        :imageSrc="Cros"
        locatie="Campus - Tudor Vladimirescu"
        data="16 mai"
        taxa="MINIM 15 RON/jucător"
      />
      <SportCard
        title="Badminton"
        text="Badmintonul este un joc de echipă care îmbină distracția cu mișcarea. Fie că alergi singur sau în echipă, badmintonul este o provocare care te va face să te simți bine și să te bucuri de fiecare pas. Alergarea este un mod excelent de a-ți menține sănătatea și de a-ți îmbunătăți starea de spirit."
        :imageSrc="Badminton"
        locatie="Sala De Sport - Tudor Vladimirescu"
        data="15 mai"
        taxa="MINIM 15 RON/jucător"
      />


      
    </div>
  </div>
</template>

<style>
.main-title {
  color: #2d2d2d;
  text-align: center;
  text-transform: capitalize;
  padding: 0.7em 0;
}
</style>
