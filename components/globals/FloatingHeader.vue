<script lang="ts" setup>
    import type { PropType } from "vue";

    defineProps({
        mode: {
            type: String as PropType<"compact" | "extended">,
            default: "extended"
        }
    });

    const dynamicSubtitles = [
        "Welcome to my digital world! 🌐",
        "Crafting code and creating experiences ✨",
        "Full-stack developer & tech enthusiast 🚀",
        "Building the future, one line at a time 💻",
        "Where creativity meets technology 🎨",
        "Passionate about clean code and great UX 💡",
        "Always learning, always growing 📚"
    ];

    const selectedSubtitle = ref("");

    const selectRandomSubtitle = () =>
    {
        const randomIndex = Math.floor(Math.random() * dynamicSubtitles.length);
        selectedSubtitle.value = dynamicSubtitles[randomIndex];
    };

    onMounted(() =>
    {
        selectRandomSubtitle();
    });
</script>

<template>
    <UHeader to="index" class="floating-header" :class="[`floating-header--${mode}`]">
        <!-- Custom Logo and Title -->
        <template #title>
            <!-- TODO: Add actual logo image -->
            <div class="floating-header__logo">
                <span class="floating-header__logo-placeholder">B</span>
            </div>
            <div class="floating-header__titles">
                <span class="floating-header__title">Byloth's Website</span>
                <p v-if="mode === 'extended'"
                   class="floating-header__subtitle"
                   v-html="selectedSubtitle">
                </p>
            </div>
        </template>

        <!-- Navigation Menu (for extended mode) -->
        <div v-if="mode === 'extended'" class="floating-header__navigation">
            <!-- TODO: Add navigation menu items -->
        </div>

        <!-- Header Actions -->
        <template #right>
            <!-- TODO: Add search toggle functionality -->
            <UButton icon="i-lucide-search"
                     color="neutral"
                     variant="ghost"
                     size="md"
                     square
                     title="Search" />

            <!-- Theme Toggle Button -->
            <UColorModeButton size="md" square />
        </template>

        <!-- Mobile Menu Body -->
        <template #body>
            <!-- TODO: Add mobile navigation items -->
            <div class="floating-header__mobile-nav">
                <p class="text-muted text-sm">Mobile navigation coming soon...</p>
            </div>
        </template>
    </UHeader>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    .floating-header
    {
        // Custom styling for our header
        &__navigation
        {
            // Navigation styles for extended mode
        }

        &__mobile-nav
        {
            padding: 1rem 0;
        }

        // Use :deep() to style the UHeader title slot content
        :deep(.ui-header-title)
        {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        &__logo
        {
            align-items: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            height: 3rem;
            justify-content: center;
            width: 3rem;

            &-placeholder
            {
                color: white;
                font-size: 1.5rem;
                font-weight: bold;
            }
        }

        &__titles
        {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        &__title
        {
            color: variables.$not-quite-black;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.2;
            margin: 0;

            @media (min-width: 768px)
            {
                font-size: 1.75rem;
            }
        }

        &__subtitle
        {
            color: variables.$somewhat-gray;
            font-size: 0.9rem;
            line-height: 1.4;
            margin: 0;

            @media (min-width: 768px)
            {
                font-size: 1rem;
            }
        }

        // Compact mode modifications
        &--compact
        {
            .floating-header__logo
            {
                height: 2.5rem;
                width: 2.5rem;

                &-placeholder
                {
                    font-size: 1.25rem;
                }
            }

            .floating-header__title
            {
                font-size: 1.25rem;

                @media (min-width: 768px)
                {
                    font-size: 1.5rem;
                }
            }
        }
    }
</style>
