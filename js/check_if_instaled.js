// revisa si la aplocacion fue abierta desde la app instalada.

if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('display-mode is standalone');
}