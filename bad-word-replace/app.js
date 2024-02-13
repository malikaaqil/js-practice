var str = prompt("bad word replace. \n e.g. Write (there is a bad word in this line)");
var index = str.indexOf("bad");

if(index != -1){

    var first = str.slice(0, index);
    var replaceWith = "good"
    var last = str.slice(index + 3)
    alert(first + replaceWith + last);
}
