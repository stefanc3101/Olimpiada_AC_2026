<script>
export default {
  props: {
    title: String,
    text: String,
    imageSrc: String,
    data: String,
    taxa: String,
    locatie: String,
  },
};
</script>

<template>
  <app-card>
    <div class="image-overlay">
      <div class="content">
        <div class="h-[664px] smd:h-[664px] w-full image-content" :style="{ backgroundImage: 'url(' + imageSrc + ')' }"></div>

        <div class="content-details">
          <div class="content-text">
            <h4>{{ title }}</h4>
            <p>
              {{ text }}
            </p>
          </div>
          <a href="#">
            <button
              class="content-button mt-[16px] flex font-rubik text-[#E9C65C] text-[14px] items-center font-semibold justify-center gap-[10px] rounded-full border-2 border-[#E9C65C] bg-transparent focus:outline-none transition duration-300 hover:bg-[#E9C65C] hover:text-black"
            >
              INSCRIE-TE ACUM!
            </button>
          </a>
        </div>
      </div>
    </div>

    <div class="mt-[16px]">
      <div class="flex flex-row justify-left items-center gap-[32px]">
        <h4
          class="text-white font-syne text-[24px] font-bold leading-[133.333%]"
        >
          {{ title }}
        </h4>

        <div class="w-[48px] h-px bg-[#213B2A]"></div>
      </div>

      <div class="mt-[16px] flex gap-8">
        <p
          class="text-silver font-rubik text-base font-normal leading-[137.5%] tracking-tighter"
        >
          Data:&nbsp;
        </p>
        <span
          class="text-white font-Rubik text-base font-normal leading-[137.5%] tracking-[0.25px]"
          >{{ data }}</span
        >
      </div>
      <div class="flex gap-9">
        <p
          class="text-silver font-rubik text-base font-normal leading-[137.5%] tracking-tighter"
        >
          Taxa:
        </p>
        <span
          class="text-white font-Rubik text-base font-normal leading-[137.5%] tracking-[0.25px]"
          >{{ taxa }}</span
        >
      </div>
      <div class="flex gap-8">
        <p
          class="text-silver font-rubik text-base font-normal leading-[137.5%] tracking-tighter"
        >
          Unde:
        </p>
        <span
          class="text-white font-Rubik text-base font-normal leading-[137.5%] tracking-[0.25px]"
          >{{ locatie }}</span
        >
      </div>
    </div>
  </app-card>
</template>

<style>
.content {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.content .content-overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content-details {
  font-family: "Syne", sans-serif;
  position: absolute;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  border-radius: 16px;
  padding: 32px;
}

.content-details::before {
  content: " ";
  width: 20px;
  height: 20px;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  bottom: -20px;
  right: -20px;
  border-radius: 50%;
  transition: height 0.3s ease-in-out, width 0.3s ease-in-out,
    border-radius 0.05s ease-in-out;
}

.content:hover .content-details::before {
  height: 100%;
  width: 100%;
  border-radius: 16px;
  bottom: 0;
  right: 0;
}

.content:hover .content-details {
  display: flex;
}

.content:hover .content-text {
  transform: translate(0, 0);
}

.content:hover .content-button {
  transform: translate(0, 0);
}

.content-details h4 {
  color: #fff;
  font-family: Syne;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 90% */
  letter-spacing: 0.25px;
}

.content-text {
  transform: translate(0, -1000px);
  transition: all ease-in-out 0.5s;
}

.content-button {
  transform: translate(-200%, 0);
  transition: all ease-in-out 0.5s;
  padding: 12px 24px;
}

.content-details p {
  margin-top: 16px;
  font-size: 16px;
  color: #bebfc4;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.25px;
}

.image-overlay {
  overflow: hidden;
}

.image-content {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  /* border: 2px solid rgba(255,255,255,0.3); */
}
</style>
