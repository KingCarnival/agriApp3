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
                    <div tabindex="0" role="button" class="btn btn-ghost hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li class="flex items-center px-4">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li class="flex items-center px-4">
                            <NuxtLink to="/about">About</NuxtLink>
                        </li>
                        <li class="flex items-center px-4">
                            <div class="dropdown dropdown-bottom">
                                <div tabindex="0">
                                    Age Groups
                                </div>
                                <ul tabindex="0"
                                    class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <NuxtLink to="/agegroups/5-10">5-10 Year Olds</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/agegroups/11-15">11-15 Year Olds</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/agegroups/16-20">16-20 Year Olds</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

            <nav>
                <ul class="menu hidden lg:menu-horizontal bg-base-200">
                    <li class="flex items-center px-4">
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li class="flex items-center px-4">
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li class="flex items-center px-4">
                        <div class="dropdown dropdown-bottom">
                            <div tabindex="0">
                                Age Groups
                            </div>
                            <ul tabindex="0"
                                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <NuxtLink to="/agegroups/5-10">5-10 Year Olds</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/agegroups/11-15">11-15 Year Olds</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/agegroups/16-20">16-20 Year Olds</NuxtLink>
                                </li>
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
    <footer>
        <div class="btm-nav lg:hidden">
            <NuxtLink to="/">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span class="btm-nav-label">Home</span>
                </button>
            </NuxtLink>
            <NuxtLink to="/about">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-circle-help">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                    </svg>
                    <span class="btm-nav-label">About Us</span>
                </button>
            </NuxtLink>
            <NuxtLink to="/agegroups/5-10">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-baby">
                        <path d="M9 12h.01" />
                        <path d="M15 12h.01" />
                        <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
                        <path
                            d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
                    </svg>
                    <span class="btm-nav-label">5-10 Year Olds</span>
                </button>
            </NuxtLink>
            <NuxtLink to="/agegroups/11-15">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-smile">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" x2="9.01" y1="9" y2="9" />
                        <line x1="15" x2="15.01" y1="9" y2="9" />
                    </svg>
                    <span class="btm-nav-label">10-15 Year Olds</span>
                </button>
            </NuxtLink>
            <NuxtLink to="/agegroups/16-20">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-person-standing">
                        <circle cx="12" cy="5" r="1" />
                        <path d="m9 20 3-6 3 6" />
                        <path d="m6 8 6 2 6-2" />
                        <path d="M12 10v4" />
                    </svg>
                    <span class="btm-nav-label">16+ Year Olds</span>
                </button>
            </NuxtLink>
        </div>
    </footer>
</template>