var plataform;
responsive();

function responsive(){

  if ( window.innerWidth <= 1024 ) { plataform="tablet"; }
  if ( window.innerWidth <= 1024 && window.innerHeight < window.innerWidth ) { plataform="tablet landscape"; }
  if ( window.innerWidth <= 991 ) { plataform=" smartphone portrait"; }
  if ( window.innerWidth <= 991 && window.innerHeight < window.innerWidth) { plataform="smartphone landscape"; }
  if ( window.innerWidth > 1024 ) { plataform="desktop"; }


  //avoidportrait();  (opcional)

  console.log(" plataforma : "+ plataform);

  
};