import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store'; // Import your Vuex store

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ExpenseList',
      component: () => import('@/components/expenses/ExpenseList.vue'),
    },
    {
      path: '/expenses/create',
      name: 'CreateExpense',
      component: () => import('@/components/expenses/ExpenseForm.vue'),
      meta: { requiresAuth: true } 
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/auth/RegistrationForm.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      meta: { requiresGuest: true },
      component: () => import('@/components/auth/LoginForm.vue'),
    },
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.auth.isAuthenticated;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest);

  if (requiresAuth && !isAuthenticated) {
    // If the route requires authentication and the user is not authenticated,
    // redirect to the login page
    next('/login');
  } else if (requiresGuest && isAuthenticated) {
    // If the route requires a guest (unauthenticated user) and the user is authenticated,
    // redirect to the home page
    next('/');
  } else {
    // Otherwise, allow the navigation to proceed
    next();
  }
});


export default router;
