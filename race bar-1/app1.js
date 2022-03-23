const data=[[26,107,18,79],[116,27,358,99],[26,127,18,89],[136,27,18,209],[26,107,18,39],[116,27,158,69],[26,127,18,99],[136,27,18,49],[26,107,18,89],[116,27,158,99],[26,127,18,89],[136,27,18,59],];
const playerNames=['neymar','sunil chethri','ronaldo','messi'];
const playerColors=['green','blue','lightblue','lightgreen'];


var initialTopPosition=10;




function createDiv(){
    return document.createElement('div');
}
const players=[];
for(var j=0;j<playerNames.length;j++){
    players[j]=createDiv();
   
    players[j].classList.add(`class${j}`);
    players[j].style.position='absolute';
    players[j].style.backgroundColor=playerColors[j];
    players[j].append(playerNames[j]);
    players[j].style.textAlign='right';
 }
 let i1=0;

setInterval(function d(){
        cumm=[];
        if(i1<data.length){
            for(var o=0;o<data[0].length;o++){
                cumm[o]=0;
            }

            for(var l=0;l<=i1;l++){
                for(let k=0;k<data[l].length;k++){
                    cumm[k]+=data[l][k];
                }
            }
            
            let copy1=cumm.slice();
            
            let copy2=cumm.slice();
            
            copy2.sort(function(a,b){return a-b});
            

            let indexData=[];
            for(let x=0;x<copy2.length;x++){
                indexData.push(copy1.indexOf(copy2[x]));
            }
            
            
            
            for(var j=indexData.length-1,p=1;j>=0;j--,p++){
               
                document.body.append(players[j]);
                
                players[indexData[j]].style.height='20px';
                players[indexData[j]].style.width=copy2[j]+'px';
              
                   
                    $(`.class${indexData[j]}`).animate({"top":`${p*initialTopPosition*10}px`},1000,"swing");
               
                
               
                
                
                
            }


            
        }
        i1++ ; 
    }
    
    ,1000);

/* */
/*const data=[[20,100,100,100],[110,20,350,90],[20,120,10,80],[130,20,10,200],[20,100,10,35],[110,20,150,67],[20,120,10,98],[130,20,10,45],[20,100,10,86],[110,20,150,97],[20,120,10,84],[130,20,10,56]];
const playerNames=['ronaldo','messi','neymar','sunil chethri'];
const playerColors=['green','blue','lightblue','lightgreen'];


var initialTopPosition=10;




function createDiv(){
    return document.createElement('div');
}
const players=[];
for(var j=0;j<playerNames.length;j++){
    players[j]=createDiv();
   
    document.body.append(players[j]);
    players[j].style.position='absolute';
    players[j].style.backgroundColor=playerColors[j];
    players[j].append(playerNames[j]);
    players[j].style.textAlign='right';
 }
 let i1=0;

setInterval(function d(){
        cumm=[];
        if(i1<data.length){
            for(var o=0;o<data[0].length;o++){
                cumm[o]=0;
            }

            for(var l=0;l<=i1 && l<data.length;l++){
                for(let k=0;k<data[l].length;k++){
                    cumm[k]+=data[l][k];
                }
            }
            
            let copy1=cumm.slice();
            
            let copy2=cumm.slice();
            
            copy2.sort(function(a,b){return a-b});
            

            let indexData=[];
            for(let x=0;x<copy2.length;x++){
                indexData.push(copy1.indexOf(copy2[x]));
            }
            
            
            
            for(var j=indexData.length-1,p=1;j>=0;j--,p++){
                
                players[indexData[j]].style.height='20px';
               
                players[indexData[j]].style.top=p*initialTopPosition*10+'px';
                players[indexData[j]].style.width=copy2[j]+'px';

                
                
            }


            
        }
        i1++ ; 
    }
    
    ,1000);
*/








/*const data=[[20,100],[110,20],[20,120],[130,20]];
var i=0
var firstPos=0;
var secondPos=0;
var initialTopPosition=10;
var difference=30;

for(let iterationOfData of data){
    let copy =iterationOfData.slice();//iterationOfD
    iterationOfData.sort(function(a,b){return a-b});
    let indexData=[];
    for(let copyOfEachIndividual of copy){
        indexData.push(iterationOfData.indexOf(copyOfEachIndividual));

    }
    if(data.indexOf(iterationOfData)==0){

    }

}

function init(){
    document.getElementById('first').style.top=initialTopPosition+'px';
    document.getElementById('second').style.top=difference+'px';
    document.getElementById('first').style.position='absolute';
    document.getElementById('second').style.position='absolute';
    document.getElementById('first').style.width='0px';
    document.getElementById('second').style.width='0px';
    }
window.onload=init;

setInterval(
    function add(){

if(i<data.length){
firstPos+=data[i][0];
secondPos+=data[i][1];
console.log(firstPos);
console.log(secondPos);
const first=document.getElementById("first").getBoundingClientRect();

const second=document.getElementById("second").getBoundingClientRect();

    if (secondPos>firstPos){
        

        var firstd = document.getElementById('first');
        var secondd=document.getElementById('second');
        let x1=first.top;
        let x2=first.bottom;
        
        firstd.style.position='absolute';
        firstd.style.top = 40+'px';
        firstd.style.bottom = 60+'px';
        console.log("position of firstd top"+firstd.style.top+"position of firstd bottom"+firstd.style.bottom );
        document.getElementById('first').style.width=firstPos+'px';
        secondd.style.position = "absolute";
        secondd.style.top=10+'px';
        secondd.style.bottom=30+'px';
        document.getElementById('second').style.width=secondPos+'px';
        console.log("position of secondd top"+secondd.style.top+"position of secondd bottom"+secondd.style.bottom );

        

    }
    else{
        var firstd = document.getElementById('first');
        var secondd=document.getElementById('second');
        let x1=second.top;
        let x2=second.bottom;
       
        secondd.style.position = "absolute";
        secondd.style.top = 40+'px';
        secondd.style.bottom = 60+'px';
        document.getElementById('second').style.width=secondPos+'px';
        console.log("position of secondd top"+secondd.style.top+"position of secondd bottom"+secondd.style.bottom );
        firstd.style.position='absolute';
        firstd.style.top=10+'px';
        firstd.style.bottom=30+'px';
        document.getElementById('first').style.width=firstPos+'px';
 console.log("position of firstd top"+firstd.style.top+"position of firstd bottom"+firstd.style.bottom );
        
    }
    
i++;

}
},1000);
    









 */