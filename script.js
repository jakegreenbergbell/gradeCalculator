//master function takes all grades from console
//1. take out all the commas and places string into array
//2. puts string values into integers
//3. avgs all values in array
//4. calculate current grade using avgs and weights



function calculateCurrentGrade(){
    var homeworkGrades = document.getElementById("homeworkGrades").value;
    var homeworkGradeWeight = document.getElementById("homeworkGradeWeight").value;
    var hwWeight = parseInt(homeworkGradeWeight);
    var quizGrades = document.getElementById("quizGrade").value;
    var quizGradeWeight = document.getElementById("quizGradeWeight").value;
    var quizWeight = parseInt(quizGradeWeight);
    var testGrades = document.getElementById("testGrade").value;
    var testGradeWeight = document.getElementById("testGradeWeight").value;
    var testWeight = parseInt(testGradeWeight);
    var midtermGrades = document.getElementById("midtermGrade").value;
    var midtermGradeWeight = document.getElementById("midtermGradeWeight").value;
    var midtermWeight = parseInt(midtermGradeWeight);
    var homeworkGradesAvg = averageGrades(gradesToArray(homeworkGrades));
    var quizGradesAvg = averageGrades(gradesToArray(quizGrades));
    var testGradesAvg = averageGrades(gradesToArray(testGrades));
    var midtermGradesAvg = averageGrades(gradesToArray(midtermGrades));

    var gradeArray = [homeworkGradesAvg, "homework", quizGradesAvg, "quizzes", testGradesAvg, "tests", midtermGradesAvg, "midterm"];
    for(var i = 0; i < gradeArray.length; i += 2){
        if(gradeArray[i] < 70){
            document.getElementById(gradeArray[i+1]).style.backgroundColor = "red";
        }
        if(gradeArray[i] >= 70 && gradeArray[i] < 80){
            document.getElementById(gradeArray[i+1]).style.backgroundColor = "orange";
        }
        if(gradeArray[i] < 90 && gradeArray[i] >= 80){
            document.getElementById(gradeArray[i+1]).style.backgroundColor = "yellow";
        }
        if(gradeArray[i] >= 90){
            document.getElementById(gradeArray[i+1]).style.backgroundColor = "green";
        }

    }

    var weightSoFar = hwWeight/100 + quizWeight/100 + testWeight/100 + midtermWeight/100;
    if(validateWeight(weightSoFar)) {
        var homework = homeworkGradesAvg * (hwWeight / 100);
        var quiz = quizGradesAvg * (quizWeight / 100);
        var test = testGradesAvg * (testWeight / 100);
        var midterm = midtermGradesAvg * (midtermWeight / 100);
        var classGrade = (homework + quiz + test + midterm) / weightSoFar;
        classGrade = classGrade.toFixed(3);
        classGrade = printResult(classGrade);
        return [classGrade,weightSoFar];
    }
}

function validateWeight(weight){
    if(weight >= 1 || weight<=0){
        document.getElementById("classGrade").innerHTML = "WEIGHT OF CATEGORIES MUST BE LESS THEN 100% and GREATER THEN 0%";
        document.getElementById("finalGradeNeeded").innerHTML = "";
        return false;
    } else {
        return true;
    }
}

function printResult(grade){
    if(isNaN(grade)){
        document.getElementById("fixData").style.display = "block";
        document.getElementById("classGrade").innerHTML = "";
        document.getElementById("finalGradeNeeded").innerHTML = "";

    }else {
        document.getElementById("classGrade").innerHTML = grade + "%";
        document.getElementById("fixData").style.display = "none";
        document.getElementById("finalGradeNeeded").innerHTML = "";
    }
    return grade;
    console.log(grade);
}

function calculateFinalGrade(){
    var finalGradeWanted = (document.getElementById("classGradeWanted").value) / 100;
    var classGrade = calculateCurrentGrade()[0]/100;
    var weightSoFar = calculateCurrentGrade()[1];
    var finalWeight = 1.00 - weightSoFar;
    var gradeNeeded = ((finalGradeWanted - classGrade * weightSoFar) / finalWeight) * 100;
    gradeNeeded = gradeNeeded.toFixed(2);
    console.log(gradeNeeded);
    if(validateWeight(weightSoFar)) {
        if (isNaN(gradeNeeded) || finalGradeWanted <=0) {
            document.getElementById("fixData2").style.display = "block";
            document.getElementById("finalGradeNeeded").innerHTML = "";

        } else {
            if (gradeNeeded <= 0) {
                document.getElementById("finalGradeNeeded").innerHTML = "YOU WILL RECEIVE AN A NO MATTER YOUR RESULT ON THE FINAL";
                document.getElementById("fixData2").style.display = "none";
            } else {
                document.getElementById("finalGradeNeeded").innerHTML = gradeNeeded + "%";
                document.getElementById("fixData2").style.display = "none";
            }
        }
    }
}
function gradesToArray(grades){
    var arrayOfGrades = grades.split(",");
    for(var i = 0; i < arrayOfGrades.length; i ++){
        arrayOfGrades[i] = parseInt(arrayOfGrades[i]);
    }
    return arrayOfGrades;


}

function averageGrades(gradeArray){
    var sumOfGrades = 0;
    for(var i = 0; i < gradeArray.length; i++){
        sumOfGrades += gradeArray[i];
    }
    var avg = sumOfGrades/(gradeArray.length);
    return avg;
}

