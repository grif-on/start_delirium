/// <reference types="@mapeditor/tiled-api" />
/*
MIT License

Copyright (c) 2023 Grif_on

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//Intended for use in Tiled 1.8.6

let dots = "";
let processOfDelirium = null;

const startDelirium = tiled.registerAction("Start D'LIRIUM with this map", function () {
    let map = tiled.activeAsset;

    dots += ".";
    if (dots === "....") dots = ".";

    let selectedMapPathName = map.fileName;

    tiled.log("Starting D'LIRIUM with map \"" + selectedMapPathName + "\"");
    tiled.log("Please wait " + dots);

    if (processOfDelirium !== null) {
        processOfDelirium.kill();
        processOfDelirium.close();
    }
    processOfDelirium = new Process;
    processOfDelirium.workingDirectory = "..\\..";
    processOfDelirium.start("..\\..\\Delirium.exe",["-map", selectedMapPathName]);

})

startDelirium.text = "Start D'LIRIUM with this map";
startDelirium.icon = "start.png";
startDelirium.shortcut = "F5";

tiled.extendMenu("Map", [
    { separator: true },
    { action: "Start D'LIRIUM with this map", before: "ResizeMap" },
    { separator: true }
]);