import "../less/index.less"

$("button").on("click", function() {
    alert("Hello, 3q!");
})


$.ajax({
    url: "http://127.0.0.1:8081/user/login",
    type: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    data: JSON.stringify({
        username: "admin",
        password: "123"
    }),
    success(res){
        console.log(res)
    }
})

console.log("This is home page.");