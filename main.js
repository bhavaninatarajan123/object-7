let obj=[{n:5},{n:9},{n:13},{n:25},{n:40}];
var b=0;
var a=obj.reduce(function(a,b){
    return a+b.n;
},b)
 console.log(a);   
