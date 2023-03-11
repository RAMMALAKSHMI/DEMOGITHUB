var request = new XMLHttpRequest();
request.open("GET","https://api.covid19api.com/summary");
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
    for(i=0;i<result.length;i++){
        console.log(result);
    }
}