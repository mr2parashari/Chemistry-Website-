let topics = [
  {name:"Carbon Chain", video:  "https://www.youtube.com/embed/F2G-_5MbMj8"},
  {name:"Combustion", video:"https://www.youtube.com/embed/lwIdaIpxe-w"},
  {name:"Functional Group", video:"https://www.youtube.com/embed/9lpPEOA1gIM"},
  {name:"Isomerism", video:"https://www.youtube.com/embed/yZoLiQW1a5c"},
  {name:"Polymerization", video:"https://www.youtube.com/embed/HpPHN7fcLHI"}
];

let qb = {
  "Carbon Chain":[
    {q:"Hybridization of carbon in methane?",options:["sp","sp2","sp3","sp3d"],ans:2},
    {q:"Bond angle in methane?",options:["90°","109.5°","120°","180°"],ans:1},
    {q:"General formula of alkane?",options:["CnH2n","CnH2n+2","CnH2n-2","CnHn"],ans:1},
    {q:"Ethene has?",options:["Single bond","Double bond","Triple bond","Ionic bond"],ans:1},
    {q:"Carbon valency?",options:["2","3","4","5"],ans:2},
    {q:"Ethyne has how many bonds?",options:["1","2","3","0"],ans:2},
    {q:"sp2 bond angle?",options:["109°","120°","180°","90°"],ans:1},
    {q:"Chain isomerism occurs in?",options:["Alkane","Alcohol","Acid","All"],ans:3},
    {q:"Carbon forms which type of bonding?",options:["Ionic","Covalent","Metallic","None"],ans:1},
    {q:"Longest chain rule used in?",options:["Naming","Bonding","Combustion","None"],ans:0}
  ],
  "Combustion":[
    {q:"Complete combustion gives?",options:["CO","CO2","C","O2"],ans:1},
    {q:"Incomplete combustion gives?",options:["CO2","CO","H2O","O2"],ans:1},
    {q:"Combustion is?",options:["Endothermic","Exothermic","Neutral","None"],ans:1},
    {q:"Fuel + oxygen gives?",options:["Heat","Light","Both","None"],ans:2},
    {q:"Methane combustion product?",options:["CO2+H2O","CO","H2","None"],ans:0},
    {q:"Ignition temperature is?",options:["Maximum","Minimum","Room","None"],ans:1},
    {q:"Blue flame indicates?",options:["Complete combustion","Incomplete combustion","Cold flame","None"],ans:0},
    {q:"Yellow flame indicates?",options:["Complete combustion","Incomplete combustion","Cold flame","None"],ans:1},
    {q:"Calorific value unit?",options:["J/kg","kg","atm","None"],ans:0},
    {q:"Role of oxygen in combustion?",options:["Fuel","Oxidizer","Product","None"],ans:1}
  ],
  "Functional Group":[
    {q:"Functional group of alcohol?",options:["-COOH","-OH","-CHO","-NH2"],ans:1},
    {q:"Functional group of carboxylic acid?",options:["-OH","-CHO","-COOH","-NH2"],ans:2},
    {q:"Aldehyde functional group?",options:["-COOH","-CHO","-CO-","-OH"],ans:1},
    {q:"Ketone functional group?",options:["-CHO","-COOH","-CO-","-OH"],ans:2},
    {q:"Amine functional group?",options:["-OH","-NH2","-COOH","-CHO"],ans:1},
    {q:"Ester is formed from?",options:["Acid+Base","Acid+Alcohol","Aldehyde+Ketone","None"],ans:1},
    {q:"Ether group is?",options:["-OH","-O-","-COOH","-NH2"],ans:1},
    {q:"Alcohols are classified as?",options:["Primary, Secondary, Tertiary","Ionic, Covalent","None","All"],ans:0},
    {q:"Phenol has which group?",options:["-COOH","-OH attached to benzene","-NH2","-CHO"],ans:1},
    {q:"Acetic acid belongs to?",options:["Aldehyde","Ketone","Carboxylic acid","Alcohol"],ans:2}
  ],
  "Isomerism":[
    {q:"Chain isomers have same?",options:["Molecular formula","Structural formula","Both","None"],ans:0},
    {q:"Position isomers differ in?",options:["Chain length","Position of functional group","Molecular formula","None"],ans:1},
    {q:"Functional group isomers have same?",options:["Functional group","Molecular formula","Chain","None"],ans:1},
    {q:"Cis-trans isomerism is a type of?",options:["Chain isomerism","Stereoisomerism","Position isomerism","None"],ans:1},
    {q:"Enantiomers are?",options:["Mirror images","Same compound","Chain isomers","None"],ans:0},
    {q:"Geometric isomerism requires?",options:["Restricted rotation","Free rotation","Ionic bond","None"],ans:0},
    {q:"Butane has how many chain isomers?",options:["1","2","3","4"],ans:1},
    {q:"Optical isomerism needs?",options:["Chiral carbon","Double bond","Triple bond","None"],ans:0},
    {q:"Metamerism differs in?",options:["Alkyl groups on either side of functional group","Chain length","Molecular formula","None"],ans:0},
    {q:"Tautomerism involves?",options:["Same atoms different arrangement","Different atoms","Ionic exchange","None"],ans:0}
  ],
  "Polymerization":[
    {q:"Polymerization is joining of?",options:["Monomers","Polymers","Atoms","Ions"],ans:0},
    {q:"PVC monomer is?",options:["Ethylene","Vinyl chloride","Propylene","Styrene"],ans:1},
    {q:"Addition polymerization involves?",options:["Double bonds opening","Loss of water","Ionic bonds","None"],ans:0},
    {q:"Nylon is a?",options:["Addition polymer","Condensation polymer","Natural polymer","None"],ans:1},
    {q:"Rubber is a?",options:["Synthetic polymer","Natural polymer","Ceramic","Metal"],ans:1},
    {q:"Polythene monomer?",options:["Propylene","Styrene","Ethylene","Acetylene"],ans:2},
    {q:"Bakelite is?",options:["Thermoplastic","Thermosetting plastic","Natural","None"],ans:1},
    {q:"Condensation polymer loses?",options:["Nothing","Small molecule like water","Carbon","Nitrogen"],ans:1},
    {q:"Degree of polymerization is?",options:["Number of monomers","Molecular weight","Density","None"],ans:0},
    {q:"Teflon is used as?",options:["Non-stick coating","Fuel","Acid","None"],ans:0}
  ]
};

let currentTopic = "";
let currentQuestions = [];

function showOrganic(){
  document.getElementById("homePanel").style.display = "block";
  document.getElementById("quizPanel").style.display = "none";
}

function openTopic(i){
  currentTopic = topics[i].name;
  currentQuestions = qb[currentTopic];
  document.getElementById("topicTitle").innerText = currentTopic;
  document.getElementById("videoFrame").src = topics[i].video;

  let box = document.getElementById("quizBox");
  box.innerHTML = "";
  currentQuestions.forEach((item, idx)=>{
    box.innerHTML += `<p>${idx+1}. ${item.q}</p>`;
    item.options.forEach((op, j)=>{
      box.innerHTML += `<label><input type="radio" name="q${idx}" value="${j}"> ${op}</label><br>`;
    });
  });

  document.getElementById("warning").innerText = "";
  document.getElementById("homePanel").style.display = "none";
  document.getElementById("quizPanel").style.display = "block";
}

function submitQuiz(){
  let all = true;
  let score = 0;

  currentQuestions.forEach((q, i)=>{
    if(!document.querySelector(`input[name=q${i}]:checked`)) all = false;
  });

  if(!all){
    document.getElementById("warning").innerText = "Please attempt all questions.";
    return;
  }

  currentQuestions.forEach((q, i)=>{
    let ans = parseInt(document.querySelector(`input[name=q${i}]:checked`).value);
    if(ans === q.ans) score += 2;
  });

  let s = parseInt(localStorage.getItem("score")) || 0;
  let a = parseInt(localStorage.getItem("attempts")) || 0;

  s += score;
  a += 1;

  localStorage.setItem("score", s);
  localStorage.setItem("attempts", a);

  document.getElementById("scoreTop").innerText = s;
  document.getElementById("attemptsTop").innerText = a;
  document.getElementById("warning").innerText = "Score: " + score + "/20";
}

function backToGrid(){
  showOrganic();
}

window.onload = function(){
  let s = parseInt(localStorage.getItem("score")) || 0;
  let a = parseInt(localStorage.getItem("attempts")) || 0;
  document.getElementById("scoreTop").innerText = s;
  document.getElementById("attemptsTop").innerText = a;
  showOrganic();
};