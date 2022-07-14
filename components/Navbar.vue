<template>
    <header :class="{'onScroll': !view.topOfPage}">
        <div class="flex justify-between items-center py-3 md:py-8 px-8">
            <a class="z-50" href="/">
                <img  src="~/assets/images/logo.svg" alt="">
            </a>

            <input class="peer hidden" type="checkbox" name="hamburger" id="hamburger" />
            <label class="peer-checked:hamburger block relative cursor-pointer lg:hidden border-2 border-gray-300 peer-checked:border-2 peer-checked:border-white p-3 rounded-md transition-all" for="hamburger">
               <div class="m-auto w-6 h-0.5 rounded bg-gray-300 transition-all duration-300"></div>
               <div class="m-auto mt-2 w-6 h-0.5 rounded bg-gray-300 transition-all duration-300"></div>
            </label>

            <!-- Menu Navbar -->
            <div class="nav-menu">
               <div class=" lg:bg-transparent pt-32 lg:pt-0 flex flex-col lg:items-center lg:flex-row px-6 space-y-4 lg:space-y-0 lg:space-x-12 z-40">
                  <NuxtLink class="text-white hover:text-gray-500 transition-all duration-300 ease-out" to="/">Home</NuxtLink>
                  <NuxtLink class="text-white hover:text-gray-500 transition-all duration-300 ease-out" to="/category">Category</NuxtLink>
        
               </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data () {
    return {
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  },
}
</script>