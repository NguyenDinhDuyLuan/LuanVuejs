import { createApp } from "vue";
import App from "./Test.vue";
import router from "./router/index.js"

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Test.css";

library.add(faUserSecret);
// à em cài vue 3 mà đúng k ? Đúng rồi ạ 


const app = createApp (App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
// đợi chị chút bên nhóm a Tân gọi nha .Dạ