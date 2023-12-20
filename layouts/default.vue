<template>
<div class="navbar bg-base-100">
<header>
    <nav>
        <ul class="menu menu-vertical lg:menu-horizontal bg-base-200">
            <li class="flex items-center px-4 "><NuxtLink to="/">Home</NuxtLink></li>
            <li class="flex items-center px-4 "><NuxtLink to="/about">About</NuxtLink></li>
            <li class="flex items-center px-4 ">
                <details open>
                    <summary>
                        Age Groups
                    </summary>
                    <ul>
                        <li><NuxtLink to="/agegroups/5-10">5-10 Year Olds</NuxtLink></li>
                        <li><NuxtLink to="/agegroups/11-15">11-15 Year Olds</NuxtLink></li>
                        <li><NuxtLink to="/agegroups/16-20">16-20 Year Olds</NuxtLink></li>
                    </ul>
                </details>
            </li>
        </ul>
    </nav>
</header>
</div>
<div>
    <slot />
</div>
</template>