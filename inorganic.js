// ---------------- TOPICS ----------------
let topics = [
  {name:"Ionic Bond", video:"https://www.youtube.com/embed/ygeC3xHuvmg"},
  {name:"Covalent Bond", video:"https://www.youtube.com/embed/LkAykOv1foc"},
  {name:"Periodic Trend", video:"https://www.youtube.com/embed/3M1jqPGJ7XM"},
  {name:"Coordination", video:"https://www.youtube.com/embed/QBZEqp-5JWE"},
  {name:"Metallurgy", video:"https://www.youtube.com/embed/WFUNqQVnqqw"}
];

// ---------------- QUESTION BANK (50 TOTAL) ----------------
let qb = {

"Ionic Bond":[
{q:"Ionic bond forms between?",options:["Two metals","Two non-metals","Metal and non-metal","Two noble gases"],ans:2},
{q:"NaCl is an example of?",options:["Covalent","Ionic","Metallic","Hydrogen"],ans:1},
{q:"Ionic compounds have?",options:["Low melting","High melting","No melting","None"],ans:1},
{q:"Conduct electricity in?",options:["Solid","Liquid","Both","None"],ans:1},
{q:"Cation forms by?",options:["Gain e-","Lose e-","Share","None"],ans:1},
{q:"Anion forms by?",options:["Gain e-","Lose e-","Share","None"],ans:0},
{q:"Lattice energy is?",options:["Break energy","Form energy","Heat","None"],ans:0},
{q:"MgO bond?",options:["Covalent","Ionic","Metallic","None"],ans:1},
{q:"Ionic compounds are?",options:["Soft","Hard","Gas","None"],ans:1},
{q:"Boiling point is?",options:["Low","High","None","Zero"],ans:1}
],

"Covalent Bond":[
{q:"Covalent bond forms by?",options:["Transfer","Sharing","Loss","None"],ans:1},
{q:"H2O has lone pairs?",options:["0","1","2","3"],ans:2},
{q:"N2 bond?",options:["Single","Double","Triple","None"],ans:2},
{q:"CO2 shape?",options:["Bent","Linear","Tetra","None"],ans:1},
{q:"Sigma bond formed by?",options:["Axial","Lateral","Both","None"],ans:0},
{q:"Pi bond formed by?",options:["Axial","Lateral","Both","None"],ans:1},
{q:"Non polar molecule?",options:["HCl","CO2","NH3","H2O"],ans:1},
{q:"Bond order O2?",options:["1","2","3","0"],ans:1},
{q:"Polar bond has?",options:["Equal","Unequal","None","Both"],ans:1},
{q:"Shortest bond?",options:["C-C","C=C","C≡C","C-H"],ans:2}
],

"Periodic Trend":[
{q:"Atomic radius increases down group because?",options:["More protons","More shells","Less electrons","None"],ans:1},
{q:"Electronegativity increases?",options:["Left→Right","Right→Left","None","Random"],ans:0},
{q:"Most electronegative?",options:["O","N","Cl","F"],ans:3},
{q:"Ionization energy increases?",options:["Down","Across","None","Both"],ans:1},
{q:"Electron affinity is?",options:["Energy release","Energy removal","None","Both"],ans:0},
{q:"Noble gases have?",options:["Low IE","High IE","Zero IE","None"],ans:1},
{q:"Metallic character increases?",options:["Across","Down","None","Both"],ans:1},
{q:"Shielding effect due to?",options:["Nucleus","Inner e-","Outer e-","None"],ans:1},
{q:"Atomic radius across period?",options:["Increase","Decrease","Same","None"],ans:1},
{q:"Reactive metal period 3?",options:["Na","Mg","Al","Si"],ans:0}
],

"Coordination":[
{q:"Coordination compound has?",options:["Metal+ligand","Only metal","Only ligand","None"],ans:0},
{q:"Ligand is?",options:["Donor","Acceptor","Proton","None"],ans:0},
{q:"EDTA is?",options:["Mono","Bi","Hexa","None"],ans:2},
{q:"Coordination no Fe?",options:["3","4","6","8"],ans:2},
{q:"Chelate is?",options:["Ring complex","Simple","None","All"],ans:0},
{q:"Cu oxidation state?",options:["+1","+2","+3","0"],ans:1},
{q:"Neutral ligand?",options:["Cl","CN","NH3","OH"],ans:2},
{q:"CFT explains?",options:["Colour","Bonding","Ionic","None"],ans:0},
{q:"Spectrochemical series?",options:["Ligand strength","Metal size","Charge","None"],ans:0},
{q:"Square planar CN?",options:["2","4","6","8"],ans:1}
],

"Metallurgy":[
{q:"Ore is?",options:["Pure metal","Mineral for extraction","Rock","Alloy"],ans:1},
{q:"Gangue?",options:["Useful","Impurity","Metal","None"],ans:1},
{q:"Calcination?",options:["Air","No air","Cooling","None"],ans:1},
{q:"Roasting?",options:["No air","Excess air","Cooling","None"],ans:1},
{q:"Smelting?",options:["Water","Heat","Acid","None"],ans:1},
{q:"Flux does?",options:["Add impurity","Remove impurity","Cool","None"],ans:1},
{q:"Electro refining?",options:["Ore","Metal","Alloy","None"],ans:1},
{q:"Thermite uses?",options:["Al","C","H","None"],ans:0},
{q:"Amalgamation uses?",options:["Hg","Acid","Heat","None"],ans:0},
{q:"Zone refining used for?",options:["Pure metal","Ore","Alloy","None"],ans:0}
]

};

// ---------------- STATE ----------------
let currentQuestions = [];

// ---------------- OPEN ----------------
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