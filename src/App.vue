<template>
  <header>
    <nav class="relative justify-between px-2 py-3 bg-white mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <router-link to="/" class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 uppercase text-black ">
            Tik Tak
          </router-link>
          <div class=" flex flex-nowrap justify-between items-stretch ">
            <router-link to='/CustomView'
              class=" text-xl leading-none px-3 py-1 rounded bg-transparent lg:hidden outline-none ">
              <div class="mx-6">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.9409 1.66012C15.9409 1.66012 16.1951 0.867362 15.649 0.312429C15.15 -0.202867 14.5003 0.0746001 14.5003 0.0746001C13.9259 0.371886 9.0768 3.51321 7.27839 5.59421C6.46864 6.54552 5.33874 9.34992 6.25207 10.3706C7.11832 11.3417 9.98072 10.2021 10.7622 9.37964C12.7019 7.33828 15.6678 2.27451 15.9409 1.66012V1.66012ZM0 15.6127C2.23154 14.0669 1.3747 12.2336 3.04129 11.0147C3.91696 10.3706 5.1316 10.4003 5.94135 11.3021C6.53455 11.966 6.69461 13.8488 5.7907 14.7308C4.31242 16.1677 2.02439 16.2668 0 15.6127V15.6127Z"
                    fill="black" />
                </svg>
              </div>
            </router-link>
            <router-link to='/HistoriqueView'
              class=" text-xl leading-none px-3 py-1  rounded bg-transparent lg:hidden outline-none ">
              <div class="mx-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.65 19.8L8.925 18.225C7.15833 16.6083 5.56267 15.004 4.138 13.412C2.71267 11.8207 2 10.0667 2 8.15C2 6.58333 2.525 5.275 3.575 4.225C4.625 3.175 5.93333 2.65 7.5 2.65C8.38333 2.65 9.21667 2.83733 10 3.212C10.7833 3.58733 11.45 4.1 12 4.75C12.55 4.1 13.2167 3.58733 14 3.212C14.7833 2.83733 15.6167 2.65 16.5 2.65C18.0667 2.65 19.375 3.175 20.425 4.225C21.475 5.275 22 6.58333 22 8.15C22 10.0667 21.2917 11.825 19.875 13.425C18.4583 15.025 16.85 16.6333 15.05 18.25L13.35 19.8C12.9667 20.1667 12.5167 20.35 12 20.35C11.4833 20.35 11.0333 20.1667 10.65 19.8V19.8ZM11.05 6.75C10.5667 6.06667 10.05 5.54567 9.5 5.187C8.95 4.829 8.28333 4.65 7.5 4.65C6.5 4.65 5.66667 4.98333 5 5.65C4.33333 6.31667 4 7.15 4 8.15C4 9.01667 4.30833 9.93733 4.925 10.912C5.54167 11.8873 6.27933 12.8333 7.138 13.75C7.996 14.6667 8.87933 15.525 9.788 16.325C10.696 17.125 11.4333 17.7833 12 18.3C12.5667 17.7833 13.3043 17.125 14.213 16.325C15.121 15.525 16.0043 14.6667 16.863 13.75C17.721 12.8333 18.4583 11.8873 19.075 10.912C19.6917 9.93733 20 9.01667 20 8.15C20 7.15 19.6667 6.31667 19 5.65C18.3333 4.98333 17.5 4.65 16.5 4.65C15.7167 4.65 15.05 4.829 14.5 5.187C13.95 5.54567 13.4333 6.06667 12.95 6.75C12.8333 6.91667 12.6917 7.04167 12.525 7.125C12.3583 7.20833 12.1833 7.25 12 7.25C11.8167 7.25 11.6417 7.20833 11.475 7.125C11.3083 7.04167 11.1667 6.91667 11.05 6.75V6.75Z"
                    fill="black" />
                </svg>
              </div>
            </router-link>
            <router-link to='/SigninView'
              class=" text-xl leading-none px-3 py-1 rounded bg-transparent lg:hidden outline-none  ">
              <div class="mx-6">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
                    fill="black" />
                </svg>
              </div>
            </router-link>
          </div>
        </div>
        <div class="lg:flex flex-grow items-center hidden md:visible">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li>
              <router-link to="/CustomView"
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 ">
                Custom
              </router-link>
            </li>
            <li>
              <router-link to="/HistoriqueView"
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
                My selection
              </router-link>
            </li>
            <li>
              <router-link to="/SigninView"
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
                Sign In
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="" />
  </Suspense>
</template>

<script setup lang="ts">

</script>
