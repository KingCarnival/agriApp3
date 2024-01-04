<template>
<div class="navbar bg-base-200">
<header>
     <head>
          <link rel="icon" href="icons/favicon.ico" sizes="48x48">
          <link rel="icon" href="icons/barn.svg" sizes="any" type="image/svg+xml">
          <link rel="apple-touch-icon" href="icons/apple-touch-icon-180x180.png">
        </head>
    <nav>
        <ul class="menu menu-vertical lg:menu-horizontal bg-base-200">
            <li class="flex items-center px-4"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="flex items-center px-4"><NuxtLink to="/about">About</NuxtLink></li>
            <li class="flex items-center px-4">
                <div class="dropdown dropdown-bottom">
                    <div tabindex="0">
                        Age Groups
                    </div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NuxtLink to="/agegroups/5-10">5-10 Year Olds</NuxtLink></li>
                        <li><NuxtLink to="/agegroups/11-15">11-15 Year Olds</NuxtLink></li>
                        <li><NuxtLink to="/agegroups/16-20">16-20 Year Olds</NuxtLink></li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>

</header>
</div>
<div>
    <slot />
</div>
</template>