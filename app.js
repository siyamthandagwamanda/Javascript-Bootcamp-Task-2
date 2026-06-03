let students = []

function checkGrade(){

    let name = document.getElementById("nameInput").value;

    let mark = Number(document.getElementById("markInput").value);

    let resultArea = document.getElementById("resultArea");

    if (name === ""){
        resultArea.textContent = "Please eneter a student name";
        resultArea.className = "fail";
        return;
    }

    if (mark < 0 || mark > 100 || isNaN(mark)){
        resultArea.textContent = "Please enter a valid mark between 0 and 100";
        resultArea.className = "fail";
        return;
    }

    let grade = "";

    if (mark >= 75){
        grade ="Distinction";
    }
    else if (mark >= 50) {
        grade = "Pass";
    }
    else
    {
        grade = "Fail";
    }

    resultArea.textContent = name + " scored " + mark + "/100 - " + grade;

    if (grade === "Fail"){
        resultArea.className = "fail";
    }
    else
    {
        resultArea.classListname = "Pass";
    }

    students.push({
        name: name,
        mark: mark,
        grade: grade
    });

    updateList();

    document.getElementById("nameInput").value = "";
    document.getElementById("markInput").value = "";
}

function upodate(){

    let list = document.getElementById("studentList");

    list.innerHTML = "";

    for (let i = 0; i < students.length; i++){

        let li = document.createElement("li");

        li.textContent = students[i].name + " - " + students[i].mark + "/100 - " + students[i].grade;

        if (students[i].grade === "Fail"){
            li.className = "fail-item";
        }else{
            li.className = "pass-item";
        }

        list.appendChild(li);
    }
}
