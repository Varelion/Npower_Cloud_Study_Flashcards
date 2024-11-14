let arrayOfTests = [];

let test = {
	title: "",
	content: []
};

function setArrayMetadata(toSave) {
	let titleElement = document.getElementsByClassName("syllabus__topic--active")[0];
	let title = titleElement.innerText.replace(/\./g, '').split(" ").join("_");
	if (toSave) {
		arrayOfTests.push(test);
	}
	console.log("setArrayMetadata before test reset",test)
	test = {
		title: title,
		content: []
	};
	console.log(arrayOfTests)
	return true
}


function findAndClickReviewQuestions() {
	let reviewAllQuestionResults;



	// Find and click the review button
	document.querySelectorAll("button.btn.btn--primary > span").forEach(element => {
		if (element.innerHTML.toLowerCase().includes('review all question results')) {
			reviewAllQuestionResults = element.parentElement;  // Use parent element to ensure button click
		}
	});
	reviewAllQuestionResults?.click();
}


function sortQuestions() {
	let questions = Array.from(document.getElementsByTagName('li'));
	let questionContent = document.querySelector('div.question__body > p').innerText;
	let correct = [];
	let wrong = [];

	questions.forEach((q) => {
		let titleElement = document.getElementsByClassName("syllabus__topic--active")[0];
		let title = titleElement.innerText.replace(/\./g, '').split(" ").join("_");
		if (test.title === "" || title !== test.title) {
			console.log("inside for each")
			setArrayMetadata()
		};
		const x = q.innerText.split("\n").slice(0, 2).join(" ")

		if (q.classList.contains("choice--selected--false")) {
			wrong.push(x);
		}
		if (q.classList.contains("choice--selected--true")) {
			correct.push(x);
		}
	});

	// Create a new test object and push to arrayOfTests
	let test_questions = {
		question: questionContent,
		correctAnswersArray: correct,
		wrongAnswersArray: wrong,
		hint: "",
		notes: "",
		frequencyBasedOnDifficulty: 5,
	};
	test.content.push(test_questions); // Adds the 'test' object itself into the 'content' array}
};

function clickNext() {
	let nextButtons = Array.from(document.querySelectorAll('div > button > span'));
	let hasClicked = false;

	nextButtons.forEach((n) => {
		if (n.innerText.toLowerCase() === 'next question') {
			n.click();
			hasClicked = true;
		} else if (n.innerText.toLowerCase() === 'see results'){
			n.click();
			hasClicked = true;
			setArrayMetadata(true);

		}
	});
	return hasClicked;
}

function clickNextTest() {
	// Check for the "Finish" or "Success" button outside the loop
	let hasClicked = false;

	let finishButton = document.querySelector('div > a.btn--success > div');
	if (finishButton) {
		finishButton.click();
		hasClicked = true;
	}

	return hasClicked

}


// Function to call each helper function in sequence
function orderOfOperations() {
	findAndClickReviewQuestions();
	sortQuestions();
	clickNext();
	clickNextTest();
}


// Function to download arrayOfTests as a .json file
function downloadJSONFile() {
	const jsonString = JSON.stringify(arrayOfTests, null, 2);  // Convert array to JSON with formatting
	const blob = new Blob([jsonString], { type: "application/json" });
	const link = document.createElement("a");

	link.href = URL.createObjectURL(blob);
	link.download = "testResults.json";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	console.log("JSON file downloaded: testResults.json");
}


// Main control function to check for the target element and repeat operations
function checkForCompletion() {
	// Find the element with the target inner text
	const targetElement = Array.from(document.querySelectorAll('button > span')).find(
		el => el.innerText === "Exit Course"
	);

	if (targetElement) {
		// Clear the interval if the target element is found
		clearInterval(intervalId);
		// console.log("Target element found. Stopping execution.");
		downloadJSONFile();  // Download the JSON file when done
	} else {
		// Execute the main operation if target element is not found
		orderOfOperations();
		// console.log("Target element not found, continuing...");
	}
}

// Set the interval to run every 2 seconds (2000 milliseconds)
const intervalId = setInterval(checkForCompletion, 1000);
