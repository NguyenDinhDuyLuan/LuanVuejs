import { createApp } from "vue";
import App from "./Test.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Test.css";

library.add(faUserSecret);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
