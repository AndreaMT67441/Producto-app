window.onload = async () => {
    const respuesta = await fetch('http://localhost:5000/api/plantas');
    const plantas = await respuesta.json();
    const listaPlantas = document.getElementById('plantas-lista');
  
    plantas.forEach(planta => {
      const plantaDiv = document.createElement('div');
      plantaDiv.classList.add('planta');
      plantaDiv.innerHTML = `
        <img src="${planta.imagen}" alt="${planta.nombre}">
        <div>
          <h3>${planta.nombre}</h3>
          <p>${planta.descripcion}</p>
          <p>$${planta.precio}</p>
        </div>
      `;
      listaPlantas.appendChild(plantaDiv);
    });
  };
  