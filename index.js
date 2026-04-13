document.addEventListener('DOMContentLoaded', () => {
    // Colocar el año actual en el footer
    const anio = document.getElementById('anio');
    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

    // Generar y descargar el PDF
    const downloadBtn = document.getElementById('downloadCv');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const element = document.getElementById('cv-content');

            if (!element) {
                console.error('No se encontró el contenedor del CV');
                return;
            }

            const opt = {
                margin: 10,
                filename: 'Gabriel_Alejandro_Rubira_CV.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    scrollY: 0
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait'
                },
                pagebreak: {
                    mode: ['avoid-all', 'css', 'legacy']
                }
            };

            html2pdf()
                .set(opt)
                .from(element)
                .save()
                .then(() => console.log('PDF generado correctamente'))
                .catch(err => console.error('Error al generar el PDF:', err));
        });
    } else {
        console.error('No se encontró el botón de descarga');
    }
});