function fetchGradeData() {
    // This function will query the PostgreSQL database and return grade data
    console.log("Fetching grade data...");
}

function populateGradebook(data) {
    // This function will take the fetched data and populate the table
    console.log("Populating gradebook with data:", data);
}

const gradebookData = fetchGradeData();
populateGradebook(gradebookData);