<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&display=swap" rel="stylesheet" />

        <!-- Meta Tags -->
        <meta name="description" content="Portfolio website showcasing my work and experience">
        <meta name="keywords" content="developer, portfolio, web development, full stack">
        <meta name="author" content="{{ config('app.name') }}">
        
        <!-- Open Graph -->
        <meta property="og:title" content="{{ config('app.name') }} - Portfolio">
        <meta property="og:description" content="Portfolio website showcasing my work and experience">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url('/') }}">

        <!-- Scripts -->
        <!-- @routes -->
        @viteReactRefresh
        @vite(['resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-white text-gray-900">
        @inertia
    </body>
</html>