function describe_city(city: string, country : string = "Pakistan"){
    console.log(`${city} is in ${country}.`)
}


describe_city("Islamabad");
describe_city("Beijing", "China")
describe_city("Delhi" , "India")