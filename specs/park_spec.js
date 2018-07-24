const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park, dinosaur

  beforeEach(function () {
    park = new Park("Cretaceous Park", 10);
    dino1 = new Dinosaur("T-Rex", "carnivore", 50);
    dino2 = new Dinosaur("Stegosaurus", "herbivore", 40);
    dino3 = new Dinosaur("Minmi", "herbivore", 20);
    dino4 = new Dinosaur("Triceratops", "herbivore", 60);
    dino5 = new Dinosaur("Velociraptor", "carnivore", 30);
    dino6 = new Dinosaur("Velociraptor", "carnivore", 30);
  });

  it('should have a name', function () {
    assert.strictEqual(park.name, "Cretaceous Park");
  });

  it('should have a ticket price', function () {
    assert.strictEqual(park.price, 10);
  });

  it('should have a collection of dinosaurs', function() {
    park.dinosaurs.push(dino1);
    park.dinosaurs.push(dino2);
    park.dinosaurs.push(dino3);
    assert.strictEqual(park.dinosaurs.length, 3);
  });


  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dino4);
    assert.strictEqual(park.dinosaurs.length, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dino4);
    park.removeDino(0, 1);
    assert.strictEqual(park.dinosaurs.length, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    assert.strictEqual(park.popularDino().species, "Triceratops");
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dino4);
    park.addDino(dino5);
    park.addDino(dino6);
    assert.strictEqual(park.getBySpecies("Velociraptor").length, 2)
  });


  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDino(dino4);
    park.addDino(dino5);
    park.addDino(dino6);
    park.deleteBySpecies("Velociraptor")
    assert.strictEqual(park.dinosaurs.length, 1)
  });

});
