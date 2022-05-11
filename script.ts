class Player{
    hit():number{
        return Math.round(Math.random()*6);
    }  
}

class Team{
 score:number=0;
 players=[];
    getScore(teamnum:number,playernum:number){
        
            var pscore=0;
             var pl=new Player();
             for(let i=1;i<=6;i++){
                 let psb=document.getElementById(teamnum.toString()+playernum.toString()+i.toString());
            let currentscore=pl.hit();
            psb.innerHTML=currentscore.toString();
            if(currentscore!==0){
                this.score+=currentscore;
                pscore+=currentscore;
            }
            else
            break;
        }
        this.players.push(pscore);
        return this.score;
    }
    get_man(){
        let max=0;
        for(let i=0;i<this.players.length;i++){
            if(this.players[i]>max)
            max=this.players[i];
        }
        return [this.players.indexOf(max),max];
    }

            
}

let team1= new Team();
let team2= new Team();
var finalscore1;
var finalscore2;
var player1=[];
var player2=[];
var score1=document.getElementById("score1");
var score2=document.getElementById("score2");

var winner=document.getElementById("winner");
for(let i=1;i<=10;i++){
    var hitbutton=document.getElementById("hitbtn1");
    
    hitbutton.addEventListener('click',()=>{
        finalscore1=team1.getScore(1,i);
        score1.innerHTML=finalscore1.toString();
    });
    hitbutton=document.getElementById("hitbtn2");
    hitbutton.addEventListener('click',()=>{
        finalscore2=team2.getScore(2,i);
        score2.innerHTML=finalscore2.toString();
    });

}
var resultbtn=document.getElementById("result");
var manmatch=document.getElementById("man");
var manscore=document.getElementById("manscore");
resultbtn.addEventListener('click',()=>{
    if(finalscore1>finalscore2)
    winner.innerHTML="TEAM 1";
    else
    winner.innerHTML="TEAM 2";
    var man1=team1.get_man();
    var man2=team2.get_man();
    if(man1[1]>man2[1]){
        manmatch.innerHTML=man1[0].toString();
        manscore.innerHTML=man1[1].toString();
    }
    else{
        manmatch.innerHTML=man2[0].toString();
        manscore.innerHTML=man2[1].toString();
    }

})

