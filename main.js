
var notenumber = 0
var greetmessage = true
var allnotes = {}
var counter0 = 0

function createNewNoteModuleLoad () {
    var controls = document.getElementById("controls")
    var display = document.getElementById("display")
    var newJNote = document.getElementById("newJNoteButton")
    var newJNoteButton = controls.removeChild(newJNote)
    if (screen.width < 850) {
        document.getElementById("controls").style.height="450px"
    }
    var newNoteForm = '<textarea autofocus id="textpolje" ></textarea><div id="saveButton" onclick="createNewNote()"><p id="newsave">Save</p></div>'

    controls.innerHTML += newNoteForm
    

}

function createNewNote () {
    var vsebina = document.getElementById("textpolje").value
    var display = document.getElementById("display")
    var controls = document.getElementById("controls")
    createNewNoteExecute(vsebina)
    counter0++
    if (screen.width < 850) {
        document.getElementById("controls").style.height="80px"
    }

    if(greetmessage == true) {
        display.removeChild(Greeting)
        greetmessage = false
        }
}

function createNewNoteExecute(textvalue) {
    if(textvalue == "") {alert("No text to save.")}
    else {
    var display = document.getElementById("display") 
    var novo = document.createElement("div")
    novo.setAttribute("class", "noteprint")
    var idime= "note" + notenumber
    allnotes[idime] = textvalue
    notenumber++
    novo.setAttribute("id", idime)
    var innerHTMLe = '<div class="noteprint clearfix"><div class="notebutton" onclick="deletethisnote(this.parentNode.parentNode.id)"><p class="notebuttontext">Delete</p></div><div class="notevalue"><p class="notevaluetext">' + textvalue + '</p></div></div>'
    novo.innerHTML = innerHTMLe
    display.insertBefore(novo, display.firstChild)
    var controls = document.getElementById("controls")
    var standardno = '<h1>JNotes</h1><div id="newJNoteButton" onclick="createNewNoteModuleLoad()"><p id="newsign">New JNote</p></div>'
    controls.innerHTML = standardno
    }
    
}

function deletethisnote(node_id) {
    delete allnotes[node_id]
    var izbrissporocilo = document.getElementById(node_id)
    display.removeChild(izbrissporocilo)
}
