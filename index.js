// // console.log("hello world");

// // const arr = [
// //     { name: 'Will'},
// //     { name: 'Bill'}
// // ];
// // var result = arr.map(e => e.name)
// // console.log(result);

// // var body = document.querySelector('body')

// const _ = require("lodash")
// const variousBrownBears = require("./bears")

// // const variousBrownBears = [
// //     "Atlas bear",
// //     "Bergman's bear",
// //     "Blue bear",
// //     "Eurasian brown bear",
// //     "European brown bear",
// //     "Gobi bear",
// //     "Grizzly bear",
// //     "Himalayan brown bear",
// //     "Ussuri brown bear",
// //     "Kamchatka brown bear",
// //     "Kodiak bear",
// //     "Marsican brown bear (critically endangered)",
// //     "Mexican grizzly bear",
// //     "East Siberian brown bear",
// //     "Syrian brown bear"
// //   ];

//   const randomBear = _.sample(variousBrownBears)
//   console.log(randomBear);

const fs = require("fs")

// fs.writeFile("./file.txt", "hello world", err => {
//     if(err) console.log(err)
//     console.log("done writing this file");
// })

// const data = "Lorem ipsum"
// const programmer = {
//     needsCoffee: true,
//     name: "Backen D'Coder",
//     password: "serverside",
//     hobbies: ["reading", "writing", "coding", "chess"]
// };

// stringProgrammer = JSON.stringify(programmer);

// fs.writeFile("./bears.js", stringProgrammer, err => {
//     if(err) console.log(err)
//     console.log("done writing this file");
// })

fs.readFile("./bears.json", "utf8", (err, data) => {
    if(err) {
        console.log(err);
        return
    } else {
        console.log("file read successfully");

        console.log(typeof data)

        const convertedInput = JSON.parse(data)

        console.log(typeof convertedInput)

        console.log(data.password)

        console.log(convertedInput.hobbies)
    }
})