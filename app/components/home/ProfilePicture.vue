<script setup lang="ts">
const { profile } = useAppConfig();
</script>

<template>
  <div class="z-10 flex items-center justify-center">
    <SpotlightButton rounded>
      <div
        class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"
      >
        <NuxtImg
          :src="profile.picture"
          alt="عکس پروفایل علی اصلانی"
          aria-label="عکس پروفایل علی اصلانی"
          width="150"
          height="150"
          class="w-[150px] h-[150px] rounded-full border-2 border-neutral-800/30 object-cover shadow-md transition-transform hover:scale-105"
        />
      </div>
    </SpotlightButton>
  </div>
</template>
