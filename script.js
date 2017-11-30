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
    for(var i = 0; i < gradeArray.length / 2; i ++){
        if(homeworkGrades)
    }

    weightSoFar = hwWeight/100 + quizWeight/100 + testWeight/100 + midtermWeight/100;
    var homework = homeworkGradesAvg * (hwWeight/100);
    var quiz = quizGradesAvg * (quizWeight/100);
    var test = testGradesAvg* (testWeight/100);
    var midterm = midtermGradesAvg * (midtermWeight/100);
    var classGrade = (homework + quiz + test + midterm) / weightSoFar;
    classGrade = classGrade.toFixed(3);
    document.getElementById("classGrade").innerHTML = classGrade + "%";
    return classGrade;
    console.log(classGrade);
}

function calculateFinalGrade(){
    var finalGradeWanted = (document.getElementById("classGradeWanted").value) / 100;
    var classGrade = calculateCurrentGrade()/100;
    var finalWeight = 1.00 - weightSoFar;
    var gradeNeeded = ((finalGradeWanted - classGrade * weightSoFar) / finalWeight) * 100;
    gradeNeeded = gradeNeeded.toFixed(2);
    document.getElementById("finalGradeNeeded").innerHTML = gradeNeeded + "%";
    console.log(gradeNeeded);
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

