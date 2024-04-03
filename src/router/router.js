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
      meta: { requiresAuth: true } // Add meta field for routes that require authentication
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/auth/RegistrationForm.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/auth/LoginForm.vue'),
    },
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.auth.isAuthenticated;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // If the route requires authentication and the user is not authenticated,
    // redirect to the login page
    if (!isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
