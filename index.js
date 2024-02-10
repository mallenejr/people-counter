

let count = 0
let strSavedCount = ""
let peopleCount = document.getElementById("people-count")
let totalCount = document.getElementById("total-count")
let previousCount = 0

function increment(){
count += 1
previousCount = count
peopleCount.textContent = count
}

function saveCount(){
    strLastSaved = totalCount.textContent
    strSavedCount = count + " - "
    totalCount.textContent += strSavedCount
    peopleCount.textContent = 0
    count = 0
}

function deleteLastSaved(){
    totalCount.textContent = strLastSaved
    peopleCount.textContent = previousCount
    count = previousCount
}

function resetCount(){
    count = 0
    strSavedCount = ""
    peopleCount.textContent = count
    totalCount.textContent = "Previous Entries: "
}




