<template>
<div id="#root">
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 60px;
  }

  body, input, button{
    font: 16px ;
    font-family: 'Roboto';
  }
</style>
