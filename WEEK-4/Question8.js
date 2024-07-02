// Using Promises
function makeMultipleRequests() {
  const requests = Array.from({ length: 10 }, () =>
    fetch("https://whatthecommit.com/index.json")
  );
  Promise.all(requests)
    .then((responses) => {
      console.log("All requests completed!");
      // Handle responses
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

makeMultipleRequests();

// Using async/await
async function makeMultipleRequestsAsync() {
  const requests = Array.from({ length: 10 }, () =>
    fetch("https://whatthecommit.com/index.json")
  );
  try {
    const responses = await Promise.all(requests);
    console.log("All requests completed!");
    // Handle responses
  } catch (error) {
    console.error("Error:", error);
  }
}

makeMultipleRequestsAsync();
