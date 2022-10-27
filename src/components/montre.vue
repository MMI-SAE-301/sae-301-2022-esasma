<script setup lang="ts">
import type { Montre } from "@/types";


withDefaults(defineProps<Montre>(), {
    bracelet: "white",
    boitier: "white",
    ecran: "white",
    type_boitier: "rond",
    type_bracelet: "etoile",
});
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.37 711">
        <g id="bracelet">
            <path
                d="M550.41,73.36S602.58,53.07,649,54.52s95.65,15.94,95.65,15.94-29,271-26.09,349.28S746.06,727,746.06,727s-47.83,21.73-92.76,18.84-97.1-17.4-97.1-17.4S580.09,489.3,580.09,395.1,550.41,73.36,550.41,73.36Z"
                transform="translate(-415.55 -45.58)" :fill="bracelet" stroke="#000" stroke-miterlimit="10"
                stroke-width="0.5" />
            <path
                d="M509.83,199.45S549,127,544.61,73.36c0,0,17.39-27.53,102.9-27.53S757.65,64.67,757.65,64.67s14.8,110.14,35.09,130.43c0,0-96,18.84-148.13,18.84S509.83,199.45,509.83,199.45Z"
                transform="translate(-415.55 -45.58)" :fill="bracelet" stroke="#000" stroke-miterlimit="10"
                stroke-width="0.5" />
            <path
                d="M795.14,607.79s-41.87,70.92-39.57,124.67c0,0-18.43,26.85-103.87,23.59s-109.35-23-109.35-23S531.76,622.4,512.26,601.35c0,0,96.61-15.17,148.74-13.18S795.14,607.79,795.14,607.79Z"
                transform="translate(-415.55 -45.58)" :fill="bracelet" stroke="#000" stroke-miterlimit="10"
                stroke-width="0.5" />
            <polygon
                points="254.46 142.53 251.3 144.01 250.87 147.48 248.32 144.91 244.82 145.43 246.41 142.35 244.68 139.21 248.21 139.88 250.64 137.41 251.23 140.9 254.46 142.53"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
        </g>
        <g id="etoile" v-if="type_bracelet == 'etoile'">
            <polygon id=" etoile-2" data-name="etoile"
                points="278.61 23.16 299.57 12.14 295.57 35.48 312.53 52.02 289.09 55.42 278.61 76.67 268.13 55.42 244.68 52.02 261.65 35.48 257.64 12.14 278.61 23.16"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
            <polygon id="etoile-3" data-name="etoile"
                points="310.62 602.6 331.58 591.58 327.58 614.92 344.54 631.46 321.1 634.86 310.62 656.1 300.14 634.86 276.69 631.46 293.66 614.92 289.65 591.58 310.62 602.6"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
            <polygon id="etoile-4" data-name="etoile"
                points="165.68 602.6 186.64 591.58 182.64 614.92 199.6 631.46 176.16 634.86 165.68 656.1 155.19 634.86 131.75 631.46 148.71 614.92 144.71 591.58 165.68 602.6"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
            <polygon id="etoile-5" data-name="etoile"
                points="238.15 643.75 259.11 632.72 255.11 656.07 272.07 672.6 248.63 676.01 238.15 697.25 227.66 676.01 204.22 672.6 221.19 656.07 217.18 632.72 238.15 643.75"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
            <polygon id="etoile-6" data-name="etoile"
                points="203.03 69.14 224 58.11 220 81.46 236.96 97.99 213.52 101.4 203.03 122.64 192.55 101.4 169.11 97.99 186.07 81.46 182.07 58.11 203.03 69.14"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
            <polygon id="etoile-7" data-name="etoile"
                points="170.88 47.92 167.78 49.45 167.29 52.87 164.87 50.39 161.46 50.98 163.07 47.92 161.46 44.85 164.87 45.44 167.29 42.96 167.78 46.38 170.88 47.92"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
            <polygon id="etoile-8" data-name="etoile"
                points="205.5 17.09 202.4 18.62 201.9 22.05 199.49 19.57 196.08 20.15 197.69 17.09 196.08 14.03 199.49 14.61 201.9 12.14 202.4 15.56 205.5 17.09"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
            <polygon id="etoile-9" data-name="etoile"
                points="288.03 100.27 284.93 101.8 284.43 105.22 282.02 102.74 278.61 103.33 280.22 100.27 278.61 97.2 282.02 97.79 284.43 95.31 284.93 98.73 288.03 100.27"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
            <polygon id="etoile-10" data-name="etoile"
                points="231 607.11 227.9 608.64 227.4 612.07 224.99 609.59 221.58 610.17 223.19 607.11 221.58 604.05 224.99 604.64 227.4 602.16 227.9 605.58 231 607.11"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
            <polygon id="etoile-11" data-name="etoile"
                points="179.18 679.03 176.08 680.56 175.59 683.98 173.17 681.5 169.76 682.09 171.37 679.03 169.76 675.96 173.17 676.55 175.59 674.07 176.08 677.5 179.18 679.03"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
            <polygon id="etoile-12" data-name="etoile"
                points="301.92 677.26 298.82 678.79 298.32 682.22 295.91 679.74 292.5 680.32 294.11 677.26 292.5 674.2 295.91 674.78 298.32 672.31 298.82 675.73 301.92 677.26"
                fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.5" />
        </g>
        <g id="boitier">
            <rect x="43.87" y="130.63" width="379.91" height="453.62" rx="80.8" fill="#fff" stroke="#000"
                stroke-miterlimit="10" stroke-width="0.5" />
            <rect x="63.14" y="156.05" width="341.37" height="402.78" rx="72.17" fill="#fff" stroke="#000"
                stroke-miterlimit="10" stroke-width="0.5" />
            <rect x="82.05" y="172.53" width="303.55" height="369.83" rx="65.21" fill="#b3b3b3" stroke="#000"
                stroke-miterlimit="10" stroke-width="0.5" />
        </g>
        <g id="boitier_rond" v-if="type_boitier == 'boitier_rond'">
            <path d="M653.73,637.22a238.06,238.06,0,1,1,168.34-69.73A236.48,236.48,0,0,1,653.73,637.22Z"
                transform="translate(-415.55 -45.58)" fill="#fff" />
            <path
                d="M653.73,161.23a237.21,237.21,0,1,1-92.61,18.7,236.45,236.45,0,0,1,92.61-18.7m0-.25c-131.54,0-238.18,106.64-238.18,238.18S522.19,637.34,653.73,637.34,891.92,530.71,891.92,399.16,785.28,161,653.73,161Z"
                transform="translate(-415.55 -45.58)" />
            <path d="M653.73,619.54A220.37,220.37,0,1,1,809.57,555,218.94,218.94,0,0,1,653.73,619.54Z"
                transform="translate(-415.55 -45.58)" fill="#fff" />
            <path
                d="M653.73,178.9A219.58,219.58,0,1,1,568,196.21a219,219,0,0,1,85.73-17.31m0-.25c-121.78,0-220.5,98.73-220.5,220.51S532,619.67,653.73,619.67s220.51-98.73,220.51-220.51S775.52,178.65,653.73,178.65Z"
                transform="translate(-415.55 -45.58)" />
            <circle cx="238.18" cy="353.58" r="194.53" fill="#b3b3b3" stroke="#000" stroke-miterlimit="10"
                stroke-width="0.5" />
        </g>
        <g id="ecran"><text transform="translate(120.53 387.55)" font-size="98"
                font-family="PlayfairDisplaySC-Black, Playfair Display SC" font-weight="800"
                letter-spacing="-0.11em">1O:1O</text><text transform="translate(136.58 257.9)" font-size="30"
                font-family="PlayfairDisplaySC-Black, Playfair Display SC" font-weight="800" letter-spacing="-0.01em">
                <tspan xml:space="preserve">Lun. 24 oct.</tspan>
            </text></g>
        <g id="Cioeur" v-if="type_bracelet == 'cioeur'">
            <path id="coeur" d="M585.13,111.16,569.79,95.82c-14-14,1.82-29.8,15.81-15.8,13.3-13.3,28.64,2,15.34,15.34Z"
                transform="translate(-415.55 -45.58)" fill="none" stroke="#d000a8" stroke-miterlimit="10" />
            <path id="coeur-2" data-name="coeur"
                d="M711.47,735.41l-9.79-9.79c-8.93-8.93,1.16-19,10.08-10.08,8.49-8.49,18.28,1.3,9.79,9.78Z"
                transform="translate(-415.55 -45.58)" fill="none" stroke="#d000a8" stroke-miterlimit="10" />
            <path id="coeur-3" data-name="coeur"
                d="M739.67,161l-9.79-9.79c-8.93-8.93,1.16-19,10.09-10.08,8.48-8.49,18.27,1.3,9.78,9.78Z"
                transform="translate(-415.55 -45.58)" fill="none" stroke="#d000a8" stroke-miterlimit="10" />
            <path id="coeur-4" data-name="coeur"
                d="M565.94,161.21l-9.57-9.57c-8.73-8.73,1.07-18.52,9.8-9.79,8.24-8.24,17.8,1.33,9.56,9.57Z"
                transform="translate(-415.55 -45.58)" fill="none" stroke="#d000a8" stroke-miterlimit="10" />
            <path id="coeur-5" data-name="coeur"
                d="M711.42,124.37,685,98c-24.11-24.11,3.09-51.31,27.2-27.2,22.89-22.89,49.31,3.54,26.43,26.42Z"
                transform="translate(-415.55 -45.58)" fill="none" stroke="#d000a8" stroke-miterlimit="10" />
            <path id="coeur-6" data-name="coeur"
                d="M646.44,737.24,621.09,711.9c-23.12-23.13,3-49.24,26.12-26.12,22-22,47.31,3.37,25.34,25.34Z"
                transform="translate(-415.55 -45.58)" fill="none" stroke="#d000a8" stroke-miterlimit="10" />
            <path id="coeur-7" data-name="coeur"
                d="M711.44,684.16,696.1,668.82c-14-14,1.81-29.8,15.81-15.8,13.3-13.31,28.64,2,15.34,15.34Z"
                transform="translate(-415.55 -45.58)" fill="none" stroke="#d000a8" stroke-miterlimit="10" />
        </g>
        <g id="trait" v-if="type_bracelet === 'trait'">
            <path id="trait-2" data-name="trait" d="M544.5,86.5c.13-1.65,214.63,0,214.63,0l6.57,20.37H541.59Z"
                transform="translate(-415.55 -45.58)" fill="none" stroke="#000" stroke-miterlimit="10" />
            <polygon id="trait-3" data-name="trait"
                points="115.58 610.52 356.46 610.52 350.15 627.92 118.8 627.92 115.58 610.52" fill="none"
                stroke="#070006" stroke-miterlimit="10" />
            <polygon id="trait-4" data-name="trait"
                points="122.36 650.89 343.58 650.89 341.12 665.64 122.36 665.64 122.36 650.89" fill="none"
                stroke="#070006" stroke-miterlimit="10" />
            <polygon id="trait-5" data-name="trait"
                points="120.28 90.17 356.46 90.17 359.1 106.8 114.81 106.8 120.28 90.17" fill="none" stroke="#070006"
                stroke-miterlimit="10" />
        </g>
        <g id="Rond" v-if="type_bracelet == 'Rond'">
            <circle id="rond-2" data-name="rond" cx="249.57" cy="36.27" r="15.33" fill="none" stroke="#230077"
                stroke-linecap="round" stroke-miterlimit="10" />
            <circle id="rond-3" data-name="rond" cx="168.08" cy="84.73" r="15.33" fill="none" stroke="#230077"
                stroke-linecap="round" stroke-miterlimit="10" />
            <circle id="rond-4" data-name="rond" cx="308.83" cy="36.27" r="15.33" fill="none" stroke="#230077"
                stroke-linecap="round" stroke-miterlimit="10" />
            <circle id="rond-5" data-name="rond" cx="168.08" cy="616.05" r="15.33" fill="none" stroke="#230077"
                stroke-linecap="round" stroke-miterlimit="10" />
            <circle id="rond-6" data-name="rond" cx="268.36" cy="616.05" r="15.33" fill="none" stroke="#230077"
                stroke-linecap="round" stroke-miterlimit="10" />
            <circle id="rond-7" data-name="rond" cx="202.2" cy="664.52" r="15.33" fill="none" stroke="#230077"
                stroke-linecap="round" stroke-miterlimit="10" />
            <circle id="rond-8" data-name="rond" cx="327.61" cy="616.05" r="15.33" fill="none" stroke="#230077"
                stroke-linecap="round" stroke-miterlimit="10" />
        </g>
    </svg>
</template>