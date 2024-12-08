// Comparar números
const compareNumbers = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultDiv = document.getElementById("compareResult");

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Por favor, ingresa ambos números.";
        return;
    }

    if (num1 > num2) {
        resultDiv.textContent = `El número mayor es: ${num1}`;
    } else if (num1 < num2) {
        resultDiv.textContent = `El número mayor es: ${num2}`;
    } else {
        resultDiv.textContent = "Ambos números son iguales.";
    }
};

// Mostrar el mes correspondiente
const showMonth = () => {
    const monthInput = parseInt(document.getElementById("monthInput").value);

    switch (monthInput) {
        case 1: alert("Enero"); break;
        case 2: alert("Febrero"); break;
        case 3: alert("Marzo"); break;
        case 4: alert("Abril"); break;
        case 5: alert("Mayo"); break;
        case 6: alert("Junio"); break;
        case 7: alert("Julio"); break;
        case 8: alert("Agosto"); break;
        case 9: alert("Septiembre"); break;
        case 10: alert("Octubre"); break;
        case 11: alert("Noviembre"); break;
        case 12: alert("Diciembre"); break;
        default: alert("Por favor, ingresa un número entre 1 y 12.");
    }
};

// Gestión de nombres con array
const nameArray = [];
const addName = () => {
    const nameInput = document.getElementById("nameInput").value;
    const nameList = document.getElementById("nameList");

    if (nameInput.trim() === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    nameArray.push(nameInput);
    nameList.innerHTML = nameArray.map(name => `<p>${name}</p>`).join("");
    document.getElementById("nameInput").value = ""; // Limpiar input
};

// Event listeners
document.getElementById("compareBtn").addEventListener("click", compareNumbers);
document.getElementById("monthBtn").addEventListener("click", showMonth);
document.getElementById("addNameBtn").addEventListener("click", addName);
