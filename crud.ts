const fs = require("fs")
function rename(file:string,newFile:string){
    fs.rename(file,newFile,(err:Error)=>{
        if(err)console.log(err)
        console.log("rename successful!")
    })
}
function del(file:string){
    fs.unlink(file,(err:string)=>{
        if(err)console.log(err)
        console.log("delete successful!")
    })
}
function write(file:string,data:object){
fs.writeFile(file,JSON.stringify(data),(err:Error)=>{
    if(err)console.log(err)
})
}
async function read(file:string){
    var exists;
    await fs.exists(file,(exist:boolean)=>{
        exists = exist
    })
    if(!exists){
        console.log("file does not exist!!!!")
    }
    else await fs.readFile(file,"utf-8",(err:Error,data:string)=>{
        if(err)console.log(err)
        else console.log(data)
    })
}
function append(file:string,data:object){
    fs.appendFile(file,JSON.stringify(data),(err:Error)=>{
        if(err)console.log(err)
    })

}
const data = {
    "name":"John",
    "age":20
}
read("crud.json")