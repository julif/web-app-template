var plataform;
responsive();

function responsive(){
  if ( window.innerWidth < 680 ) { plataform=" smartphone portrait"; }
  if ( window.innerWidth < 680 && window.innerHeight < window.innerWidth) { plataform="smartphone landsape"; }
  if ( window.innerWidth > 680 && window.innerWidth < 1024 ) { plataform="tablet"; }
  if ( window.innerWidth > 1024 ) { plataform="desktop"; }


  //avoidportrait();  (opcional)

  console.log(" plataforma : "+ plataform);

  
};