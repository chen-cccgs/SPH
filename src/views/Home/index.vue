<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListContainer from "./listContainer";
import Recommend from "./recommend";
import Rank from "./rank";
import Like from "./like";
import Floor from "./floor";
import Brand from "./brand";
export default {
    name:'Home',
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand,
    },
    computed:{
      ...mapState({
        floorList: state => state.home.floorList
      })
    }
}
</script>

<style>

</style>