<template>
  <div id="app">
    <!--Navigációs sáv-->
    <Navbar/>
    <!--Itt jelennnek meg az útvonalak tartalmai-->
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default{
  name: 'App',
  components:{
    Navbar,
  },
}
</script>