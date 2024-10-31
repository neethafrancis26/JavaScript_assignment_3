// {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order.
// (output should be ['q', 'p', 'c', 'f', 'b', 'a'])
const numbers = {
    a: 'one',
    b: '2',
    f: '5',
    c: '33',
    p: 'do',
    q: 'one'
};

let keys = Object.keys(numbers).reverse();
console.log(keys);

//Question 2: { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// From the given object remove the data arrays item with id as '24'. (consider that the data arrays order will be different 
// every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )

let datas = {
    data: [{ a: 'one', id: '22' },
    { a: 'four', id: '7' },
    { a: 'six', b: '2' },
    { a: 'sixty', id: '24' },
    { a: 'five', id: '212' }]
}
datas.data = datas.data.filter(item => item.id !== '24');
console.log(datas.data);


//Question 3: Write a function to 
//3.a Calculate the height of the end user's browser screen
const screenHeight = screen.height;
console.log("Browser screen height: " + screenHeight);

//3.b To console the name of the web host
const hostName = window.location.hostname;
console.log("Host Name:" + hostName);

//3.c To show a warning message if there is no https protocol used in the visited website.
function httpProtocol() {
    if (window.location.protocol != "https:") {
        alert("This site doesnot use a https protocol");
    }
}
httpProtocol();

//3.d To show an alert message after 10sec while the page is refereshed.
setTimeout(function(){
    alert("it has been 10sec since your page is refreshed ");
},10000);


// Question 4: Store your basic details in localstorage of the browser every time the page loads, then console them and finally delete them after 1 minute of the page load. 
function addBasicDetails(){
    const details = {
        name:"name",
        age: "age",
        address:"address"
    };
    details.name = prompt("enter your name:");
    details.age = prompt("Enter your age: ");
    details.address = prompt("Enter your address: ");
    window.localStorage.setItem('details', JSON.stringify(details));
    let userData = JSON.parse(localStorage.getItem("details"));
    console.log(userData);

    setTimeout(function() {
        const removedData = localStorage.removeItem("details");
        console.log("Details removed from local storage.");
        if(!removedData){
            console.log(removedData);
        }
        else{
            console.log("did not remove the data");
        }
    }, 60000);
}
window.addEventListener('load', addBasicDetails);

//Question 5: Redirect to the homepage of google from the console.

// console.log(window.location.href = "https://www.google.com/");









