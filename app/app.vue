<script setup lang="ts">
import "../app/assets/fonts/vazir.css";
import { Toaster } from "vue-sonner";
import * as locales from "@nuxt/ui/locale";

const { locale } = useI18n();
</script>

<template>
  <Html
    :lang="locale"
    :class="locale === 'fr' ? 'font-[var(--font-vazir)]' : 'font-geist'"
  >
    <Body>
      <LayoutScrollToTop />
      <NuxtLayout>
        <UApp :locale="locales[locale]">
          <NuxtPage />
        </UApp>
      </NuxtLayout>
      <Toaster close-button />
      <DotPattern
        class="absolute inset-0 -z-10 size-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]"
      />
    </Body>
  </Html>
</template>
