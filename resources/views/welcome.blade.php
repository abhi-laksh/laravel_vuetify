<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix("css/app.css") }}">
    <title>Laravel</title>

</head>

<body>
    <div id="app">
        <example-component></example-component>
        <vuetify-btn></vuetify-btn>
    </div>
    <script src="{{ mix("js/app.js") }}"></script>
</body>

</html>