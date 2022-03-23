const data = [
    [26, 107, 18, 79, 135, 26, 17, 58],
    [116, 27, 358, 99, 25, 126, 17, 88],
    [26, 127, 18, 89, 115, 26, 157, 98],
    [136, 27, 18, 209, 25, 106, 17, 88],
    [26, 107, 18, 39, 135, 26, 17, 48],
    [116, 27, 158, 69, 25, 126, 17, 98],
    [26, 127, 18, 99, 115, 26, 157, 68],
    [136, 27, 18, 49, 25, 106, 17, 38],
    [26, 107, 18, 89, 135, 26, 17, 208],
    [116, 27, 158, 99, 25, 126, 17, 88],
    [26, 127, 18, 89, 115, 26, 357, 98],
    [136, 27, 18, 59, 25, 106, 17, 78],
];
const playerNames = ['neymar', 'sunil chethri', 'ronaldo', 'messi', 'Diego Mardona', 'pele', 'Rohaldinho', 'hulk'];
const playerColors = ['green', 'lightgreen', 'blue', 'lightblue', 'red', 'pink', 'yellow', 'lightyellow'];


var initialTopPosition = 5;




function createDiv() {
    return document.createElement('div');
}
const playersPosition = [];
for (var j = 0; j < playerNames.length; j++) {
    playersPosition[j] = createDiv();


    playersPosition[j].style.position = 'absolute';
    playersPosition[j].style.backgroundColor = playerColors[j];
    playersPosition[j].append(playerNames[j]);
    playersPosition[j].style.textAlign = 'right';
}
let i1 = 0;

setInterval(function d() {
    cummulative = [];
    if (i1 < data.length) {
        for (var i = 0; i < data[0].length; i++) {
            cummulative[i] = 0;
        }

        for (var i = 0; i <= i1; i++) {
            for (let j = 0; j < data[i].length; j++) {
                cummulative[j] += data[i][j];
            }
        }

        let copy1 = cummulative.slice();

        let copy2 = cummulative.slice();

        copy2.sort(function(a, b) { return a - b });


        let indexData = [];
        for (let i = 0; i < copy2.length; i++) {
            indexData.push(copy1.indexOf(copy2[i]));
        }



        for (var i = indexData.length - 1, j = 1; i >= 0; i--, j++) {

            document.body.append(playersPosition[i]);

            playersPosition[indexData[i]].style.height = '20px';
            //   playersPosition[indexData[i]].style.width=copy2[i]+'px';

            let str = playersPosition[indexData[i]].style.top;
            let slicedStr;
            if (str) { slicedStr = str.slice(0, playersPosition[indexData[i]].style.top.length - 2); }

            let neededToFit = j * initialTopPosition * 10;

            if (slicedStr) {
                if (slicedStr === neededToFit) { $(playersPosition[indexData[i]]).animate({ "width": `${copy2[i]}px` }, 1000, "swing"); } else {
                    $(playersPosition[indexData[i]]).animate({ "width": `${copy2[i]}px`, "top": `${neededToFit}px` }, 1000, "swing");
                }
            } else {
                $(playersPosition[indexData[i]]).animate({ "width": `${copy2[i]}px` }, 1000, "swing");
                playersPosition[indexData[i]].style.top = j * initialTopPosition * 10 + 'px';
            }
        }
        i1++;
    }
}, 1000);