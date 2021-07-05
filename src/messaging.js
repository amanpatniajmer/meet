function updateContactsList(contacts, id) {
    let contentAll = "";
    for (let i = 0; i < contacts.length; i++) {
        let content = "<div class='contact-card' style='cursor:pointer' onclick=\"setRemoteChat('"+contacts[i].id+"')\">\
                    <div class='upper'>\
                    <div class='avatar' style=\"background-color:" +
            getAvatarColor(contacts[i].name) +
            "\">" +
            getAvatar(contacts[i].name) +
            "</div>\
                            <div class='name'>" +
            contacts[i].name +
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