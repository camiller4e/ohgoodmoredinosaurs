// A park must have:
//
// A name
// A ticket price
// A collection of dinosaurs
// A park must be able to:
//
// Add a dinosaur to its collection of dinosaurs
// Remove a dinosaur from its collection of dinosaurs
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species
// Remove all dinosaurs of a particular species

const Park = function(name, price){
  this.name = name;
  this.price = price;
  this.dinosaurs = [];

}

Park.prototype.addDino = function(dino){
  this.dinosaurs.push(dino);
}

Park.prototype.removeDino = function(dino){
  this.dinosaurs.splice(dino);
}

Park.prototype.popularDino = function(){
  var mostPopular = this.dinosaurs[0];
  for(dino of this.dinosaurs){
    if(dino.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay){
      mostPopular = dino;
    }
  }
  return mostPopular;
  }

  Park.prototype.getBySpecies = function(species){
    foundDinos = [];
    for(dino of this.dinosaurs){
      if(dino.species == species){
        foundDinos.push(dino)
      }
    }
    return foundDinos;
  }

  // Park.prototype.deleteBySpecies = function(species){
  //   for(dino of this.dinosaurs){
  //     if(dino.species === species){
  //       this.dinosaurs.splice(0, this.dinosaurs.indexOf(dino))
  //     }
  //   }
  // }

//   Park.prototype.deleteBySpecies = function(species){
//   for (dino of this.dinosaurs){
//     this.dinosaurs.splice(species, 1);
//   }
// }


module.exports = Park;
