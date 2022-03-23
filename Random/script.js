// project أنشئ كائن




const project={
    type:"tech",
    users:"100",
    biography(){
        return "This is my project"
    }
}
// randomProperty أنشئ دالة
function randomProperty(obj) {
    const keys = Object.keys(obj);

    const random = Math.floor(Math.random() * keys.length);

    console.log(keys[random]);

    console.log(keys[`${random}`]);

}
randomProperty(project);