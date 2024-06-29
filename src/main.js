import App from "/src/App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

import "/src/assets/css/style.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
