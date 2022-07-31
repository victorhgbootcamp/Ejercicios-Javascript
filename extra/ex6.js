const user = {name: "Abel", surname: "Cabeza"}

function a(user){
    const nama = b(user.nama);
    console.log(nama)
}

function b(name){
    return "Que pasa " + name;
}

a(user);