<template>
<div class="navbar bg-base-200">
<header>
     <head>
          <link rel="icon" href="icons/favicon.ico" sizes="48x48">
          <link rel="icon" href="icons/barn.svg" sizes="any" type="image/svg+xml">
          <link rel="apple-touch-icon" href="icons/apple-touch-icon-180x180.png">
        </head>
    <div class="dropdown">
        <nav>
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
    </div>

        <nav>
            <ul class="menu hidden lg:menu-horizontal bg-base-200">
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