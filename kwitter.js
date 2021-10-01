function adduser () {

    user_name = document.getElementById("user_name").value;

    localStyorage.setItem("user_name" , user_name);

    window.location = "kwittier_room.html";
}