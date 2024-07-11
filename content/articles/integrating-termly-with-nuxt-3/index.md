---
title: Integrating Termly With Nuxt 3
publishdate: 2024-07-11
tags:
- Technology
- Tutorials
summary: Integrating Termly's consent management with Nuxt 3 turns out to be harder than just inserting a script tag. Here's a solution that resolves hydration mismatches and UI glitches, ensuring smooth functionality and user experience.
images:
- https://res.cloudinary.com/ypertex/image/upload/c_fill,dpr_auto,f_auto,g_auto,h_630,q_auto,w_1200/3ac9086c-7984-4089-811e-e9d3f7b96a47
aliases:
- ""
---

## The Challenge

When building modern web applications, consent management is crucial for compliance with privacy regulations like GDPR. [Termly](https://termly.io/) offers a popular solution, but integrating it with a server-side rendered (SSR) framework like [Nuxt 3](https://nuxt.com/) presents unique challenges.

Initially, adding Termly's script to [PrioMind](https://www.priomind.com/), our application powered by Nuxt 3, seemed straightforward:

```vue
// app.vue
<script setup lang="ts">
useHead({
  script: [
    {
      src: "https://app.termly.io/resource-blocker/[yourId]",
      defer: true,
    }
  ]
})
</script>
```

However, this led to several issues:

1. Hydration mismatches, leading to appearing, then disappering of the consent banner
2. [Nuxt UI](https://ui.nuxt.com/) notifications rendering incorrectly

{{<figure src="3ac9086c-7984-4089-811e-e9d3f7b96a47">}}Integrating Termly with Nuxt was a bit like mixing fire and water: It didn't mesh quite right.{{</figure>}}

## Understanding the Problem

The root of these issues lies in the conflict between server-side rendering and client-side scripting. Nuxt 3, being an SSR framework, renders the initial HTML on the server. When Termly's script runs on the client, it injects content that wasn't present in the server-rendered HTML, causing hydration mismatches.

Moreover, the script's positioning and execution timing affected other UI elements, particularly Nuxt UI notifications.

## The Solution

The following is a solution that addresses these issues:

```vue
// app.vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const termlyLoaded = ref(false)

onMounted(() => {
  if (document.querySelector('script[src*="app.termly.io/resource-blocker"]')) {
    termlyLoaded.value = true
    return
  }

  const script = document.createElement('script')
  script.src = 'https://app.termly.io/resource-blocker/[yourId]?autoBlock=on'
  script.async = true
  script.onload = () => {
    termlyLoaded.value = true
  }

  const firstScript = document.getElementsByTagName('script')[0]
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript)
  } else {
    document.head.appendChild(script)
  }
})
</script>

<template>
  <div>
    <ClientOnly>
      <div v-if="termlyLoaded" id="termly-code-snippet-support"></div>
    </ClientOnly>
    <NuxtPage />
    <UNotifications />
  </div>
</template>
```

Let's break down the key aspects of this solution:

1. **Client-side script loading**: It loads the Termly script dynamically in the `onMounted` hook, ensuring it only happens on the client side.

2. **Early script insertion**: It attempts to insert the script as early as possible in the document to address Termly's positioning warning.

3. **Conditional rendering**: It uses a `termlyLoaded` ref to conditionally render the Termly support div, preventing it from appearing before the script has loaded.

4. **Error handling**: It includes checks and a fallback method for script insertion to handle various edge cases.

## The Result

This solution resolves the hydration mismatches, fixes the notification rendering issues, and ensures Termly loads as early as possible. The consent management banner now coexists peacefully with the rest of our Nuxt 3 application.

## Lessons Learned

1. **SSR and client-side scripts require careful handling:** When integrating third-party scripts in an SSR environment, consider their execution timing and impact on hydration.

2. **Conditional rendering is powerful:** Using `ClientOnly` and reactive variables to control rendering can prevent many hydration issues.

3. **Error handling is crucial:** Always include fallback options and error checks, especially when dealing with dynamic script insertion.

## Conclusion

Integrating third-party scripts like Termly into a Nuxt 3 application can be challenging, but with a thoughtful approach, it's possible to achieve seamless integration. By understanding the interplay between server-side rendering and client-side scripting, we can develop solutions that maintain the benefits of both while avoiding common pitfalls.
