<script>
  import AppNavbar from '@/components/AppNavbar.vue';
  import AppSideBar from '@/components/AppSideBar.vue';
  
  export default {
    components: {
      AppNavbar,
      AppSideBar
    },
  };
</script>

<template>
  <div class="sb-nav-fixed">
    <AppNavbar />
    <div id="layoutSidenav">
     <AppSideBar /> 
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss" scoped>
</style>
