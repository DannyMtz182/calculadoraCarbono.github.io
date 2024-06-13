document.getElementById('botonCalc').addEventListener('click', calcularHuellaCarbono);

function calcularHuellaCarbono() {
    // Factores de emisión
    const factorElectricidad = 0.5;  // kgCO₂e por kWh
    const factorTransporte = 0.2;    // kgCO₂e por km
    const factorResiduos = 0.5;      // kgCO₂e por kg de residuos

    // Convertimos números (texto) a números
    const consumoElectricidad = parseFloat(document.getElementById('electricidad').value);
    const kmAnualesTransporte = parseFloat(document.getElementById('transporte').value);
    const kgResiduosAnuales = parseFloat(document.getElementById('residuos').value);

    /*Verificar si los valores de entrada son válidos*/
    if (isNaN(consumoElectricidad) || isNaN(kmAnualesTransporte) || isNaN(kgResiduosAnuales)) {
        document.getElementById('results').innerHTML = `<p style="color: red;">Por favor, introduce valores numéricos válidos en todos los campos.</p>`;
        return;
    }

    // Calculo huella de carbono
    const huellaElectricidad = consumoElectricidad * 12 * factorElectricidad / 1000; // Convertir a toneladas
    const huellaTransporte = kmAnualesTransporte * factorTransporte / 1000; // Convertir a toneladas
    const huellaResiduos = kgResiduosAnuales * factorResiduos / 1000; // Convertir a toneladas

    const huellaTotal = huellaElectricidad + huellaTransporte + huellaResiduos;

    // Resultado huella de carbono
    document.getElementById('results').innerHTML = `
        <h2>Resultados de la Huella de Carbono</h2>
        <p>Huella de carbono por electricidad: ${huellaElectricidad.toFixed(2)} toneladas de CO₂e</p>
        <p>Huella de carbono por transporte: ${huellaTransporte.toFixed(2)} toneladas de CO₂e</p>
        <p>Huella de carbono por residuos: ${huellaResiduos.toFixed(2)} toneladas de CO₂e</p>
        <p><strong>Huella de carbono total: ${huellaTotal.toFixed(2)} toneladas de CO₂e</strong></p>
    `;
}
