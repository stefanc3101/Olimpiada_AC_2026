<template>
  <div
    class="py-[164px] flex flex-col justify-center items-center text-center w-full h-dvh"
  >
    <h1
      class="text-white text-[48px] sm:text-[48px] md:text-[72px] lg:text-[72px] xl:text-[72px] font-syne font-bold leading-none"
    >
      Olimpiada <span class="text-yellow">AC</span> <br />
      by LSAC
    </h1>

    <div class="pt-[64px]">
      <a href="https://forms.gle/WQQ1tN5SxNyusatb9">
        <button
          class="green-button flex justify-center items-center gap-[10px] text-white text-center font-rubik text-[13px] font-bold uppercase tracking-wider rounded-full bg-[#213B2A]"
        >
          INSCRIE-TE ACUM! <ArrowIcon />
        </button>
      </a>
    </div>
  </div>
</template>


<style>
  .green-button{
    transition: all 0.2s ease-in-out;
    border: 2px solid #213B2A;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .green-button:hover{
    gap: 16px;
    background: rgba(0,0,0,0);
  }


  /* .blob-background{
    height: 350px;
    width: 1000px;
    background: url("./../../assets/img/white-blob.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -100px;
    left: -200px;
    z-index: 0;
  } */
</style>

<script setup>
  import ArrowIcon from "../../assets/icons/RightArrow.vue";
</script>
