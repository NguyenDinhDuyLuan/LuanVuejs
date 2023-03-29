import { createApp } from "vue";
import App from "./Test.vue";
import router from "./router"

/* import the fontawesome core */


/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';





/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Test.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import BootstrapVue3 from "bootstrap-vue-3";

library.add(fas, fab, far); // bên chị k cần import nó vẫn chạy bt mà bên code em j chạy 
// :v 



const app = createApp (App);

app.use(BootstrapVue3);
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
