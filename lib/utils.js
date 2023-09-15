export function GetElementsFromJson(str) {
    var pieces = []
    while (str.includes('{')) {
        let start = str.indexOf('{')
        let end = str.indexOf('}') + 1
        if (start != 0) {
            pieces.push(str.substring(0, start)) //before {}
        }
        pieces.push(str.substring(start, end)) //{}
        str = str.substring(end)  //Remove pushed pieces from string 
    }
    if ((str.trim().length)) { // non blank string
        pieces.push(str)// after {}
    }
    let finalPieces =[]
    pieces.forEach(element => {
        /**
         * Element  
            target EXAmPLE {'tag':'a','href':'https://www.expertise.com/tn/chattanooga/probate-lawyers','text':'We Scored 49 Probate Lawyers in Chattanooga, TN and Picked the Top 13','target':'blank'}
         */
       // let element = "{'tag':'a','href':'#What type','text':' What type is your case?'}"
        if (element.includes('{') && element.includes('}')) {
                var tagObj = buildObj(element);
                function buildObj(str){
                
                    let retObj ={}
                    while (str.includes(':')) {
                        let  tagKey 
                        let tagEnd
                        let tagValue
                        var index = str.indexOf(':')
                         
                            tagKey = str.substring(2,index-1)//{' or ,'
                            tagEnd = str.indexOf(`','`)
                            if(tagEnd === -1){tagEnd = str.indexOf(`'}`)}
                            tagValue =str.substring(index+2, tagEnd)
                        retObj[tagKey] = tagValue
                        str = str.substring(tagEnd+1)         
                    }
                    return retObj
                }
                finalPieces.push(tagObj)
            }
        else{
            finalPieces.push(element)
        }
    });
    return finalPieces
}
export async function makeSerailizable(obj){
    if(!obj){
      //  console.log('!!!! Make Serializeable no object')
        return null
    }
    if(Array.isArray(obj)){
       // console.log(' if(Array.isArray(obj)){')
        obj.forEach(element => {
            element = makeSerailizable(element)
        })
    }
    
    if(obj.createdAt instanceof Date){
        obj.createdAt = obj.createdAt.toString()
    }
    if(obj.updatedAt instanceof Date){
        obj.updatedAt = obj.updatedAt.toString()
    }
    if(obj.publishedAt instanceof Date){
        obj.publishedAt = obj.publishedAt.toString()
    }
    if((typeof(obj.json)) != 'object' && obj?.json){
        try{
            obj.json = JSON.parse(obj.json)
        }
        catch (err) {
            console.log('Catch \n',  obj.json, '\n\n' , 'err \n ', err , '\n\n')
        }

    }
    if(obj.subNavEntries){
        obj.subNavEntries.forEach(entry => {
            entry = makeSerailizable(entry)
        })
    }

return obj
}
