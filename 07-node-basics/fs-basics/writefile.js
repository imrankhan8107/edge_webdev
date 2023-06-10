const fs =require('fs');

fs.writeFile('test.txt','Hello World',function(err){
    if(err) throw err;
    else console.log('File written successfully');
});