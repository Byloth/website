<script lang="ts" setup>
    import AppButton from "@/components/ui/AppButton.vue";

    const $vuert = useVuert();

    const emitSuccess = () => $vuert.emit({
        icon: "circle-check",
        title: "Success",
        message: "This is a success message.",
        type: "success",
        dismissible: true,
        timeout: 5000,
        actions: [
            {
                label: "Ok",
                type: "primary"
            },
            {
                label: "Cancel",
                type: "secondary"
            }
        ]
    });
    const emitInfo = () => $vuert.emit({
        icon: "circle-info",
        title: "Info",
        message: "This is an informative message.",
        type: "info",
        dismissible: true,
        timeout: 5000,
        actions: [
            {
                label: "Ok",
                type: "primary"
            },
            {
                label: "Cancel",
                type: "secondary"
            }
        ]
    });
    const emitWarning = () => $vuert.emit({
        icon: "circle-exclamation",
        title: "Warning",
        message: "This is a warning message.",
        type: "warning",
        dismissible: true,
        timeout: 5000,
        actions: [
            {
                label: "Ok",
                type: "primary"
            },
            {
                label: "Cancel",
                type: "secondary"
            }
        ]
    });
    const emitDanger = () => $vuert.emit({
        icon: "circle-xmark",
        title: "Danger",
        message: "This is a danger message.",
        type: "error",
        dismissible: true,
        timeout: 5000,
        actions: [
            {
                label: "Ok",
                type: "primary"
            },
            {
                label: "Cancel",
                type: "secondary"
            }
        ]
    });
</script>

<template>
    <div id="home-page" class="page">
        <h1>Byloth's Website</h1>
        <p>The Byloth's Website is up and running! 🚀</p>
        <div>
            <AppButton theme="success" @click="emitSuccess">
                Success
            </AppButton>
            <AppButton theme="info" @click="emitInfo">
                Informative
            </AppButton>
            <AppButton theme="warning" @click="emitWarning">
                Warning
            </AppButton>
            <AppButton theme="danger" @click="emitDanger">
                Danger
            </AppButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #home-page
    {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100dvh;
        padding-top: var(--navigation-bar-height);
        text-align: center;

        .btn
        {
            margin: 0.5em;
        }
    }
</style>
