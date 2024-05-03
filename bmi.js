function get_result() {
    let height = 0;
    let weight = 0;
    // Assuming 'p_in' is for pounds and 'k_in' is for kilograms
    if (document.getElementById('k_in').value.length > 0) {
      weight = parseFloat(document.getElementById('k_in').value);
    } else if (document.getElementById('p_in').value.length > 0) {
      weight = parseFloat(document.getElementById('p_in').value) / 2.20462;
    } 
    // Assuming 'i_in' is for inches and 'm_in' is for meters
    if (document.getElementById('m_in').value.length > 0) {
      height = parseFloat(document.getElementById('m_in').value);
    } else if (document.getElementById('i_in').value.length > 0) {
      height = parseFloat(document.getElementById('i_in').value) / 39.3701;
    }
    
    let bmi = weight / (height * height);
    document.getElementById('h_1').innerHTML = bmi.toFixed(2); // Rounds BMI to 2 decimal places

    if (bmi < 18.6){
        document.getElementById('res').innerHTML = "Underweight";
    } else if (bmi < 25) {
        document.getElementById('res').innerHTML = "Healthy weight";
    } else if (bmi < 30){
        document.getElementById('res').innerHTML = "Overweight";
    } else {
        document.getElementById('res').innerHTML = "Obesity";
    }

    
  }