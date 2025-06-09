// server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'

const config = useRuntimeConfig()

export default NuxtAuthHandler({
  secret: config.AUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  providers: [
    {
      id: 'authentik',
      name: 'Authentik',
      type: 'oauth',
      clientId: config.AUTHENTIK_CLIENT_ID,
      clientSecret: config.AUTHENTIK_CLIENT_SECRET,
      issuer: config.AUTHENTIK_ISSUER,
      wellKnown: `${config.AUTHENTIK_ISSUER}/.well-known/openid-configuration`,
      authorization: {
        params: {
          scope: 'openid email profile'
        }
      },
      profile(profile: any) {
        return {
          id: profile.sub,
          name: profile.name || profile.preferred_username || '',
          email: profile.email,
          image: profile.picture ?? ''
        }
      }
    }
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken
      }
    }
  }
})
