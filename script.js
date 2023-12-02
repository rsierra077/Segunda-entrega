// Aquí iría la lógica para obtener datos del sensor
// Por ahora, usaremos datos de ejemplo

function fetchSensorData() {
    // Simular datos de ejemplo
    return {
        temperature: Math.random() * 30,
        humidity: Math.random() * 100
    };
}

function updateSensorData() {
    const data = fetchSensorData();
    document.getElementById('temperature').textContent = data.temperature.toFixed(2);
    document.getElementById('humidity').textContent = data.humidity.toFixed(2);
}

setInterval(updateSensorData, 2000); // Actualizar cada 2 segundos
