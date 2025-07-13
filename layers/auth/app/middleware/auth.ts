// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to, _from) => {
  const { isAuthenticated } = useAuth();

  // 1) se for rota de login, deixa passar
  if (to.path === "/login") {
    return;
  }

  // 2) se não estiver autenticado, redireciona para /login
  if (!isAuthenticated.value) {
    return navigateTo("/login");
  }
});
