// 1.Using Fetch API
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  fetchData();


// 2.Handling Promises with Async and Await
  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchData();



  // 3.Fetch with Parameters
  document.addEventListener("DOMContentLoaded", () => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
  
        if (!response.ok) {
          throw new Error("HTTP error");
        }
        const data = await response.json();
        
        populateData(data);
      } catch (error) {
        console.error("Error", error);
      }
    }
  
    function populateData(data){
        const tableBody = document.querySelector("#data-table tbody");
    
        data.forEach(post => {
            const row = document.createElement("tr");
    
        const idCell = document.createElement("td");
        idCell.textContent = post.id;
        row.appendChild(idCell);
    
        const titleCell = document.createElement("td");
        titleCell.textContent = post.title;
        row.appendChild(titleCell);
    
        const completedCell = document.createElement("td");
        completedCell.textContent = post.completed;
        row.appendChild(completedCell);
    
    
        tableBody.appendChild(row);
    });
    }

    fetchData();
  });

  // 4.Error Handling in Asynchronous Code
async function fetchData(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/post');
    if (!response.ok){
      throw new Error('Network response was not ok ');
    }
    const data = await response.json();
  }catch(error){
    console.error("fetch error" , error);
  } 
}fetchData();



// 5.Combining Fetch with Async/Await and Error Handling  
async function fetchPosts(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok){
    throw new Error('Network error issues');
    }
    const data = await response.json();
    console.log(data);
  }catch(error){
  console.error("fetch erroe", error)
}

}fetchPosts();



// 1. What did you learn about the Fetch API and handling asynchronous operations inJavaScript?

// Answer:-
// The Fetch API is a modern way to make network requests in JavaScript

//Handling asynchronous operations with the Fetch API involves dealing with promises. Here's how it works in simple terms
// ----------------------------------------------------------------------------
// 2.How does using async and await simplify working with Promises?

// Answer-Using async and await simplifies working with promises by making asynchronous code look and behave more like synchronous code.

// -------------------------------------------------------------------------
// 3.What are the advantages of incorporating error handling in asynchronous
// functions?
// Answer-Incorporating error handling in asynchronous functions ensures that your application is robust, maintainable, and user-friendly

