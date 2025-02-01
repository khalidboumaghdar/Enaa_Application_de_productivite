let taches = JSON.parse(localStorage.getItem("taches")) || [];

function afficherTaches() {
    const tch = document.querySelector("#taches");

    taches.forEach((tache, index) => {
        const div1 = `
         <div class="col-lg-12 bg-light rounded pt-1 pb-3 mt-2">
                                        <div class="container">
                                            <div class="row" >
                                                <div class="col-lg-11">
                                                    <span>${tache.titre}</span>
                                        
                                                </div>
                                                <div class="col-lg-1">
                                                    <a href="#" class=" link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onclick="navigateToModifier(${index})"> <i class="bi bi-pencil"></i></a>
                                                    <a href="#" onclick="supprimerTchaes(${index})" class="text-danger"> <i class="bi bi-trash3"></i>  </a>                                                                                   
                                                    <a href="#"  onclick="pmodoro(${index})" class="text-black" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" > <i class="bi bi-eye"></i>  </a>  
   
                       
                                                 </div>
                                               

                                            </div>
                                        </div>

                                       </div>
        `; tch.innerHTML += div1;
    });
}
function ajouter(){
    const titre = document.getElementById('titre').value;
    const pauses = document.getElementById('pauses').value;
    const priorite = document.getElementById('priorite').value;
    const description = document.getElementById('description');
    var descriptiontotal;
if(!titre || !priorite ){
    alert("Veuillez remplir tous les champs.");
}else if(description!=null){
descriptiontotal = description.value;
taches.push({ titre, priorite,descriptiontotal,pauses });
localStorage.setItem("taches", JSON.stringify(taches));
alert("Ajouter avec succes !!");
window.location.href="index.html";
document.getElementById("formsubmit").reset();  
}
else{

    taches.push({ titre, priorite,pauses });
    localStorage.setItem("taches", JSON.stringify(taches));
    alert("Ajouter avec succes !!");
    window.location.href="index.html";
    document.getElementById("formsubmit").reset();  
}
}
function navigateToModifier(index) {

    const modalTitle = document.querySelector('.modal-title');
    const modalTitreInput = document.getElementById('modalTitreInput');
    const modalPrioriteInput = document.getElementById('modalPrioriteInput');
    const modalDescriptionInput = document.getElementById('modalDescriptionInput');
    
    const tache = taches[index];
    modalTitle.textContent = `Modifier tâche : ${tache.titre}`;
    modalTitreInput.value = tache.titre;
    modalPrioriteInput.value = tache.priorite;
    if(tache.description=== undefined){
        modalDescriptionInput.value = "";
    }else{
        modalDescriptionInput.value = tache.description;
    }
    

    document.getElementById('formsubmit').dataset.index = index; 
}

function enregister(){
    const id = document.getElementById('formsubmit').dataset.index;
        const taches = JSON.parse(localStorage.getItem('taches'));
    const tachee = taches[id];

    tachee.titre = document.getElementById('modalTitreInput').value;
    tachee.priorite = document.getElementById('modalPrioriteInput').value;
    tachee.description = document.getElementById('modalDescriptionInput').value;
    tachee.pauses=document.getElementById('pausesmodel').value;
   

    localStorage.setItem('taches', JSON.stringify(taches));

    window.location.href = 'index.html';
}

function validateOnBlur(){
    let isvalid = true;
    const titre = document.getElementById('titre');
    const priorite = document.getElementById('priorite');
    const errorElementTitre = document.getElementById('errorElementTitre');
    const errorElementPriorite = document.getElementById('errorElementPriorite');
    if(titre.value===""){
        isvalid = false;
        titre.style.border = "2px solid red";
        errorElementTitre.textContent = "Veuillez saisir un Titre.";
        errorElementTitre.style.color = "red";
    }else{
        titre.style.border = "2px solid green";
        errorElementTitre.textContent = "";
    }
    if(priorite.value===""){
        isvalid = false;
        priorite.style.border="2px solid red";
        errorElementPriorite.textContent = "Veuillez saisir un Priorité.";
        errorElementPriorite.style.color = "red";
    }else{
        priorite.style.border = "2px solid green";
        errorElementPriorite.textContent = "";
    }
    return isvalid;

}
function supprimerTchaes(index) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce tcahe ?")) {
        taches.splice(index, 1);
        localStorage.setItem("taches", JSON.stringify(taches));
        window.location.href = 'index.html';
    }
}
function pmodoro(index){
    const tache = taches[index];

if(tache.pauses==="courtes "){
    var title1 = document.getElementById('title1');
    title1.innerHTML = tache.pauses;
    var test = document.getElementById('timer');
    var timeLeft = 25* 60; 
    var breakTimeLeft = 5* 60; 
    var timerInterval; 
    var isOnBreak = false; 
    
    var pomodoroEndAudio = document.getElementById('pomodoroEndAudio');
    var breakStartAudio = document.getElementById('breakStartAudio');
    
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var seconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    document.getElementById('startTimer').addEventListener('click', function() {
        if (!timerInterval && !isOnBreak) {
            timerInterval = setInterval(function() {
                test.innerHTML = formatTime(timeLeft); 
                timeLeft--; 
                if (timeLeft <= 0) { 
                    clearInterval(timerInterval);
                    timerInterval = null; 
                    isOnBreak = true; 
                    alert('Pomodoro completed! Time for a 5-minute break.');
                    pomodoroEndAudio.play(); 

                    startBreak(); 
                }
            }, 1000);
        }
    });
    
   
    document.getElementById('resetTimer').addEventListener('click', function() {
        clearInterval(timerInterval); 
        timerInterval = null; 
        timeLeft = 25 * 60; 
        test.innerHTML = formatTime(timeLeft); 
        isOnBreak = false; 
    });
    
    document.getElementById('startBreak').addEventListener('click', function() {
        if (!isOnBreak) {
            alert('Start a Pomodoro session first.');
            breakStartAudio.play(); 

            return;
        }
        
        if (!timerInterval) { 
            startBreak();
        }
    });
    
    function startBreak() {
        breakStartAudio.play(); 
        timerInterval = setInterval(function() {
            test.innerHTML = formatTime(breakTimeLeft); 
            breakTimeLeft--; 
            if (breakTimeLeft <= 0) { 
                clearInterval(timerInterval); 
                timerInterval = null; 
                alert('Break completed! Start a new Pomodoro session.');
                pomodoroEndAudio.play(); 
                breakTimeLeft = 5 * 60; 
                isOnBreak = false; 
            }
        }, 1000);
    }
    



}else if(tache.pauses==="longues "){
    var title1 = document.getElementById('title1');
    title1.innerHTML = tache.pauses;
    var test = document.getElementById('timer');
    var timeLeft = 25* 60; 
    var breakTimeLeft = 15* 60; 
    var timerInterval; 
    var isOnBreak = false; 
    
    var pomodoroEndAudio = document.getElementById('pomodoroEndAudio');
    var breakStartAudio = document.getElementById('breakStartAudio');
    
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var seconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    document.getElementById('startTimer').addEventListener('click', function() {
        if (!timerInterval && !isOnBreak) {
            timerInterval = setInterval(function() {
                test.innerHTML = formatTime(timeLeft); 
                timeLeft--; 
                if (timeLeft <= 0) { 
                    clearInterval(timerInterval);
                    timerInterval = null; 
                    isOnBreak = true; 
                    alert('Pomodoro completed! Time for a 5-minute break.');
                    pomodoroEndAudio.play(); 

                    startBreak(); 
                }
            }, 1000);
        }
    });
    
   
    document.getElementById('resetTimer').addEventListener('click', function() {
        clearInterval(timerInterval); 
        timerInterval = null; 
        timeLeft = 25 * 60; 
        test.innerHTML = formatTime(timeLeft); 
        isOnBreak = false; 
    });
    
    document.getElementById('startBreak').addEventListener('click', function() {
        if (!isOnBreak) {
            alert('Start a Pomodoro session first.');
            breakStartAudio.play(); 

            return;
        }
        
        if (!timerInterval) { 
            startBreak();
        }
    });
    
    function startBreak() {
        breakStartAudio.play(); 
        timerInterval = setInterval(function() {
            test.innerHTML = formatTime(breakTimeLeft); 
            breakTimeLeft--; 
            if (breakTimeLeft <= 0) { 
                clearInterval(timerInterval); 
                timerInterval = null; 
                alert('Break completed! Start a new Pomodoro session.');
                pomodoroEndAudio.play(); 
                breakTimeLeft = 15 * 60; 
                isOnBreak = false; 
            }
        }, 1000);
    }

}
}









window.onload = afficherTaches;

