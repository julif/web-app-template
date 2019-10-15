var plataform;
responsive();

function responsive(){
  if ( window.innerWidth < 480 ) { plataform=" smartphone portrait"; }
  if ( window.innerWidth < 480 && window.innerHeight < window.innerWidth) { plataform="smartphone landsape"; }
  if ( window.innerWidth > 480 && window.innerWidth < 1024 ) { plataform="tablet "; }
  if ( window.innerWidth > 1024 ) { plataform="desktop"; }


  //avoidportrait();  (opcional)

  console.log(" plataforma : "+ plataform);

  
};