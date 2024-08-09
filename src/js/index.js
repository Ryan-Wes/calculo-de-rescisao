function calculate() {
    // Get input values
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const monthlyAllowance = parseFloat(document.getElementById('monthly-allowance').value);
    const monthStart = new Date(document.getElementById('month-start').value);
    const monthEnd = new Date(document.getElementById('month-end').value);

    // Validate input
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || isNaN(monthlyAllowance) || isNaN(monthStart.getTime()) || isNaN(monthEnd.getTime())) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Calculate total number of days for internship
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    // Calculate vacation days (30 days per year)
    const vacationDays = (totalDays * 30) / 365;

    // Calculate daily allowance
    const dailyAllowance = monthlyAllowance / 30;

    // Calculate vacation amount
    const vacationAmount = vacationDays * dailyAllowance;

    // Calculate the number of days in the last month
    const lastMonthStart = new Date(monthStart);
    const lastMonthEnd = new Date(monthEnd);
    const daysInLastMonth = Math.ceil((lastMonthEnd - lastMonthStart) / (1000 * 60 * 60 * 24)) + 1;

    // Calculate payment for the last month
    const lastMonthPayment = daysInLastMonth * dailyAllowance;

    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Resultados</h2>
        <p>Total de dias estagiados: ${totalDays}</p>
        <p>Quantidade de dias de férias: ${vacationDays.toFixed(2)}</p>
        <p>Valor da bolsa por dia: R$ ${dailyAllowance.toFixed(2)}</p>
        <p>Valor de férias: R$ ${vacationAmount.toFixed(2)}</p>
        <p>Pagamento pelo último mês: R$ ${lastMonthPayment.toFixed(2)}</p>
    `;
}





