<template>
    <div
        class="flex flex-col justify-center content-center container max-w-screen-sm md:max-w-screen-md mx-auto"
    >
        <h1 class="text-center">Nothing...</h1>
        <div class="flex justify-center pb-10" to="/">
            <img src="/images/nothing-here-yet.gif" class="object-contain" />
        </div>
        <p class="text-center">
            That doesn't mean im not working on stuff. I just don't have anything worthy of showing off just
            yet.
        </p>
        <p class="text-center">Come back another time, and there might just be something new here.</p>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: "Projects | Torbjørn Holtmon",
                meta: [
                    {
                        hid: "description",
                        name: "description",
                        content: "Torbjørn Holtmon's ongoing spare time projects",
                    },
                ],
            };
        },
    };
</script>

<style></style>
