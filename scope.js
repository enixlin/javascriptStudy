

var userName="linzhenhuan";

function outer(outerArg0){
    var outerVar=1;

    function inner(innerArg0){
        var innerVar=1;
        alert(this.userName);
    }

    inner(2);
    alert(outerVar);
}

outer(1);
