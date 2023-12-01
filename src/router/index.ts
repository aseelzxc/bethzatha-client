import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import AddPatient from "../views/AddPatient.vue";
import ManagePatients from "../views/ManagePatients.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/add_patient",
      name: "add_patient",
      component: AddPatient,
    },
    {
      path: "/patients",
      name: "manage_patient",
      component: ManagePatients,
    },
  ],
});

export default router;
