var nota1_html=prompt("ingrese la primera nota de html");
var nota1_css=prompt("ingrese la primera nota de html");
var nota1_js=prompt("ingrese la primera nota de html");
var nota2_html=prompt("ingrese la primera nota de html");
var nota2_css=prompt("ingrese la primera nota de html");
var nota2_js=prompt("ingrese la primera nota de html");
var nota3_html=prompt("ingrese la primera nota de html");
var nota3_css=prompt("ingrese la primera nota de html");
var nota3_js=prompt("ingrese la primera nota de html");

var dw_html_n1 = document.getElementById("html1");
var dw_html_n2 = document.getElementById("html2");
var dw_html_n3 = document.getElementById("html3");
var dw_css_n1 = document.getElementById("css1");
var dw_css_n2 = document.getElementById("css2");
var dw_css_n3 = document.getElementById("css3");
var dw_js_n1 = document.getElementById("js1");
var dw_js_n2 = document.getElementById("js2");
var dw_js_n3 = document.getElementById("js3");

dw_html_n1.innerHTML= nota1_html;
dw_html_n2.innerHTML= nota2_html;
dw_html_n3.innerHTML= nota3_html;
dw_css_n1.innerHTML= nota1_css;
dw_css_n2.innerHTML= nota2_css;
dw_css_n3.innerHTML= nota3_css;
dw_js_n1.innerHTML= nota1_js;
dw_js_n2.innerHTML= nota2_js;
dw_js_n3.innerHTML= nota3_js;

