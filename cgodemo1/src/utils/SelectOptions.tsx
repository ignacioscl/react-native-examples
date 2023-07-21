import IBasicItem from "../types/genericData/IBasicItem";

export const genderOptions = (id?:number):IBasicItem | IBasicItem[] => {

    const list = [
        {id:1,text:"Masculino"},
        {id:2,text:"Femenino"},
        {id:3,text:"Indefinido"}
    ]
    if (id && id>0) {
        return list.filter(t => t.id === id)[0]
    }
    return list;
}

export const sexualPreferencesOptions = (id?:number):IBasicItem | IBasicItem[] => {

    const list = [
        {id:1,text:"Hombres"},
        {id:2,text:"Mujeres"},
        {id:3,text:"Indefinido"}
    ]

    if (id && id>0) {
        return list.filter(t => t.id === id)[0]
    }
    return list;
}
