 
    // colocar año actual
    document.getElementById('anio').textContent = new Date().getFullYear();

    // ejemplo: alerta si el PDF no existe (intenta cargar)
   /* document.getElementById('downloadCv').addEventListener('click', function(e){
      // se puede mejorar: comprobar existencia con fetch (pero fetch a archivos locales en GitHub Pages funciona)
      // aquí solo doy un ejemplo visual
      console.log('Usuario descargando CV...');
    });*/
    
  document.addEventListener('DOMContentLoaded', () => {
    // Colocar el año actual
    document.getElementById('anio').textContent = new Date().getFullYear();

    // Generar y descargar el PDF
    const downloadBtn = document.getElementById('downloadCv');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const element = document.getElementById('cv-content');

            const opt = {
                margin:       0.5,
                filename:     'Gabriel_Alejandro_Rubira_CV.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true },
                jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
                pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
            };

            html2pdf().set(opt).from(element).save();
        });
    }
});