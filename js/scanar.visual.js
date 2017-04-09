 var snd = new Audio("snd/scan.mp3");
 function setup() {
 const sign = document.getElementById("loaderPrefix");
 sign.innerHTML = '<span style="font-size: 30px;">scanar</span><br><span>SCAN THROUGH SOLID OBJECT</span><br><span><strong>Note: </strong>Keep your device facing forward to scan accurately.</span><br><button id="QuickScanBTN" class="btn">QUICK SCAN</button>';
 sign.style.opacity = "1";
 sign.style.padding = "15px";
 sign.style.marginTop = "85px";
 }
 document.querySelector('#QuickScanBTN').onclick = function() {
 const sign = document.getElementById("loaderPrefix");
 sign.style.opacity = "0";
 sign.style.padding = "0px";
 sign.style.marginTop = "100px";
 setTimeout( function () {
 scanVis();
 }, 1000)
 };
 function scanVis() {
 const scanVis = document.getElementById("programPort");
 const scanGro = document.getElementById("scanGround");
 const proxy = document.getElementById("loaderPrefix");
 scanGro.style.height = "20px";
 scanVis.style.height = "100vh";
 proxy.style.opacity = "0";
 proxy.style.padding = "0px";
 proxy.style.marginTop = "100px";
 setTimeout( function () {
 snd.play();
 scanVis.style.background = "#000000";
 scanVis.style.top = "30%";
 scanVis.style.width = "40%";
 scanVis.style.height = "40vh";
 scanVis.style.opacity = "0";
 }, 2000)
 setTimeout( function () {
 scanGro.style.top = "50%";
 scanGro.style.opacity = "0";
 scanGro.style.height = "1px";
 }, 2070)
 setTimeout( function () {
 proxy.innerHTML = "<span style='font-size: 30px;'>NOTHING SCANNED.<br>RESCAN?</span><br><button onclick='reloadVis()' class='btn'>ABORT</button><button onclick='ReScanVis()' style='margin-left: 10px;' class='btn'>RESCAN</button>";
 proxy.style.opacity = "1";
 proxy.style.padding = "15px";
 proxy.style.marginTop = "85px";
 }, 4170)
 }
 function reloadVis() {
 const scanVis = document.getElementById("programPort");
 const scanGro = document.getElementById("scanGround");
 const proxy = document.getElementById("loaderPrefix");
 proxy.innerHTML = "<span style='font-size: 30px;'>RELOADING...</span>";
 proxy.style.opacity = "1";
 proxy.style.padding = "15px";
 proxy.style.marginTop = "85px";
 scanGro.style.top = "100%";
 scanGro.style.opacity = "1";
 scanVis.style.background = "#FFC107";
 scanVis.style.top = "50%";
 scanVis.style.width = "100%";
 scanVis.style.height = "0vh";
 scanVis.style.opacity = "1";
 setTimeout( function () {
 proxy.style.opacity = "0";
 proxy.style.padding = "0px";
 proxy.style.marginTop = "100px";
 }, 1170)
 setTimeout( function () {
 proxy.innerHTML = '<button id="QuickScanBTN" class="btn" onclick="scanVis()">QUICK SCAN</button>';
 }, 1670)
 setTimeout( function () {
 setup();
 }, 2270)
 }
 function ReScanVis() {
 reloadVis();
 setTimeout( function () {
 scanVis();
 }, 2100)
 }
