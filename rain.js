function Drop() {
  this.x = random(0,1000);
  this.y = 10
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);

  this.fall = function() {
    this.y = this.y + this.yspeed;
  //  var grav = map(this.z, 0, 20, 0, 0.2);
  

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  };

  this.show = function() {
   // var thick = map(this.z, 0, 20, 1, 3);
  //  strokeWeight(thick);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + this.len);
  };
}