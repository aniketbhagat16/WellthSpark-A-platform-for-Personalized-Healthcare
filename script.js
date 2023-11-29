function calculateRecommendations() {
    // Get user input
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const steps = parseInt(document.getElementById('steps').value);
    const calories = parseInt(document.getElementById('calories').value);
    const sleep = parseInt(document.getElementById('sleep').value);
    const stressLevel = parseInt(document.getElementById('stressLevel').value);
  
    // Simple logic for personalized recommendations
    let recommendations = 'Based on your input, here are some recommendations:\n';
  
    if (age > 60) {
      recommendations += 'Considering your age, make sure to engage in regular physical activity for overall well-being.\n';
    }
  
    if (gender === 'female' && age >= 18 && age <= 45) {
      recommendations += 'For women in your age group, it is recommended to focus on bone health through diet and exercise.\n';
    }
  
    if (steps >= 10000) {
      recommendations += 'Great job on achieving your daily step goal!\n';
    } else {
      recommendations += 'Consider increasing your daily step goal for better health.\n';
    }
  
    if (calories <= 2000) {
      recommendations += 'You are managing your calorie intake well.\n';
    } else {
      recommendations += 'Keep an eye on your calorie intake for better health.\n';
    }
  
    if (sleep >= 7 && sleep <= 9) {
      recommendations += 'You are getting sufficient sleep, which is crucial for overall health.\n';
    } else {
      recommendations += 'Aim for 7-9 hours of sleep for optimal well-being.\n';
    }
  
    if (stressLevel <= 5) {
      recommendations += 'Your stress level is relatively low, but consider incorporating stress-relief activities.\n';
    } else {
      recommendations += 'Explore stress management techniques for improved mental health.\n';
    }
  
    // Display recommendations
    document.getElementById('recommendations').innerText = recommendations;
  }
  