<template>
  <div class="home-page">
    home
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{

    }
  },
  mounted(){
    this.fetchData()
  },
  methods:{
    fetchData(){
      this.axios.get('/API/getUserList').then(res =>{
        console.log(res);
      })
    }
  },
}
</script>

<style lang="scss" scoped>

</style>