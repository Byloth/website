<script lang="ts" setup>
    import { onMounted, ref } from "vue";
    import { useEventListener, useDebounceFn } from "@vueuse/core";

    import { Size } from "../../core/types";

    defineProps({
        is: {
            default: "div",
            type: [String, Object]
        }
    });

    const $el = ref<HTMLElement | null>(null);
    const emit = defineEmits(["resize"]);

    const _lastSize: Size = { width: 0, height: 0 };
    const updateSize = useDebounceFn((): void =>
    {
        const _self = $el.value!;

        const width = _self.offsetWidth;
        const height = _self.offsetHeight;

        if ((_lastSize.width === width) && (_lastSize.height === height))
        {
            return;
        }

        _lastSize.width = width;
        _lastSize.height = height;

        emit("resize", { width, height });
    });

    onMounted(() =>
    {
        updateSize();
        useEventListener(window, "resize", updateSize);
    });
</script>

<template>
    <Component :is="is" ref="$el">
        <slot></slot>
    </Component>
</template>

<style lang="scss" scoped>
</style>
