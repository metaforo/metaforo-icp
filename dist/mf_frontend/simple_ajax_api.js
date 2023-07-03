async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

getUsers().then(data => console.log(data));


// const userAction = async () => {
//   const response = await fetch('http://example.com/movies.json');
//   const myJson = await response.json(); //extract JSON from the http response
//   // do something with myJson
//   alert('hi chao');
//   console.log(myJson);
// }

// async function logJSONData() {
//   const response = await fetch("http://example.com/movies.json");
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

//   alert('hi ');

// logJSONData();




// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// asyncCall();

