/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */
const endDate = "29 September 2024 11:00 PM"

document.getElementById("end-date").innerText = endDate

const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end-now) / 1000;

    if(diff < 0) return;

    //converting it into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

}
//initial calling
clock()

setInterval(
    () =>{
        clock()
    },
    1000// for one sec
)