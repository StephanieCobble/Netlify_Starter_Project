// domain/.netlify/functions/1-hello

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Hello World",
  };
};

// OR:
// exports.handler = (event, context, cb) => {
//   cb(null, { statusCode: 200, body: "Hello World!" });
// };


// If you want to pass in other forms other that strings, need to stringify it: 
// Ex: 
// const person = { name: 'john'}
// exports.handler = async (event, context) => {
//     return {
//       statusCode: 200,
//       body: JSON.stringify(person),
//     };
//   };

// ^^ this will show on the frontend: 
// { 
//    name: "john" 
// }