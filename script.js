document.getElementById('calc_btn').onclick = calculateDeliveryCost;

function calculateDeliveryCost() {
    // Получаем введенный вес из input
    var weight = document.getElementById("weightInput").value;

    // Проверяем, что вес не является пустой строкой и число
    if (weight !== "" && !isNaN(weight)) {
        // Умножаем вес на 0.8 для расчета стоимости
        var cost = parseFloat(weight) * 0.8;

        // Выводим результат в output
        document.getElementById("resultOutput").value = cost.toFixed(2); // Округляем до двух знаков после запятой
    } else {
        // Выводим сообщение об ошибке, если введенный вес не является числом
        alert("Введите корректный вес в килограммах.");
    }
}