function calculate() {
    const income = parseInt(document.getElementById("income-total").value)
    const food = parseInt(document.getElementById("food-cost").value)
    const rent = parseInt(document.getElementById("rent-total").value)
    const cloths = parseInt(document.getElementById("cloth-total").value)
    const expense = (food + rent + cloths);
    document.getElementById("total-expensive").innerText = expense;
    document.getElementById("total-balance").innerText = (income - expense);

}

const percentage = () => {
    const income = parseInt(document.getElementById("income-total").value)
    const food = parseInt(document.getElementById("food-cost").value)
    const rent = parseInt(document.getElementById("rent-total").value)
    const cloths = parseInt(document.getElementById("cloth-total").value)
    const expense = (food + rent + cloths);
    const percentage = parseFloat(document.getElementById("total-save").value) / 100;
    const save = (income - expense) * percentage;
    document.getElementById("saving-amount").innerText = save;
    document.getElementById("remaining-balance").innerText = income - (expense + save);

}
