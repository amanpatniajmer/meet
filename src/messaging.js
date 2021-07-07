function showAddParticipants(id, contacts) {
    let contentAll = '';
    for (let i = 0; i < contacts.length; i++) {
        let content = "<div class='contact-card'>\
            <div class='upper'>\
                <div>\
                    <div class='avatar'>" +
            getAvatar(contacts[i].name) +
            "</div>\
                    <span class='name'>" +
            contacts[i].name +
            "</span>\
                </div>\
                <div>\
                    <button onclick='sendInvite(\"" +
            contacts[i].id +
            "\")'><i class='fa fa-plus-circle'></i> Add</button>\
               </div>\
            </div>\
        </div>";
        contentAll += content;
    }
    document.getElementById(id).innerHTML = contentAll;
}

function updateParticipants(participants) {
    let contentAll = '';
    let id = 'participantsList';
    for (let i = 0; i < participants.length; i++) {
        let content = "<div class='contact-card'>\
            <div class='upper'>\
                <div>\
                    <div class='avatar'>" +
            getAvatar(participants[i].name) +
            "</div>\
                    <span class='name'>" +
            participants[i].name +
            "</span>\
                </div></div>\
                <div class='lower'>\
                    <button onclick='removeParticipant(\"" +
            participants[i].id +
            "\")'>Remove <i class='fa fa-close'></i> </button>\
               </div>\
            </div>\
        </div>";
        contentAll += content;
    }
    document.getElementById(id).innerHTML = contentAll;
}

function updateRoomsList(rooms, id) {
    let contentAll = "";
    for (let i = 0; i < rooms.length; i++) {
        let content = "<div class='contact-card' style='cursor:pointer' onclick=\"setRemoteChat('"+rooms[i].id+"')\">\
                    <div class='upper'>\
                    <div class='avatar' style=\"background-color:" +
            getAvatarColor(rooms[i].id) +
            "\">" +
            getAvatar(rooms[i].name) +
            "</div>\
                            <div class='name'>" +
            rooms[i].name +
            "</div>\
                        </div>\
                        <div class='lower'>\
                            <div></div>\
                        </div>\
                </div>";
        contentAll += content;
    }
    document.getElementById(id).innerHTML = contentAll;
}