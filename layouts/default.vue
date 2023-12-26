<template>
<div class="navbar bg-base-200">
<header>
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
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn m-1">
        Theme
        <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
      </div>
      <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box">
        <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
        <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
        <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
        <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
        <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
      </ul>
    </div>
</header>
</div>
<div>
    <slot />
</div>
</template>