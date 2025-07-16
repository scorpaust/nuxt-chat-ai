// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((_to, _from) => {
  const { isAuthenticated } = useAuth();

  // 2) se não estiver autenticado, redireciona para /login
  if (!isAuthenticated.value) {
    return navigateTo("/login");
  }
});
