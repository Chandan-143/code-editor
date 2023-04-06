function run(){
    let htmlCode=document.getElementById("html-code").value;
    let cssCode=document.getElementById("css-code").value;

    let jsCode=document.getElementById("js-code").value;
    let ouotput=document.getElementById("output");

    ouotput.contentDocument.body.innerHTML= htmlCode + "<style>" + cssCode +"</style>";
    ouotput.contentWindow.eval(jsCode);

}