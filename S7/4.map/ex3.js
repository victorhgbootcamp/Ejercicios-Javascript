const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const newCities = cities.map(function(citie){
    if (citie.isVisited == true){
       return citie.name + " (Visitado)"
    }else{
        return citie.name
    }
}
)
console.log(newCities)