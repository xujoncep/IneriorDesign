// Select the elements for the first package
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const numBtn = document.querySelector(".num");
const roomCntBtn = document.querySelector(".room-cnt");
const thanksCntBtn = document.querySelector(".thanks-cnt");
const signBtn = document.querySelector(".signup-button");
const thanksMes = document.querySelector(".thanks");

// Select the elements for the second package
const plusBtn2 = document.querySelector(".plus2");
const minusBtn2 = document.querySelector(".minus2");
const numBtn2 = document.querySelector(".num2");
const roomCntBtn2 = document.querySelector(".room-cnt2");
const thanksCntBtn2 = document.querySelector(".thanks-cnt2");
const signBtn2 = document.querySelector(".signup-button-2");
const thanksMes2 = document.querySelector(".thanks2");

// Initialize counters and totals for both packages
let cnt = 1, total;
let cnt2 = 1, total2;


// Event handler for the first package 'plus' button
plusBtn.addEventListener("click", function (){
    cnt++;
    total = cnt*199;
    numBtn.innerText = "$"+total;
    roomCntBtn.innerText = cnt;
    thanksCntBtn.innerText = cnt;
});


// Event handler for the first package 'minus' button
minusBtn.addEventListener("click", function (){
    if (cnt > 1)
        cnt--;

    total = cnt*199;
    numBtn.innerText = "$"+total;
    roomCntBtn.innerText = cnt;
    thanksCntBtn.innerText = cnt;
});

// Event handler for the second package 'plus' button
plusBtn2.addEventListener("click", function (){
    cnt2++;
    total2 = cnt2*249;
    numBtn2.innerText = "$"+total2;
    roomCntBtn2.innerText = cnt2;
    thanksCntBtn2.innerText = cnt2;
});

// Event handler for the second package 'minus' button
minusBtn2.addEventListener("click", function (){
    if (cnt2 > 1)
        cnt2--;

    total2 = cnt2*249;
    numBtn2.innerText = "$"+total2;
    roomCntBtn2.innerText = cnt2;
    thanksCntBtn2.innerText = cnt2;
});


// Event handler for the first package 'sign up' button
signBtn.addEventListener("click", function (){
    thanksMes.innerText = "Thank you for choosing "+cnt+" room";
});

// Event handler for the second package 'sign up' button
signBtn2.addEventListener("click", function (){
    thanksMes2.innerText = "Thank you for choosing "+cnt2+" room";
});