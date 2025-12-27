async function getTimeTable() {
    let regNo = document.getElementById('regno').value;
    let theory = await fetch("theory.csv.csv").then(r=> r.text());
    let pratical = await fetch("pratical.csv.csv").then(r=> r.text());

    let theoryRows = theory.split("\n").slice(1);
    let praticalrows = pratical.split("\n").slice(1);


    let output ="<h3> Pratical Rxams </h3><ul>";

    for (let row of theoryRows){
        let cols = row.split(",").map(c => c.trim());
        if(cols[0] === regNo){
            output+=`<li> ${cols[1]}-${cols[2]}-${cols[3]}-${cols[4]}-${cols[5]}-${cols[6]}-${cols[7]}-${cols[8]}</li>`;
        }
    }

    output +="<h3> Theory Exams </h3><ul>";

    for (let row of praticalrows){
        let cols = row.split(",").map(c=>c.trim());
        if(cols[0] === regNo){
            output+=`<li> ${cols[1]}-${cols[2]}-${cols[3]}-${cols[4]}-${cols[5]}-${cols[6]}-${cols[7]}-${cols[8]}</li>`;
        }
    }


output += '</ul>';
document.getElementById('result').innerHTML=output;


console.log(cols);

}