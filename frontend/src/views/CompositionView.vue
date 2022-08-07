<template>
  <div class="composition_wrapper">
    <DireitivaVBindEClasseComCondicaoCompositionApi />
    <hr>
    <RenderizacaoCondicionalCompositionApi />
    <hr>
    <ListandoDadosCompositionApi />
    <hr>
    <CompositionComponent />
    <hr>
    <ListagemDinamicaComponent />
    <hr>

  </div>
</template>
<script setup>
import CompositionComponent from '../components/CompositionComponent.vue';
import DireitivaVBindEClasseComCondicaoCompositionApi from '../components/DireitivaVBindEClasseComCondicaoCompositionApi.vue';
import ListagemDinamicaComponent from '../components/ListagemDinamicaComponent.vue';
import ListandoDadosCompositionApi from '../components/ListandoDadosCompositionApi.vue';
import RenderizacaoCondicionalCompositionApi from '../components/RenderizacaoCondicionalCompositionApi.vue';

</script>
