document.addEventListener('DOMContentLoaded', () => {
    cargarPortafolio();
});

function cargarPortafolio() {
    fetch('datos.json')
    .then( respuesta => {
        return respuesta.json();
    })
    .then( datos => {
        let html = '';

        datos.portafolio.forEach(portafolio => {
            html += `
                <div class="project">
                    <img src="../img/${portafolio.id}.jpg">
                    <div class="project-details">
                        <h3>${portafolio.nombre}</h3>
                        <p>${portafolio.desc}</p>
                    </div>
                </div>
            `;
        });

        // Inyección del HTML
        document.querySelector('#list').innerHTML = html;
    });
}