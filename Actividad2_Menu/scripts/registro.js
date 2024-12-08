// Registrar usuarios y mostrar en tabla
const registerUser = (event) => {
    event.preventDefault(); // Evitar el envío del formulario
    const id = document.getElementById("id").value;
    const cedula = document.getElementById("cedula").value;
    const nombres = document.getElementById("nombres").value;
    const fecha = document.getElementById("fecha").value;
    const ciudad = document.getElementById("ciudad").value;

    if (!id || !cedula || !nombres || !fecha || !ciudad) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const tableContainer = document.getElementById("tableContainer");
    if (!tableContainer.querySelector("table")) {
        // Crear tabla si no existe
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");

        ["ID", "Cédula", "Nombres", "Fecha de Nacimiento", "Ciudad"].forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            headerRow.appendChild(th);
        });

        table.appendChild(headerRow);
        tableContainer.appendChild(table);
    }

    // Insertar nueva fila
    const table = tableContainer.querySelector("table");
    const row = document.createElement("tr");

    [id, cedula, nombres, fecha, ciudad].forEach(data => {
        const td = document.createElement("td");
        td.textContent = data;
        row.appendChild(td);
    });

    table.appendChild(row);
    document.getElementById("registerForm").reset(); // Limpiar formulario
};

// Event listener
document.getElementById("registerForm").addEventListener("submit", registerUser);
