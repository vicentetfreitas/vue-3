<template>
  <div>
    <h1>Options API</h1>
    <section>
      <h2>Exemplo de componente reativo</h2>
      <h3>Entenda a diferença entre Options e Composition API</h3>
      <button v-on:click="count++">Add {{ count }}</button>
      <br>
      <button v-on:click="adicionar">Adicionar com função {{ contador }}</button>
    </section>
    <hr>
    <section>
      <h2>#11 - Ciclo de vida de um componente - Teoria</h2>
    </section>
    <hr>
    <section>
      <h2>#12 - Ciclo de vida de um componente - Prática</h2>
      <button v-on:click="adicionarUpdated">updated: {{ contador2 }}</button>
      <br>
      <div v-if="showHeader">
        Propriedade Reativa com v-if
      </div>
      <button v-on:click="showHeader = !showHeader">Toggle header</button>
    </section>
    <hr>
    <section>
      <h2>#13 - Reatividade</h2>
      String: {{ userName }}
      <br>
      Lista: {{ esportesPredileto }}
      <br>
      Objeto: {{ carro }}
      <br>
      Objeto elemento: {{ carro.cor }}
      <br>
      Array de Objetos {{ users }}
      <br>
      Reatividade com objetos v-for
      <ul>
        <li v-for="user in users">{{ user.firstName }} - {{ user.age }}</li>
      </ul>
    </section>
    <hr>
  </div>
</template>
<script>
export default {
  name: "OptionsComponent",
  data() {
    return {
      count: 0,
      contador: 0,
      contador2: 0,
      showHeader: false,
      userName: 'Vicente',
      esportesPredileto: ['Futebol', 'Skate', 'Natação'],
      carro: {
        cor: 'Preto',
        modelo: 'Nacional',
        ano: 2020,
        tipo: 'esporte'
      },
      users: [{
        firstName: 'Vicente',
        age: 30
      },
      {
        firstName: 'Jessica',
        age: 30
      }]
    }
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    adicionarUpdated() {
      this.contador2--;
    }

  },
  mounted() {
    this.carro;
    this.userName;
    console.log(`<p>The component is now mounted.</p>`);
    console.log(`<p>mounted: the mounted hook can be used to run code after component has finished the initial rendering and created the DOM.</p>`);
    // this.interval = setInterval(() => {
    //   console.log('mounted');
    // }, 1000)
  },
  updated() {
    console.log(`<p>updated: </p>`)
  },
  unmounted() {
    clearInterval(this.interval);
    console.log('unmounted');
  }
}
</script>