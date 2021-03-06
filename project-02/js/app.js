// app.js
var app = new Framework7({
  root: '#app', // <-- Verwijst naar <div id="app">
  name: 'Project 02', // <-- Naam van de applicatie
  id: 'com.mindef.project02', // <-- naam van de bundle, voor publicatie in App Stores
  routes: [
    // <-- Routes/pagina's binnen de app
    {
      path: '/about/',
      url: './pages/about.html'
    },
    {
      path: '/dialog/',
      componentUrl: './pages/dialog.html'
    },
    {
      path: '/picker/',
      componentUrl: './pages/picker.html'
    },
    {
      path: '/ajax/',
      componentUrl: './pages/ajax.html'
    }
  ]
  // <-- overige parameters
});

// Elke app heeft een main view, verwijst naar <div class="view view-main">
var mainView = app.views.create('.view-main');
