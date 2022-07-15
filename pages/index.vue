<template>
  <div class="overflow-x-hidden">
    <hero/>
      <svg class="w-full -mb-2" viewBox="0 0 1440 249" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 105.176L60 75.2129C120 45.2497 240 -14.6769 360 3.30105C480 21.279 600 117.162 720 135.14C840 153.117 960 93.1909 1080 69.2203C1200 45.2497 1320 57.235 1380 63.2276L1440 69.2203V249H1380C1320 249 1200 249 1080 249C960 249 840 249 720 249C600 249 480 249 360 249C240 249 120 249 60 249H0V105.176Z" fill="#0F1D50" fill-opacity="0.97"/>
      </svg>
    <div class="bg-gradient-to-b from-[#0F1D4F] min-h-screen group -mt-[24px]  md:-mt-[65px] lg:-mt-[90px]">

     <div class="max-w-[1440px] m-auto px-6 md:px-12 lg:px-52">
        <div class="relative z-10 lg:mt-0">
            <div class="w-2/12 md:w-3/12 -mb-[60px] md:-mb-28 lg:-mb-36 md:-ml-28 group-hover:scale-125 md:group-hover:scale-95 transition-all ease-out duration-500">
              <img class="w-full group-hover:-translate-y-8 transition-all ease-out duration-500" src="~/assets/images/shapes1.png" alt="">
            </div>
            <div class="mx-auto group-hover:scale-95 md:group-hover:scale-90 transition-all ease-out duration-500">
               <img class="m-auto border-2 border-gray-500 rounded-xl p-4" src="~/assets/images/ilustration.png" alt=""/>
            </div>
            <div class
            ="relative w-1/3 md:w-5/12 ml-auto -mt-32 -space-x-16 md:-mt-[16rem] lg:-mt-[24rem] ">
              <img class="w-full translate-x-[5rem] md:translate-x-[15rem] group-hover:translate-x-[0.7rem] md:group-hover:translate-x-[5.7rem] transition-all ease-out duration-500" src="~/assets/images/shapes2.png" alt="">
            </div>
        </div>
     </div>

      <div class="container px-6 lg:px-8 mt-52 md:mt-96">
          <h2 class="font-semibold text-2xl md:text-4xl text-center">Browse for <br><span class="text-gradient">awesome projects</span></h2>
          <p class="text-base text-gray-400 text-center mt-2">Pick the website template</p>
          <ProductCard class="mt-14"/>

          <h2 class="font-semibold text-2xl md:text-4xl text-center mt-40">Free Landing Page Templates <br> for <span class="text-gradient">awesome projects</span></h2>
          <card class="mt-14"/>
    
      
      </div>

      
    
    </div>

  </div>
</template>

<script>
import Hero from "~/components/Hero.vue"
import Card from "~/components/Card.vue"
import ProductCard from "~/components/ProductCard.vue"


export default {
   components: { Hero,Card,ProductCard }, 
  name: 'IndexPage',
}
</script>
