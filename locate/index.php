
<!DOCTYPE html>
<html lang="en">
<head>

    <title>Duduk Diam</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>    
    <meta http-equiv="content-language" content="en-ie">

    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://dudukdiam.com" />
    <link href="https://2kmfromhome.com" rel="canonical" />
    <meta property="og:title" content="10KM From Home" />
    <meta property="og:description" content="How far can you exercise from home during the Government restrictions?" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="10KM  From Home" />
    <meta itemprop="name" content="10KM From Home" />

    <meta itemprop="description" content="How far can you exercise from home during the Government restrictions?" />
    <meta name="twitter:description" content="How far can you exercise from home during the Government restrictions?" />

    <meta name="twitter:image" content="xxx here" />
    <meta itemprop="image" content="xxx here"/>
    <meta property="og:image" content="xxx here" />    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" ></script>
    <script src="app.js" defer></script>
    <script src="leaflet-provider.js" ></script>
    <script>
        L.tileLayer.provider('Stadia.AlidadeSmoothDark').addTo(map);
    </script>
    

    <link href="style.css" rel="stylesheet">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162074229-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-162074229-1', { 'anonymize_ip': true });
    </script> -->


</head>
<body>
    <header>
        <div class="flex">
            <div><h1>Duduk Diam</h1>
                <p>10km dari rumah sahaja.</p>    
        </div>
            <div>Made by Laman7</div>
        </div>
    </header>
    <div id="app" class="flex flex-col justify-start min-h-screen min-w-full" ref="app">
        <header ref="header">
    <div class="container mx-auto">        
<menu-main
    inline-template
    >
    <nav class="">
        
        <div>



            <transition name="slide">
                <div
                    v-if="open"
                    class="fixed w-full h-full top-0 left-0 bg-gray-100 bg-opacity-75 z-10000"
                    v-cloak
                >
                    <div
                        class="absolute right-0 top-0 w-48 py-5 px-3 h-full bg-blue-800 text-white"               
                    >
                        <div class="flex justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                version="1.1" 
                                xmlns:xlink="http://www.w3.org/1999/xlink" 
                                xmlns:svgjs="http://svgjs.com/svgjs" 
                                viewBox="0 0 140 140" 
                                class="w-6 h-6 mr-2 stroke-current text-white"
                                v-on:click="open = false"
                                >
                                <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                                    <path d="M0.748 12.000 A11.250 11.250 0 1 0 23.248 12.000 A11.250 11.250 0 1 0 0.748 12.000 Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M7.498 16.5L16.497 7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                    <path d="M16.498 16.5L7.497 7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                </g>
                            </svg>
                        </div>

                    </div>
                </div>
            </transition>
        </div>
    </nav>
</menu-main>    </div>  
</header>

           <div class="mb-auto">
            
    <map-view
        initial-distance-type="km"
        :inital-radius=10000
        inline-template
    >
        <div class="mx-4 relative">
            <div class="container sm:mx-auto" ref="content">
                <transition name="fade">
                    <div v-if="noLocationAlert && !hideLocationAlert" 
                        class="max-w-2xl bg-indigo-100 mb-3 mx-auto border-t-4 border-indigo-700 rounded-b text-indigo-900 px-2 py-3 shadow-md" 
                        v-on:click="noLocationAlert = false"
                        role="alert"
                        v-cloak
                        >
                        <div class="flex items-start sm:items-center">
                            <div class="py-1">
                                <svg class="fill-current h-6 w-6 text-indigo-900 mr-4" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 20 20">
                                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                                </svg>
                            </div>
                            <div>
                                <div class="flex items-start justify-between sm:mx-4">
                                    <p class="text-sm">We couldn't locate your exact position and are showing the closest point. Drag the pin to get your exact location.</p>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                            version="1.1" 
                                            xmlns:xlink="http://www.w3.org/1999/xlink" 
                                            xmlns:svgjs="http://svgjs.com/svgjs" 
                                            viewBox="0 0 140 140" 
                                            class="w-4 h-4 mx-auto stroke-current cursor-pointer"
                                            >
                                                <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                                                    <path d="M0.748 12.000 A11.250 11.250 0 1 0 23.248 12.000 A11.250 11.250 0 1 0 0.748 12.000 Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                                    <path d="M7.498 16.5L16.497 7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                                    <path d="M16.498 16.5L7.497 7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                                                </g>
                                        </svg>                                        
                                    </div>
                                </div>
                                <div class="flex justify-end">                                    
                                    <p class="text-xs underline text-indigo-900 p-0 m-0 cursor-pointer" v-on:click="setHideLocationAlert">
                                        Don't show again
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>                
                </transition>             

                 <div class="flex mb-1 w-full justify-between sm:justify-start items-center overflow-x-auto">
                    <add-marker
                        :map="map"
                        v-on:add-marker="addCustomMarker"
                        v-on:remove-custom-marker="removeCustomMarker"
                        class="mr-2 sm:mr-5"
                    ></add-marker>
                    <share-location
                        class="mr-2 sm:mr-5"
                        url="https://2kmfromhome.com/share"
                        :lat="lat"
                        :lon="lon"
                        :radius="radius"
                    ></share-location>
                    <search-location
                        class="mr-2 sm:mr-5"
                        v-on:change-search="searchUpdate"
                    ></search-location>
                    <radius-distance
                        :radius="radius"
                        v-on:radius-updated="updateRadius"
                        class="mr-2 sm:mr-5"
                    ></radius-distance>

                    <div>
                        <div class="h-8 flex items-center">
                            <a href="https://2kmfromhome.com/10km/print" 
                                target="_blank" 
                                class="flex items-center justify-center w-full h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
                                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                                    xmlns:svgjs="http://svgjs.com/svgjs" 
                                    viewBox="0 0 40 40"
                                    class="stroke-current h-6 w-6 text-indigo-900 mx-auto cursor-pointer"
                                    >
                                    <g transform="matrix(1.6666666666666667,0,0,1.6666666666666667,0,0)">
                                        <path d="M 12,3c4.971,0,9,4.029,9,9s-4.029,9-9,9s-9-4.029-9-9S7.029,3,12,3z " fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M 19.5,12h3.75 " fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M 12,4.5V0.75 " fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M 4.5,12H0.75 " fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M 12,19.5v3.75 " fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M 15,10v4.636c0,0.414-0.336,0.75-0.75,0.75h-4.5c-0.414,0-0.75-0.336-0.75-0.75V10 " fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M 7.5,11.25L12,7.5l4.5,3.75" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </a>  
                        </div>
                        <h3 class="text-center text-10 mt-2 uppercase font-bold text-indigo-900">
                            Print
                        </h3>

                        <personalised-message :lat="lat" :lon="lon"></personalised-message>
                    </div>          
                </div>
            </div>

            <div id="map-container" class="relative" v-bind:style="mapContainerStyle">
                <div id="map" class="h-full w-full"></div> 
            </div>
        </div>
    </map-view>    
        </div>
        
<footer class="py-3 bg-blue-600" ref="footer">
    <div class="container mx-auto">
        <!-- <div class="flex items-center justify-center mt-2 font-display">
            <span class="mx-auto text-xs text-white">
                Created by <a class="underline" href="https://twitter.com/davebolger" target="_blank">Dave Bolger</a>
                in <a class="underline" href="https://devhaus.ie" target="_blank">Devhaus</a>
                &nbsp; &nbsp; &nbsp;

                <a href="/privacy">Privacy Policy</a>
            </span>
        </div>
        <div class="text-center mt-2 text-xs text-white font-display">
            <a href="https://www.buymeacoffee.com/devhaus" target="_blank" class="mr-2">Buy us a coffee</a>
        </div> -->
    </div>
</footer>
    </div>
</body>
</html>