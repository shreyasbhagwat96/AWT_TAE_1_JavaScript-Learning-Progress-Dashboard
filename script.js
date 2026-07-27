const form = document.getElementById("ProgressForm");
const result = document.getElementById("result");

function ProgressCategory(topics, hours, rating) {
    if (topics >= 10 && hours >= 20 && rating >= 9)
        return "Excellent Progress";
    else if (topics >= 5 && hours >= 10 && rating >= 6)
        return "Good Progress";
    else
        return "Needs Improvement & Work Hard!!!";
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll_no").value;
    let topics = Number(document.getElementById("Topic").value);
    let hours = Number(document.getElementById("hours").value);
    let rating = Number(document.getElementById("rating").value);

    if (name === "" || roll === "" || isNaN(topics) || isNaN(hours) || isNaN(rating)) {
        alert("Please fill all fields correctly");
        return;
    }

    localStorage.setItem("Name", name);
    localStorage.setItem("Roll", roll);

    let category = ProgressCategory(topics, hours, rating);

    result.style.display = "block";
    result.innerHTML = `
        <h2>Learning Progress Report</h2>
        <p>Name: ${name}</p>
        <p>Roll: ${roll}</p>
        <p>Topics: ${topics}</p>
        <p>Hours: ${hours}</p>
        <p>Rating: ${rating}/10</p>
        <p>Progress: ${category}</p>
    `;
});
