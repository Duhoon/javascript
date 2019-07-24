var integrate = function(param){
    var root = param.name;
    var str = "HTML element has been changed"
    var repstr = "HTML element CSS"
    //param 크기비교 분기
    if (root=="large"){
        var num1 = param.compare1.value;
        var num2 = param.compare2.value;
        if (num1 > num2){
            param.compare3.value = num1;
        } else {
            param.compare3.value = num2;
        }
    }
    else if (root=="exception"){
        var str1 = param.except1.value;
        var locate = str.indexOf(str1);
        var substr = str.substring(0, locate);
        param.except3.value = substr;
    } else if (root=="rep"){
        var str2 = param.strlocate1.value;
        var str3 = param.strlocate2.value;
        var temp = "temptemp";
        var strrep = repstr.replace(str2, temp);
        strrep = strrep.replace(str3, str2);
        strrep = strrep.replace(temp, str3);
        this.strlocate3.value = strrep;  
    }
    return false;
}