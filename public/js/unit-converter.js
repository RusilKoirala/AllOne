const units = {
    length: ["meters", "kilometers", "miles", "feet"],
    temperature: ["Celsius", "Fahrenheit", "Kelvin"],
    weight: ["kilograms", "grams", "pounds", "ounces"]
  };
  
  // Called on page load and when category changes
  function updateUnits() {
    const category = document.getElementById('category').value;
    const fromSelect = document.getElementById('fromUnit');
    const toSelect = document.getElementById('toUnit');
  
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';
  
    units[category].forEach(unit => {
      const optionFrom = document.createElement('option');
      optionFrom.value = unit;
      optionFrom.textContent = unit;
      fromSelect.appendChild(optionFrom);
  
      const optionTo = document.createElement('option');
      optionTo.value = unit;
      optionTo.textContent = unit;
      toSelect.appendChild(optionTo);
    });
  }
  
  function convert() {
    const category = document.getElementById('category').value;
    const from = document.getElementById('fromUnit').value;
    const to = document.getElementById('toUnit').value;
    const value = parseFloat(document.getElementById('value').value);
    let result;
  
    if (isNaN(value)) {
      alert('Please enter a valid number');
      return;
    }
  
    switch (category) {
      case 'length':
        result = convertLength(value, from, to);
        break;
      case 'temperature':
        result = convertTemperature(value, from, to);
        break;
      case 'weight':
        result = convertWeight(value, from, to);
        break;
    }
  
    document.getElementById('result').textContent = `Result: ${result}`;
  }
  
  // Conversion functions
  function convertLength(value, from, to) {
    const toMeters = {
      meters: 1,
      kilometers: 1000,
      miles: 1609.34,
      feet: 0.3048
    };
    const meters = value * toMeters[from];
    return meters / toMeters[to];
  }
  
  function convertTemperature(value, from, to) {
    let celsius;
  
    if (from === 'Celsius') celsius = value;
    else if (from === 'Fahrenheit') celsius = (value - 32) * 5 / 9;
    else if (from === 'Kelvin') celsius = value - 273.15;
  
    if (to === 'Celsius') return celsius;
    else if (to === 'Fahrenheit') return (celsius * 9 / 5) + 32;
    else if (to === 'Kelvin') return celsius + 273.15;
  }
  
  function convertWeight(value, from, to) {
    const toKg = {
      kilograms: 1,
      grams: 0.001,
      pounds: 0.453592,
      ounces: 0.0283495
    };
    const kg = value * toKg[from];
    return kg / toKg[to];
  }
  
  // Initialize units on page load
  window.onload = updateUnits;
  