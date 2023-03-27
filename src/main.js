import { createApp } from "vue";
import App from "./Test.vue";
import router from "./router"

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Test.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import BootstrapVue3 from "bootstrap-vue-3";

library.add(faUserSecret);



const app = createApp (App);

app.use(BootstrapVue3);
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
