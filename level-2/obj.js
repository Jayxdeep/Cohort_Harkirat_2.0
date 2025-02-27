function objectMethod(obj){
    console.log("original object:",obj)

    let keys=Object.keys(obj)
    console.log("After obejct.keys:",keys);

    let values=Object.values(obj);
    console.log("after object.value():",values);

    let entries=Object.entries(obj);
    console.log("After object.entries():",entries)

    let hasProp=obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():",hasProp);

    let newObj=Object.assign({},obj,{newProperty:"newValue"})
    console.log("after Object.assign():",newObj);//this new key value pair will be added in sampleobj
}
const sampleObject={
    key1:"value1",
    key2:"value2",
    key3:"value3",
};
objectMethod(sampleObject)