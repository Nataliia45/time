const hours = parseFloat(prompt("Введіть кількість годин:"));


if (isNaN(hours)) {
    alert("Будь ласка, введіть коректну кількість годин.");
} else {
     const seconds = hours * 3600;

    alert(`У ${hours} годинах ${seconds} секунд.`);
}