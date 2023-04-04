const form = document.getElementById("budget-calculator");
form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent the form from submitting

    // Get the values entered in the form fields
    const income = document.getElementById("income").value;
    const housing = document.getElementById("housing").value;
    const transportation = document.getElementById("transportation").value;
    const food = document.getElementById("food").value;
    const entertainment = document.getElementById("entertainment").value;

    // Calculate the total income and expenses
    const totalIncome = income;
    const totalExpenses = parseFloat(housing) + parseFloat(transportation) + parseFloat(food) + parseFloat(entertainment);

    // Display the result
    const result = document.getElementById("result");
    result.innerHTML = `Total Income: ${totalIncome} <br> Total Expenses: ${totalExpenses}`;
});
