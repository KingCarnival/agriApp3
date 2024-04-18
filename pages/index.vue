<template>
    <div class="flex justify-center">
        <VitePwaManifest />
        <h1 class="font-sans text-5xl content-center">More than Farming</h1>
    </div>
    <div class="flex justify-center">
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">
                    <NuxtLink to="/agegroups/5-10">Activities for 5-10 year old</NuxtLink>
                </h2>
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">
                    <NuxtLink to="/agegroups/11-15">Activities for 11-15 year old</NuxtLink>
                </h2>
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">
                    <NuxtLink to="/agegroups/16-20">Activities for 16+ year old</NuxtLink>
                </h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>