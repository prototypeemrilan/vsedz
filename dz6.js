const list= []

const darouv = document.getElementById("btn");
const name = document.getElementById("name");

function render() {
    const MainDiv =  document.createElement("div");
    MainDiv.setAttribute("class", "list");
    for (let i=0; i < list.length; i++) {
        const divlist = document.createElement('div');
        divlist.setAttribute("class", "block");
        const p = document.createElement("p");
        p.innerHTML = list[i].text;
        divlist.append(p);
        MainDiv.append(divlist);
    }
    const ferma = document.querySelector(".bigclock");
    document.querySelector(".list").remove();
    ferma.append(MainDiv)
}

darouv.onclick= function () {
    const obj = {
        id: list.length,
        text: "Салам   " + name.value
    }
    this.append(list)
    list.push(obj)
    render()
}



const comm= [0];
const comm1= [1];
const comm2= [2];
const comm3= [3];
const comm4= [4];
const comm5= [...comm,comm1,comm2,comm3,comm4];
console.log(comm5)
const object = {
    key1: {
        id: "1"
    },
    key2: {
        id: "2"
    },
    key3: {
        id: "3"
    },
    key4: {
        id: "4"
    },
    key5: {
        id: "5"
    },
}

const newObject = {
    ...object,
    key6: {
        id: "6"
    },
    key7: {
        id: "7"
    },
    key8: {
        id: "8"
    },
}
console.log(newObject)

