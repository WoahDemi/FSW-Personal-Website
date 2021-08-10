const button = document.getElementById("bored")
const board = document.getElementById("activity-holder")
const getActivity = async () =>{
    let getData = await axios.get("https://www.boredapi.com/api/activity?type=recreational")
    let activity = getData.data.activity
    board.textContent = activity
    getData.data.activity 
}
button.addEventListener("click", getActivity)

