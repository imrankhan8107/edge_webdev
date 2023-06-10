// console.log("Hello world");
// console.log(Math.max(123, 1242, 2325, 2353));
// console.log(process.argv);

if (process.argv.length > 2) {
    console.log("Hello " + process.argv[2]);
} else{
    console.log("Hello world");
}