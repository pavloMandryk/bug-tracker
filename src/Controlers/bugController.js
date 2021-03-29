import bugModel from '../Models/bugModel'

export function retriveBugs(){
    let data = [];

    data.push(new bugModel({
        _id: 234566,
        name:"Crashes on Load", 
        details:"Crashes on load",
        steps:"Open application and it will crash",
        version: "V1.0",
        assigned: "Pavlo Mandryk",
        priority:1,
        creator:"Paulo Colombo",
        time: "9:28",
    }))
    data.push(new bugModel({
        _id: 12345662,
        name:"Something else", 
        details:"Somethig bad happens",
        steps:"go to the domain and it opens a strange window",
        version: "V1.0",
        assigned: "Pavlo Mandryk",
        priority: 3,
        creator:"Paulo Colombo",
        time: "9:32",
    }))
    data.push(new bugModel({
        _id: 12345662,
        name:"Something else", 
        details:"Somethig bad happens",
        steps:"go to the domain and it opens a strange window",
        version: "V1.0",
        assigned: "Pavlo Mandryk",
        priority: 3,
        creator:"Paulo Colombo",
        time: "9:32",
    }))
    data.push(new bugModel({
        _id: 12345662,
        name:"Something else", 
        details:"Somethig bad happens",
        steps:"go to the domain and it opens a strange window",
        version: "V1.0",
        assigned: "Pavlo Mandryk",
        priority: 3,
        creator:"Paulo Colombo",
        time: "9:32",
    }))
    let sorted = data.sort((a,b) => {return a.priority - b.priority });
    return sorted;
}

