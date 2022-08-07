//Importa o createApp que criará a aplicação
import { createApp } from 'vue'

// Importa o componente principal
import App from './App.vue'

// Importa as rotas
import router from './router'

//  Atribuí a constante app a criação da aplicação
const app = createApp(App)

// Usa rotas
app.use(router)
    // Monta a aplicação com id app no index.html
app.mount('#app')