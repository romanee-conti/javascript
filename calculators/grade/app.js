function handleCalculateGrade(event) {

    const grade = event.target.value.toUpperCase();

     // to stop code if there is no value entered / grade is undefined

     if(!grade) return;

    let percentage;
    switch (grade) {
        case "A":
            percentage = "90% - 100%";
            break;
        case "B":
            percentage = "80% - 89%";
            break;
        case "C":
            percentage = "70% - 79%";
            break;
        case "D":
            percentage = "60% - 69%";
            break;
        case "E":
            percentage = "50% - 59%";
            break;
        case "F":
            percentage = "40% - 49%";
            break;
    }

    alert("The percentage is " + percentage);
}  