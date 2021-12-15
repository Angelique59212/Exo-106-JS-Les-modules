export {hello, send, friends}
function hello() {
    let hello = document.createElement("div");
    hello.innerHTML = "Hello World!"
    return hello;
}

function send(type) {
    let send = document.createElement("input");
    send.value = "Formulaire";
    send.type = type;
    send.className = "form";
    return send;
}

function friends(name) {
    let label = document.createElement("label");
    label.innerHTML = name;
    return label;
}
