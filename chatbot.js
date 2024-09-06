/*const textJawaban = document.getElementById('textJawaban');
*/

const timeQuestion = document.getElementById('timeQuestion');
const timeAsk = document.getElementById('timeAsk');

const originalElementPertanyaan = document.getElementById('contentPertanyaan');
const clonedElementPertanyaan = originalElementPertanyaan.cloneNode(true);

const originalElementJawaban = document.getElementById('contentJawaban');
const clonedElementJawaban = originalElementJawaban.cloneNode(true);


/* MENGKLONING CHAT*/
const originalPertanyaan = document.getElementById('chatPertanyaan');
const clonedPertanyaan = originalPertanyaan.cloneNode(true);

const originalJawaban = document.getElementById('chatJawaban');
const clonedJawaban = originalJawaban.cloneNode(true);

const botSay = (data) => {
  return [
    `Hi. Nama saya Fabot, siapa nama kamu?`,/*0*/
    `hallo ${data?.nama}, usia kamu berapa ya?`,/*1*/
    `ohh ${data?.usia}, kalo hobi kamu apa ya?`,/*2*/
    `ihhh sama dong aku juga hobi ${data?.hobi}, btw kamu udah punya pacar belum?`,
  ]
}

const userSay = (data) => {
  return [
   `Hi nama saya ${data?.nama}`,
   `saya masih berusia ${data?.usia} tahun`,
   `hobi yang paling saya sukai adalah ${data?.hobi}`,
  ]
}

textPertanyaan.innerHTML = botSay()[0];

let init = 0;

function botStart(data) {
  init++
  
  console.log(`masuk ke init ${init} 😎`)
  
  const jawaban = document.getElementById('jawaban');
  const jawabanValue = jawaban.value;
  
  const clonedTextJawaban = clonedElementJawaban.querySelector('#textJawaban');
  const clonedTextPertanyaan = clonedElementPertanyaan.querySelector('#TextPertanyaan');
  
  const clonedTimeQuestion = clonedElementPertanyaan.querySelector('#timeQuestion');
  const clonedTimeAsk = clonedElementJawaban.querySelector('#timeAsk');
  
  startTime();
   clonedTimeQuestion.innerHTML = timeQuestion.innerHTML;
  clonedTimeAsk.innerHTML = timeAsk.innerHTML
  
  if (init === 1) {
  console.log({ nama: jawaban.value });
  userDelay({ nama: jawaban.value });

  
  setTimeout(() => {
    startTime();
    
    textJawaban.innerHTML = userSay({ nama: jawabanValue })[0]
  
    clonedTextPertanyaan.innerHTML = botSay({ nama: jawabanValue })[1];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
   /* document.getElementById('contentJawaban').appendChild(clonedElementJawaban.cloneNode(true));*/
    
  }, 1000);
}


  if (init === 2) {
  console.log({ usia: jawaban.value })
  botDelay({ usia: jawaban.value })
  
  setTimeout(() => {
    
    clonedTextPertanyaan.innerHTML = botSay({ usia: jawabanValue })[2];
    clonedTextJawaban.innerHTML = userSay({ usia: jawabanValue })[1]
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    document.getElementById('contentJawaban').appendChild(clonedElementJawaban.cloneNode(true));
    
  }, 2000)
}


  else if (init === 3) {
    console.log({ hobi: jawabanValue })
    botDelay({ hobi: jawabanValue })
    
    setTimeout(() => {
     
    clonedTextPertanyaan.innerHTML = botSay({ hobi: jawabanValue })[3];
    clonedTextJawaban.innerHTML = userSay({ hobi: jawabanValue })[2]
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    document.getElementById('contentJawaban').appendChild(clonedElementJawaban.cloneNode(true));
      
    }, 2000)
  }
}


function botDelay(pertanyaanBot) {
  jawaban.value = "";
  
  setTimeout(() => {
    
   textPertanyaan.innerHTML = botSay(pertanyaanBot)[init];
  }, [1000]);
}

function userDelay(jawabanUser) {
  jawaban.value = "";
  
  setTimeout(() => {
    
    textJawaban.innerHTML = userSay(jawabanUser)[init];
  }, [1000]);
}

/*kode validasi JAM*/

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  h = checkTime(h);
  timeAsk.innerHTML = `${h}.${m}`;
  timeQuestion.innerHTML = `${h}.${m}`;
}

function checkTime(i) {
  if (i < 10) {
  i = "0" + i;
   }
  return i;
 }

/*kode validasi tanggal*/

const currentDate = new Date();
const d = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const y = currentDate.getFullYear();

const date = document.querySelector('.date');

const monthNames = [
  "Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember",
  ]

date.innerHTML = `${d} ${monthNames[monthIndex]} ${y}`;


/*JAVASCRIPT CODE BACKGROUND ANIMATION*/

function hujan(){
   let amount = 20;
   let body = document.querySelector('.container');
   let i = 0;
   while(i < amount){
    let drop = document.createElement('i');
    
    let size = Math.random() * 4;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -50;
    let duration = Math.random() * 17;
    
    drop.style.width = 1 + size+'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay+'s';
    drop.style.animationDuration = 9 +duration+'s';
    body.appendChild(drop);
    i++
   }
  }
  
 hujan();