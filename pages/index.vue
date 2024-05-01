<template>
    <div class="flex justify-center">
        <VitePwaManifest />
        <h1 class="font-sans text-5xl content-center">More than Farming</h1>
    </div>
    <div class="justify-center grid grid-flow-row auto-rows-max lg:flex">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img
                    src="https://images.unsplash.com/photo-1712135596996-3dda241aa9bc?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Flowers by Photo by micheile henderson on Unsplash"></figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">
                    <NuxtLink to="/agegroups/5-10">Activities for 5-10 year old</NuxtLink>
                </h2>
            </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img
                    src="https://images.unsplash.com/photo-1565522734001-f00e62ec8424?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Photo by Waldemar on Unsplash"></figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">
                    <NuxtLink to="/agegroups/11-15">Activities for 11-15 year old</NuxtLink>
                </h2>
            </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img
                    src="https://images.unsplash.com/photo-1475906089153-644d9452ce87?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Photo by CHUTTERSNAP on Unsplash"></figure>
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