import HomePage from "../view/HomePage.vue";


const router = [
  {
    path: "/", // khúc này là mình quy định link của page mình muốn web để trang nào trước thì mình để path là / nha
    name: "homepage", // này là quy định tên của page
    component:() => import ('../view/HomePage.vue'), // đây là cách import trực tiếp nha  khúc này là nội dung hiển hthij của page ví dụ giờ chị sẽ tạo 1 trang view , giờ mình import nó vào nha
  },
];
export default router;

// export default new Router({
//   routes: [
//     {
//       path: '/', // khúc này là mình quy định link của page mình muốn web để trang nào trước thì mình để path là / nha
//       name: 'Hello', // này là quy định tên của page
//       component: HomePage // khúc này là nội dung hiển hthij của page ví dụ giờ chị sẽ tạo 1 trang view , giờ mình import nó vào nha
//     },

//   ]
// })

// trang này là định tuyến link cho page á , hiểu đơn giảnlaf cấu hình link đến các page khác nhau
