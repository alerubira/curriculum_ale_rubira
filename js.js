 
    // colocar año actual
    document.getElementById('anio').textContent = new Date().getFullYear();

    // ejemplo: alerta si el PDF no existe (intenta cargar)
    document.getElementById('downloadCv').addEventListener('click', function(e){
      // se puede mejorar: comprobar existencia con fetch (pero fetch a archivos locales en GitHub Pages funciona)
      // aquí solo doy un ejemplo visual
      console.log('Usuario descargando CV...');
    });
    
  