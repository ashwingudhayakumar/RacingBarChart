const data = [
    [26, 107, 18, 79],
    [116, 27, 358, 99],
    [26, 127, 18, 89],
    [136, 27, 18, 209],
    [26, 107, 18, 39],
    [116, 27, 158, 69],
    [26, 127, 18, 99],
    [136, 27, 18, 49],
    [26, 107, 18, 89],
    [116, 27, 158, 99],
    [26, 127, 18, 89],
    [136, 27, 18, 59],
];

const playerNames = ['neymar', 'sunil chethri', 'ronaldo', 'messi'];
const playerColors = ['green', 'blue', 'lightblue', 'lightgreen'];

function createRectSvg() {
    var svgns = "http://www.w3.org/2000/svg";
    return document.createElementNS(svgns, 'rect');
}

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (i === 0) {
            var rect = createRectSvg();
            rect.setAttributeNS(null, 'x', "20");
            rect.setAttributeNS(null, 'y', `${20*(i+1)}`);
            rect.setAttributeNS(null, 'width', `${data[i][j]}`);
            rect.setAttributeNS(null, 'height', '20');
            rect.setAttributeNS(null, 'fill', `${playerColors[i]}`);

            document.getElementById('svgOne').append(rect);
        }



        //translate(x,y,z) rotate scale
    }
}


<
g transform = "rotate(0) translate(184.929 110.283) scale(1 1)"
id = "9C6053BB-5090-407E-BF0E-9CF99B9A67A8"
class = "shape_box zs_show"
rotategroupid = "ABB9378F-BAC1-424E-8AD9-828C154F8910" > < defs id = "defs" > < /defs><g transform="rotate(0) translate(0 0) scale(1 1)" id="ABB9378F-BAC1-424E-8AD9-828C154F8910" class="rotategroup"><g transform="rotate(0) translate(0 0) scale(1 1)" id="shapegroup" class="shapegroup group"><g transform="rotate(0) translate(0 0) scale(1 1)" id="4D8CF683-3710-40F2-A5DE-29CC5F562BED" class="shape_box zs_show grouped" rotategroupid="8B271F98-D6E5-4E21-9717-29CA8C150CF0"><defs id="defs"></defs > < g transform = "rotate(0) translate(0 0) scale(1 1)"
id = "8B271F98-D6E5-4E21-9717-29CA8C150CF0"
class = "rotategroup" > < g transform = "rotate(0) translate(0 0) scale(1 1)"
id = "shapegroup"
class = "shapegroup group" > < path id = "path0"
class = "path"
d = "M 0 0 L 512.181 0 L 512.181 48.085 0 48.085 0 0 z "
fill - rule = "evenodd"
fill - opacity = "1"
fill = "rgb(66,195,201)"
stroke = "none"
stroke - dasharray = "none"
stroke - linejoin = "ROUND"
stroke - linecap = "BUTT"
stroke - width = "1" > < /path><path id="path1" class="path selector" d="M 0 0 L 512.181 0 L 512.181 48.085 0 48.085 0 0 z " fill-rule="evenodd" fill="none" stroke-opacity="0" stroke="rgb(255, 255, 255)" stroke-dasharray="none" stroke-linejoin="ROUND" stroke-linecap="BUTT" stroke-width="11" vector-effect="non-scaling-stroke"></path > < /g></g > < /g><g transform="rotate(0) translate(0 90.708) scale(1 1)" id="8D281247-C70F-439B-B05E-29297BB51AF9" class="shape_box zs_show grouped" rotategroupid="FFC9758E-BF8A-47AC-B53D-471B16DCC6FE"><defs id="defs"></defs > < g transform = "rotate(0) translate(0 0) scale(1 1)"
id = "FFC9758E-BF8A-47AC-B53D-471B16DCC6FE"
class = "rotategroup" > < g transform = "rotate(0) translate(0 0) scale(1 1)"
id = "shapegroup"
class = "shapegroup group" > < path id = "path0"
class = "path"
d = "M 0 0 L 512.181 0 L 512.181 48.085 0 48.085 0 0 z "
fill - rule = "evenodd"
fill - opacity = "1"
fill = "rgb(66,195,201)"
stroke = "none"
stroke - dasharray = "none"
stroke - linejoin = "ROUND"
stroke - linecap = "BUTT"
stroke - width = "1" > < /path><path id="path1" class="path selector" d="M 0 0 L 512.181 0 L 512.181 48.085 0 48.085 0 0 z " fill-rule="evenodd" fill="none" stroke-opacity="0" stroke="rgb(255, 255, 255)" stroke-dasharray="none" stroke-linejoin="ROUND" stroke-linecap="BUTT" stroke-width="11" vector-effect="non-scaling-stroke"></path > < /g></g > < /g><g transform="rotate(0) translate(0 174.164) scale(1 1)" id="2E189126-2E99-452E-8CBF-DAF131CF849D" class="shape_box zs_show grouped" rotategroupid="8BF0C207-9DA0-45A1-A701-7DB740895292"><defs id="defs"></defs > < g transform = "rotate(0) translate(0 0) scale(1 1)"
id = "8BF0C207-9DA0-45A1-A701-7DB740895292"
class = "rotategroup" > < g transform = "rotate(0) translate(0 0) scale(1 1)"
id = "shapegroup"
class = "shapegroup group" > < path id = "path0"
class = "path"
d = "M 0 0 L 512.181 0 L 512.181 48.085 0 48.085 0 0 z "
fill - rule = "evenodd"
fill - opacity = "1"
fill = "rgb(66,195,201)"
stroke = "none"
stroke - dasharray = "none"
stroke - linejoin = "ROUND"
stroke - linecap = "BUTT"
stroke - width = "1" > < /path><path id="path1" class="path selector" d="M 0 0 L 512.181 0 L 512.181 48.085 0 48.085 0 0 z " fill-rule="evenodd" fill="none" stroke-opacity="0" stroke="rgb(255, 255, 255)" stroke-dasharray="none" stroke-linejoin="ROUND" stroke-linecap="BUTT" stroke-width="11" vector-effect="non-scaling-stroke"></path > < /g></g > < /g><g transform="rotate(0) translate(0 257.717) scale(1 1)" id="B26AA89B-7C48-48F4-99BA-9A6EC731553F" class="shape_box zs_show grouped" rotategroupid="B410DFAA-499B-4D70-A133-61851A0329CC"><defs id="defs"></defs > < g transform = "rotate(0) translate(0 0) scale(1 1)"
id = "B410DFAA-499B-4D70-A133-61851A0329CC"
class = "rotategroup" > < g transform = "rotate(0) translate(0 0) scale(1 1)"
id = "shapegroup"
class = "shapegroup group" > < path id = "path0"
class = "path"
d = "M 0 0 L 512.181 0 L 512.181 48.085 0 48.085 0 0 z "
fill - rule = "evenodd"
fill - opacity = "1"
fill = "rgb(66,195,201)"
stroke = "none"
stroke - dasharray = "none"
stroke - linejoin = "ROUND"
stroke - linecap = "BUTT"
stroke - width = "1" > < /path><path id="path1" class="path selector" d="M 0 0 L 512.181 0 L 512.181 48.085 0 48.085 0 0 z " fill-rule="evenodd" fill="none" stroke-opacity="0" stroke="rgb(255, 255, 255)" stroke-dasharray="none" stroke-linejoin="ROUND" stroke-linecap="BUTT" stroke-width="11" vector-effect="non-scaling-stroke"></path > < /g></g > < /g></g > < /g></g >