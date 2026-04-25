// ---------------- TOPICS ----------------
let topics = [
  {name:"Thermodynamics", video:"https://www.youtube.com/embed/3QMfZZs-Vm0"},
  {name:"Equilibrium", video:"https://www.youtube.com/embed/WCi1Lul2pbs"},
  {name:"Reaction Rate", video:"https://www.youtube.com/embed/NhdtqnEfa9w"},
  {name:"States of Matter", video:"https://www.youtube.com/embed/eAdP5VpksiU"},
  {name:"Solutions", video:"https://www.youtube.com/embed/4MbgYXiki7E"}
];

// ---------------- QUESTION BANK (50 TOTAL) ----------------
let qb = {

"Thermodynamics":[
{q:"First law of thermodynamics is based on?",options:["Energy conservation","Entropy","Pressure","Temperature"],ans:0},
{q:"Unit of heat?",options:["Joule","Pascal","Kelvin","Mole"],ans:0},
{q:"Enthalpy is?",options:["Heat content","Pressure","Volume","Energy loss"],ans:0},
{q:"Exothermic reaction releases?",options:["Heat","Cold","Light","None"],ans:0},
{q:"Endothermic absorbs?",options:["Heat","Cold","Light","None"],ans:0},
{q:"ΔH negative means?",options:["Exothermic","Endothermic","Neutral","None"],ans:0},
{q:"Entropy is measure of?",options:["Disorder","Order","Heat","Work"],ans:0},
{q:"Second law deals with?",options:["Entropy","Energy","Heat","None"],ans:0},
{q:"Gibbs free energy formula?",options:["H-TS","H+TS","T-HS","None"],ans:0},
{q:"Spontaneous process has?",options:["Negative G","Positive G","Zero","None"],ans:0}
],

"Equilibrium":[
{q:"Equilibrium is?",options:["Dynamic","Static","None","Both"],ans:0},
{q:"Kc depends on?",options:["Temperature","Pressure","Volume","None"],ans:0},
{q:"Le Chatelier principle?",options:["Shift equilibrium","Stop reaction","Increase temp","None"],ans:0},
{q:"Catalyst affects?",options:["Rate","Equilibrium","Both","None"],ans:0},
{q:"Equilibrium constant high means?",options:["Products favored","Reactants favored","Equal","None"],ans:0},
{q:"pH of neutral solution?",options:["7","1","14","0"],ans:0},
{q:"Strong acid has?",options:["Low pH","High pH","Neutral","None"],ans:0},
{q:"Buffer solution resists?",options:["pH change","Temp change","Pressure","None"],ans:0},
{q:"Kw value?",options:["1e-14","1e-7","1","0"],ans:0},
{q:"Acid base theory?",options:["Proton donor","Electron","None","All"],ans:0}
],

"Reaction Rate":[
{q:"Rate depends on?",options:["Concentration","Temp","Catalyst","All"],ans:3},
{q:"Unit of rate?",options:["mol/L/s","J","K","atm"],ans:0},
{q:"Catalyst does?",options:["Increase rate","Decrease rate","Stop","None"],ans:0},
{q:"Activation energy?",options:["Minimum energy","Max energy","Heat","None"],ans:0},
{q:"Arrhenius equation relates?",options:["k & T","P & V","H & S","None"],ans:0},
{q:"Order of reaction?",options:["Sum powers","Temp","Pressure","None"],ans:0},
{q:"Zero order graph?",options:["Straight","Curve","Circle","None"],ans:0},
{q:"Half life formula?",options:["0.693/k","k/0.693","1/k","None"],ans:0},
{q:"Rate law?",options:["k[A]^n","PV","nRT","None"],ans:0},
{q:"Collision theory?",options:["Effective collision","Heat","Pressure","None"],ans:0}
],

"States of Matter":[
{q:"Gas law?",options:["PV=nRT","E=mc2","F=ma","None"],ans:0},
{q:"Boyle law?",options:["P∝1/V","P∝V","P∝T","None"],ans:0},
{q:"Charles law?",options:["V∝T","P∝T","V∝P","None"],ans:0},
{q:"Ideal gas?",options:["No interaction","High interaction","Liquid","None"],ans:0},
{q:"STP temp?",options:["273K","300K","100K","None"],ans:0},
{q:"Pressure unit?",options:["atm","kg","J","None"],ans:0},
{q:"Real gas deviates due to?",options:["Forces","Temp","Pressure","None"],ans:0},
{q:"Diffusion is?",options:["Mixing","Heating","Cooling","None"],ans:0},
{q:"Effusion law?",options:["Graham","Boyle","Charles","None"],ans:0},
{q:"Critical temp?",options:["Max temp","Min temp","Zero","None"],ans:0}
],

"Solutions":[
{q:"Solution is?",options:["Homogeneous","Heterogeneous","Solid","None"],ans:0},
{q:"Solute is?",options:["Dissolved","Solvent","Gas","None"],ans:0},
{q:"Solvent is?",options:["Dissolving medium","Gas","Solid","None"],ans:0},
{q:"Molarity formula?",options:["n/V","V/n","n*m","None"],ans:0},
{q:"Molality uses?",options:["kg solvent","L solution","mole","None"],ans:0},
{q:"Raoult law?",options:["Vapor pressure","Temp","Heat","None"],ans:0},
{q:"Colligative property?",options:["Depends on number","Nature","None","All"],ans:0},
{q:"Osmosis is?",options:["Solvent flow","Heat","Pressure","None"],ans:0},
{q:"Isotonic solution?",options:["Equal osmotic","High","Low","None"],ans:0},
{q:"Boiling point elevates?",options:["Yes","No","None","All"],ans:0}
]

};

// ---------------- STATE ----------------
let currentQuestions = [];

// ---------------- OPEN TOPIC ----------------
function openTopic(i){
  let topic = topics[i];
  currentQuestions = qb[topic.name];

  document.getElementById("topicTitle").innerText = topic.name;
  document.getElementById("videoFrame").src = topic.video;

  let box = document.getElementById("quizBox");
  box.innerHTML = "";

  currentQuestions.forEach((q,i)=>{
    box.innerHTML += `<p>${i+1}. ${q.q}</p>`;
    q.options.forEach((op,j)=>{
      box.innerHTML += `<label><input type="radio" name="q${i}" value="${j}"> ${op}</label><br>`;
    });
  });

  document.getElementById("gridPanel").style.display="none";
  document.getElementById("quizPanel").style.display="block";
}

// ---------------- SUBMIT ----------------
function submitQuiz(){
  let all=true, score=0;

  currentQuestions.forEach((q,i)=>{
    if(!document.querySelector(`input[name=q${i}]:checked`)) all=false;
  });

  if(!all){
    document.getElementById("warning").innerText="Attempt all questions";
    return;
  }

  currentQuestions.forEach((q,i)=>{
    let ans=parseInt(document.querySelector(`input[name=q${i}]:checked`).value);
    if(ans===q.ans) score+=2;
  });

  let s = parseInt(localStorage.getItem("score")) || 0;
  let a = parseInt(localStorage.getItem("attempts")) || 0;

  s += score;
  a++;

  localStorage.setItem("score", s);
  localStorage.setItem("attempts", a);

  document.getElementById("scoreTop").innerText = s;
  document.getElementById("attemptsTop").innerText = a;

  document.getElementById("warning").innerText="Score: "+score+"/20";
}

// ---------------- BACK ----------------
function backToGrid(){
  document.getElementById("quizPanel").style.display="none";
  document.getElementById("gridPanel").style.display="block";
}

// ---------------- LOAD ----------------
window.onload = function(){
  let s = parseInt(localStorage.getItem("score")) || 0;
  let a = parseInt(localStorage.getItem("attempts")) || 0;

  document.getElementById("scoreTop").innerText = s;
  document.getElementById("attemptsTop").innerText = a;
};