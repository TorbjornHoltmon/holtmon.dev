<template>
    <div class="flex lg:flex-row flex-col lg:h-screen h-auto">
        <nav class="lg:hidden flex flex-1 items-center justify-around bg-sidebar p-3">
            <nuxt-link to="/">
                <picture>
                    <source
                        class="object-scale-down rounded-full w-32"
                        alt="Profile picture of Torbjørn"
                        :srcSet="require('~/assets/images/torbjorn.jpg?webp')"
                        type="image/webp"
                    />
                    <source
                        class="object-scale-down rounded-full w-32"
                        alt="Profile picture of Torbjørn"
                        :srcSet="require('~/assets/images/torbjorn.jpg')"
                        type="image/jpeg"
                    />
                    <img
                        class="object-scale-down rounded-full w-32"
                        alt="Profile picture of Torbjørn"
                        :src="require('~/assets/images/torbjorn.jpg')"
                    />
                </picture>
            </nuxt-link>
            <nuxt-link to="/">
                <h4 class="ml-8 mr-8 mb-0">Articles</h4>
            </nuxt-link>
            <nuxt-link to="/projects/">
                <h4 class="mb-0">Projects</h4>
            </nuxt-link>
            <a href="https://github.com/TorbjornHoltmon" class="ml-8 mb-0 flex justify-center">
                <picture>
                    <source
                        class="object-scale-down w-16"
                        alt="Github profile link"
                        :srcSet="require('~/assets/images/Github-Logo.png?webp')"
                        type="image/webp"
                    />
                    <source
                        class="object-scale-down w-16"
                        alt="Github profile link"
                        :srcSet="require('~/assets/images/Github-Logo.png')"
                        type="image/png"
                    />
                    <img
                        class="object-scale-down w-16"
                        alt="Github profile link"
                        :src="require('~/assets/images/Github-Logo.png')"
                    />
                </picture>
            </a>
        </nav>
        <nav class="lg:flex max-w-sm hidden flex-col bg-sidebar">
            <nuxt-link to="/" class="pt-8 pb-2 px-8">
                <picture>
                    <source
                        class="object-scale-down rounded-full w-full"
                        alt="Profile picture of Torbjørn"
                        :srcSet="require('~/assets/images/torbjorn.jpg?webp')"
                        type="image/webp"
                    />
                    <source
                        class="object-scale-down rounded-full w-full"
                        alt="Profile picture of Torbjørn"
                        :srcSet="require('~/assets/images/torbjorn.jpg')"
                        type="image/jpeg"
                    />
                    <img
                        class="object-scale-down rounded-full w-full"
                        alt="Profile picture of Torbjørn"
                        :src="require('~/assets/images/torbjorn.jpg')"
                    />
                </picture>
            </nuxt-link>
            <div class="text-center">
                <nuxt-link to="/">
                    <h5>Torbjørn Holtmon</h5>
                </nuxt-link>
                <h6>Developer @ <a href="https://www.makingwaves.com">Making Waves</a></h6>
                <nuxt-link to="/">
                    <h1>Articles</h1>
                </nuxt-link>
                <nuxt-link to="/projects/">
                    <h1>Projects</h1>
                </nuxt-link>
                <a href="https://github.com/TorbjornHoltmon" class="flex justify-center">
                    <picture>
                        <source
                            class="object-scale-down w-16"
                            alt="Github profile link"
                            :srcSet="require('~/assets/images/Github-Logo.png?webp')"
                            type="image/webp"
                        />
                        <source
                            class="object-scale-down w-16"
                            alt="Github profile link"
                            :srcSet="require('~/assets/images/Github-Logo.png')"
                            type="image/png"
                        />
                        <img
                            class="object-scale-down w-16"
                            alt="Github profile link"
                            :src="require('~/assets/images/Github-Logo.png')"
                        />
                    </picture>
                </a>
            </div>
        </nav>
        <div class="flex-1 flex lg:overflow-hidden bg-background">
            <!-- Scrollable container -->
            <div class="w-full flex-1 overflow-hidden lg:overflow-y-scroll">
                <div class="m-10">
                    <nuxt />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss"></style>
