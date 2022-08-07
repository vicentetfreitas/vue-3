<template>
  <div>
    <h1>#17 - Renderização condicional</h1>
    <span v-if="showSpan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum itaque ex, saepe maxime
      expedita totam
      tempora, quasi iure distinctio possimus qui labore repudiandae quis quos repellat earum quaerat laborum!</span>
    <span v-else>Coloque-me falso que outro texto irá aparecer.</span>
    <span v-show="showSpanVShow">Essa tag tem uma diretiva v-show.</span>
  </div>
</template>
<script>
export default {
  name: "RenderizacaoCondicionalOptionsApi",
  data() {
    return {
      showSpan: false,
      showSpanVShow: true
    }
  },
  mounted() {
    console.log('showSpan value = ' + this.showSpan);
    console.log('showSpanVShow value = ' + this.showSpanVShow);

  }
}
</script>