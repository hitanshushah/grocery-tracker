// middleware/auth.global.ts
import { defineNuxtRouteMiddleware, navigateTo } from '#app'
import { useAuth } from '#imports'

export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/api/auth')) {
    return
  }

  if (to.path === '/login') {
    return
  }

  const { status } = useAuth()

  if (status.value === 'unauthenticated' && to.path !== '/') {
    return navigateTo('/login')
  }

  if (status.value === 'authenticated' && to.path === '/login') {
    return navigateTo('/')
  }
})