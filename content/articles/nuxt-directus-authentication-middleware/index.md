---
title: The Ultimate Nuxt Directus Authentication Middleware
publishdate: 2023-09-26
tags:
- Technology
- Tutorials
summary: The Nuxt Directus docs give you a basic auth middleware, but it's got some quirks. Here's how to bulletproof it.
images:
- https://res.cloudinary.com/ypertex/image/upload/c_fill,dpr_auto,f_auto,g_auto,h_630,q_auto,w_1200/7c9e5b70-cd7b-48cb-9bf4-f5e7b2850192
---

## Why Nuxt and Directus are a Match Made in Dev Heaven

Starting an app from scratch is like reinventing the wheel—unnecessary and time-consuming. That's why we have killer frameworks like [Nuxt](https://nuxt.com/) (<cite>"The Intuitive Web Framework"</cite>) for frontend magic and [Directus](https://directus.io/) (<cite>"The backend to build anything or everything"</cite>) for backend wizardry. I've been using both to build [SCOR·E](https://scor-e.online/), a decision-making app that's as slick as they come.

But here's the kicker: There's a package named [Nuxt Directus](https://www.nuxt-directus.site/) that marries these two like peanut butter and jelly. Sweet, right?

## The Good, the Bad, and the Ugly of Nuxt Directus

Nuxt Directus is a lifesaver, no doubt. It lets you pull and push data from your Directus backend to your Nuxt frontend like a pro. User signup, login, you name it—it's got you covered.

But let's keep it real: the docs are kinda basic. They offer an example middleware to redirect unauthenticated users to a login page, which is crucial for any app with restricted access. Problem is, this middleware has a nasty habit of logging you out when you least expect it.

{{<figure src="7c9e5b70-cd7b-48cb-9bf4-f5e7b2850192" />}}

## The Middleware You've Been Waiting For

Enough talk. Here's a middleware that's not just a band-aid but a full-on cure. It'll protect your routes and keep your login sessions intact:

```typescript
export default defineNuxtRouteMiddleware(async (to, _from) => {
  const { token_expired, checkAutoRefresh } = useDirectusToken()

  // Check if the token's expired
  if (token_expired.value) {
    try {
      // Attempt to refresh the token
      await checkAutoRefresh()
      // If still expired, off to the login page
      if (token_expired.value) {
        return navigateTo('/login')
      }
    } catch (error) {
      // Handle any refresh errors here
      console.error("Couldn't refresh token:", error)
    }
  }
  // If the token's good, carry on
})
```

To use this gem, slap it onto any Nuxt page that needs authentication:

```typescript
<script setup lang="ts">
definePageMeta({
  middleware: ['private']
})
</script>
```

That's it, you're good to go.

## Summary

So, there you have it—a rock-solid fix for the authentication middleware in Nuxt Directus. The out-of-the-box example might leave you scratching your head with random logouts, but this solution is your ticket to a hassle-free user experience. Implement this, and you can focus on building out the cool parts of your app without worrying about unexpected session timeouts.
