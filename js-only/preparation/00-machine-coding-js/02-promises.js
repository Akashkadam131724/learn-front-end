// Promise.resolve("resolved");

// const newPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("rejected successfully");
//     res("resolved successfully");
//   }, 1000);
// });

// newPromise.then(
//   function (res) {
//     console.log(res);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

//------------------------------------------------------------------------------

// let promise = new Promise((resolve) => {
//   setTimeout(() => resolve("done!"), 1000);
// });

// promise.then(alert);

// let promiseFail = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// .catch(f) is the same as promise.then(null, f)
// promiseFail.catch(alert); // shows "Error: Whoops!" after 1 second

// const promiseFinally = new Promise((res, rej) => {
//   res("success");
// });

// promiseFinally.then((res) => alert(res)).finally(() => alert("finally"));

//------------------------------------------------------------------------------

// function loadScript(src) {
//   return new Promise((res, rej) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => res(script);
//     script.onerror = () => rej(new Error("Script error" + src));
//     document.head.append(script);
//   });
// }

// let externalSrc =
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.j";
// let promiseScript = loadScript(externalSrc);
// promiseScript.then(
//   (script) => alert(`Script ${script.src} loaded successfully`),
//   (error) => alert(`Script ${error.message} failed`)
// );

// promiseScript.then((script) => alert("Another handler..."));

//--------------------------------------- Promise chain---------------------------------------

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000); // (*)
// })
//   .then(function (result) {
//     // (**)

//     alert(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     // (***)

//     alert(result); // 2
//     return result * 2;
//   })
//   .then(function (result) {
//     alert(result); // 4
//     return result * 2;
//   });

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then(function (result) {
//   alert(result); // 1
//   return result * 2;
// });

// promise.then(function (result) {
//   alert(result); // 1
//   return result * 2;
// });

// promise.then(function (result) {
//   alert(result); // 1
//   return result * 2;
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     alert(result); // 1

//     return new Promise((resolve, reject) => {
//       // (*)
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     // (**)

//     alert(result); // 2

//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     alert(result); // 4
//   });
