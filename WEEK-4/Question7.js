// Using .then
fetch("https://whatthecommit.com/index.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.commit_message);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Using async/await
async function fetchCommitMessage() {
  try {
    const response = await fetch("https://whatthecommit.com/index.json");
    const data = await response.json();
    console.log(data.commit_message);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchCommitMessage();
