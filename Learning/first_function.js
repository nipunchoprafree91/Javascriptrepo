var myname = "nipun";
var age = 33;
var hashobies = true;

function listdetails(username, age, hashobies){
    return(
        `Name: ${username}, Age: ${age},  has hashobies: ${hashobies}`
    );
}

console.log(listdetails(myname ,age ,hashobies));