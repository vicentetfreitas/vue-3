<template>
  <div class="options_wrapper">
    <EventosOptions />

    <!-- <RenderizacaoCondicionalOptionsApi />
    <hr>
    <ListandoDadosOptionsApi />
    <hr>
    <OptionsComponent /> -->
  </div>
</template>
<script>
import EventosOptions from '../components/EventosOptions.vue'
import ListandoDadosOptionsApi from '../components/ListandoDadosOptionsApi.vue'
import OptionsComponent from '../components/OptionsComponent.vue'
import RenderizacaoCondicionalOptionsApi from '../components/RenderizacaoCondicionalOptionsApi.vue'
export default {
  components: { OptionsComponent, ListandoDadosOptionsApi, RenderizacaoCondicionalOptionsApi, EventosOptions },

}
</script>