const questions=[
 {q:"بتحب إيه أكتر؟",a:["ميسي ⚽","محشي ورق عنب 😂","نودي ❤️"],correct:2,good:"أيوه كده! عارف الصح 😌❤️"},
 {q:"لو ندى قالتلك: «أنا مش عايزة آطبخ» تعمل إيه؟ 😂",a:["تصدقها وتسيبها 😭","تقولها حاضر وبعدين تطلب لها أكل برضه 😂","تقولها خلاص مش هتاكلي 😌"],correct:1,good:"ده المطلوب بالظبط 😂❤️"},
 {q:"إيه أكتر حاجة ندى بتحبها في حوسو؟",a:["ضحكته 🥹","طريقته معاها 🤍","كل حاجة فيه ❤️"],correct:2,good:"الإجابة اللي في القلب ❤️"},
 {q:"لو ندى زعلت منك، أول حاجة تعملها إيه؟",a:["تسيبها تهدى لوحدها","تصالحها وتفضل جنبها 🫂","تقولها إنتِ اللي غلطانه 😂"],correct:1,good:"برافو يا حسام، دي الإجابة الصح 😭❤️"},
 {q:"مين أكتر شخص ندى بتحب تحكيله تفاصيل يومها؟",a:["صحبتها","ماما","حسام طبعًا ❤️"],correct:2,good:"طبيعي جدًا 😌💕"},
 {q:"إيه أمنية ندى ليك في سنة ميلادك الجديدة؟",a:["خير كتير 💰","راحة ونجاح وفرحة، وتفضلوا سوا ❤️","تسافر كل البلاد 😂"],correct:1,good:"دي الأمنية الحقيقية من قلبها 🤍"}
];
let current=0,score=0,answered=false;
const qEl=document.getElementById("question"),aEl=document.getElementById("answers"),fEl=document.getElementById("feedback"),next=document.getElementById("nextBtn"),bar=document.getElementById("progressBar"),counter=document.getElementById("counter");
function roman(n){return ["الأول","الثاني","الثالث","الرابع","الخامس","السادس"][n-1]||n}
function render(){
 answered=false;next.style.display="none";fEl.textContent="";
 const x=questions[current];qEl.textContent=x.q;counter.textContent="السؤال "+roman(current+1);
 bar.style.width=((current)/questions.length*100)+"%";aEl.innerHTML="";
 x.a.forEach((txt,i)=>{
  const b=document.createElement("button");b.className="answer";
  b.innerHTML=`<span>${txt}</span><span class="radio"></span>`;
  b.onclick=()=>choose(i,b);aEl.appendChild(b);
 });
}
function choose(i,b){
 if(answered)return;answered=true;const x=questions[current];
 document.querySelectorAll(".answer").forEach((el,j)=>{if(j===x.correct)el.classList.add("correct");if(j===i)el.classList.add("selected");if(i!==x.correct&&j===i)el.classList.add("wrong")});
 if(i===x.correct){score++;fEl.textContent=x.good}else{fEl.textContent="مممم... حاول تاني المرة الجاية 😏❤️"}
 next.textContent=current===questions.length-1?"شوف النتيجة ❤️":"السؤال اللي بعده ➜";next.style.display="block";
}
function nextQuestion(){
 if(!answered)return;
 current++;
 if(current<questions.length)render();else finish();
}
function finish(){
 document.getElementById("quiz").style.display="none";
 document.querySelector("header").style.display="none";
 document.getElementById("result").classList.add("show");
 document.getElementById("scoreText").textContent=`جبت ${score} من ${questions.length} إجابات صح... بس عند ندى أنت واخد 10/10ونجمه ❤️`;
 bar.style.width="100%";burst();
}
function showMemories(){
 document.getElementById("result").classList.remove("show");
 document.getElementById("memories").classList.add("show");
 document.getElementById("memories").scrollIntoView({behavior:"smooth"});
 burst();
}
function burst(){
 for(let i=0;i<35;i++){let h=document.createElement("div");h.className="float";h.textContent=["❤️","💕","💗","✨","🤍"][Math.floor(Math.random()*5)];h.style.left=Math.random()*100+"vw";h.style.fontSize=14+Math.random()*22+"px";h.style.animationDuration=3+Math.random()*3+"s";document.getElementById("hearts").appendChild(h);setTimeout(()=>h.remove(),7000)}
}
render();
