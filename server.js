const express = require('express');
 
const app = express();
const server = app.listen(3000,function(){
    console.log('Listening to port 3000')
})

app.set('view engine','ejs');
app.set('views','html');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/api/game/start',(req,res) =>{
    var ab=0,ac=0,ad=0,ba=0,bc=0,bd=0,ca=0,cb=0,cd=0,da=0,db=0,dc=0;
    const player1 = Math.floor((Math.random() * 3));
    const player2 = Math.floor((Math.random() * 3));
    const player3 = Math.floor((Math.random() * 3));
    const player4 = Math.floor((Math.random() * 3));
    const p1 = check(player1);
    const p2 = check(player2);
    const p3 = check(player3);
    const p4 = check(player4);
    const ip=[player1,player2,player3,player4];
    for(let i=0;i<ip.length-1;i++){
        for(let j=i+1;j<ip.length;j++){
            if(ip[i]==0&&ip[j]==2){
                if(i==0){
                    if(j==1){
                        ab++;
                    }
                    else if(j==2){
                        ac++;
                    }
                    else if(j==3){
                        ad++;
                    }
                }
                else if(i==1){
                    if(j==2){
                        bc++;
                    }
                    else if(j==3){
                        bd++;
                    }
                }
                else if(i==2){
                    if(j==3){
                        cd++;
                    }
                }
            }
            else if(ip[i]==2&&ip[j]==0){
                if(j==1){
                    if(i==0){
                        ba++;
                    }
                }
                else if(j==2){
                    if(i==0){
                        ca++;
                    }
                    else if(i==1){
                        cb++;
                    }
                }
                else if(j==3){
                    if(i==0){
                        da++;
                    }
                    else if(i==1){
                        db++;
                    }
                    else if(i==2){
                        dc++;
                    }
                }
            }
            else if(ip[i]>ip[j]){
                if(i==0){
                    if(j==1){
                        ab++;
                    }
                    else if(j==2){
                        ac++;
                    }
                    else if(j==3){
                        ad++;
                    }
                }
                else if(i==1){
                    if(j==2){
                        bc++;
                    }
                    else if(j==3){
                        bd++;
                    }
                }
                else if(i==2){
                    if(j==3){
                        cd++;
                    }
                }
            }
            else if(ip[j]>ip[i]){
                if(j==1){
                    if(i==0){
                        ba++;
                    }
                }
                else if(j==2){
                    if(i==0){
                        ca++;
                    }
                    else if(i==1){
                        cb++;
                    }
                }
                else if(j==3){
                    if(i==0){
                        da++;
                    }
                    else if(i==1){
                        db++;
                    }
                    else if(i==2){
                        dc++;
                    }
                }   
            }
        }

    }
    res.render('index',{
        p1:p1,
        p2:p2,
        p3:p3,
        p4:p4,
        p1vp2:ab,
        p1vp3:ac,
        p1vp4:ad,
        p2vp1:ba,
        p2vp3:bc,
        p2vp4:bd,
        p3vp1:ca,
        p3vp2:cb,
        p3vp4:cd,
        p4vp1:da,
        p4vp2:db,
        p4vp3:dc
    })
})
function check(a){
    if(a==0){
        return "ROCK";
    }
    else if(a==1){
        return "PAPER";
    }
    else if(a==2){
        return "SCISSORS";
    }
}