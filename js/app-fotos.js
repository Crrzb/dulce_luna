var index_1=1,index_2=2,index_3=3;
let left_btn = document.getElementById("left");
let right_btn = document.getElementById("right");

function right_img(){
    
    if(index_3!=29){
        index_1++;
        index_2++;
        index_3++;

        left_btn.classList.remove("visually-hidden");
        if(index_3==29){
            right_btn.classList.add("visually-hidden");
        }
        
    }else{
        right_btn.classList.add("visually-hidden");
    }

    let img_1 = document.getElementById("img_1");
    img_1.src = "img/pasteles/pastel"+index_1+".jpeg";

    let img_2 = document.getElementById("img_2");
    img_2.src = "img/pasteles/pastel"+index_2+".jpeg";

    let img_3 = document.getElementById("img_3");
    img_3.src = "img/pasteles/pastel"+index_3+".jpeg";

    console.group("Click right");
    console.log(index_1);
    console.log(index_2);
    console.log(index_3);
    console.groupEnd();



    

}


function left_img(){

    if(index_1!=1){
        index_1--;
        index_2--;
        index_3--;

        right_btn.classList.remove("visually-hidden");
        if(index_1==1){
            left_btn.classList.add("visually-hidden");
        }
    }else{
        left_btn.classList.add("visually-hidden");
    }

    let img_1 = document.getElementById("img_1");
    img_1.src = "img/pasteles/pastel"+index_1+".jpeg";

    let img_2 = document.getElementById("img_2");
    img_2.src = "img/pasteles/pastel"+index_2+".jpeg";

    let img_3 = document.getElementById("img_3");
    img_3.src = "img/pasteles/pastel"+index_3+".jpeg";

    console.group("Click left");
    console.log(index_1);
    console.log(index_2);
    console.log(index_3);
    console.groupEnd();

}