<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  h1 {
    padding-top: 1cm;
    display: flex;
    left: 50%;
    /* width: 100%; */
    text-transform: uppercase;
  }
</style>
