<script setup lang="ts">
import type { ContentEnCollectionItem, ContentFrCollectionItem } from '@nuxt/content'

useScriptPlausibleAnalytics({
  domain: 'ali-aslani-dev.vercel.app',
  scriptInput: {
    src: 'https://analytics.hrcd.fr/js/script.js',
  },
})

const { page, isWriting } = defineProps<{
  page: ContentEnCollectionItem | ContentFrCollectionItem
  isWriting: boolean
}>()

const route = useRoute()
const { link, seo, profile } = useAppConfig()

const siteUrl = 'https://ali-aslani-dev.vercel.app'

const pageSEO = computed(() => ({
  title: isWriting ? page?.title : page?.title || seo.title,
  description: isWriting ? page?.description : page?.description || seo.description,
  url: `${siteUrl}${route.fullPath}`,
}))

const getTitleTemplate = (title: string | undefined) => {
  if (route.path === '/') return title || `${seo.title}`
  if (isWriting) return title
  return `${title} | ${seo.title}`
}

useSeoMeta({
  ogSiteName: seo.title,
  ogTitle: pageSEO.value.title,
  ogDescription: pageSEO.value.description,
  ogType: isWriting ? 'article' : 'website',
  ogUrl: pageSEO.value.url,
  author: profile.name,
  title: pageSEO.value.title,
  description: pageSEO.value.description,
  twitterTitle: pageSEO.value.title,
  twitterDescription: pageSEO.value.description,
  twitterCard: 'summary_large_image',
})

useHead({
  title: pageSEO.value.title,
  titleTemplate: getTitleTemplate,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'charset', content: 'utf-8' },
    { name: 'robots', content: 'index, follow' },
    { name: 'color-scheme', content: 'light dark' },
  ],
  link: [
    ...link,
    { rel: 'canonical', href: pageSEO.value.url }
  ],
})

defineOgImage({
  url: `${siteUrl}/og.png`,
  width: 1200,
  height: 630,
  alt: 'Home image'
})
</script>

<template>
  <slot />
</template>
