const button = document.getElementById("bored")
const board = document.getElementById("activity-holder")
const getActivity = async () =>{
    let getData = await axios.get("http://www.boredapi.com/api/activity?type=recreational")
    let getActivity = getData.data.activity
    debugger
    let activityHolder = document.createElement("li")
    activityHolder.textContent = getActivity
    activityHolder.classList.add("activities")
    board.appendChild(activityHolder)
    getData.data.activity
    debugger
}
button.addEventListener("click", getActivity)

