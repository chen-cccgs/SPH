<template>
  <div>
   <h1>params:{{ $route.params.keyword }}</h1>
   <h1>query:{{ $route.query.key }}</h1>
  </div>
</template>

<script>
export default {
    name:'Search'
}
</script>

<style>

</style>