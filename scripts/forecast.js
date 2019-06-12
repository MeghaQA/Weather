// get the key from https://developer.accuweather.com
const key = "";

const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query); //returns promise
    const data = await response.json(); //returns promise
    return data[0];
}

getLocation = async (locationKey)=> {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`
    const query = `?apikey=${key}`
    
    const response = await fetch(base+query);
    const data = await response.json(); //returns promise    
    return data[0];
}
// getCity('seattle').then(data => {
//     return data.Key
// }).then(data => {
//     return getLocation(data)
// }).then(result =>{
//     console.log(result);
// }).catch(err => {
//     console.log(err);
    
// })

