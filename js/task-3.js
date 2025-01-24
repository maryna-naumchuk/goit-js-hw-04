const profile = {
  username: "Jacob",
  playTime: 300,

  getInfo: function() {
    return `${this.username} has ${this.playTime} active hours!`;
  },

  changeUsername: function(newName) {
    this.username = newName;
  },

  updatePlayTime: function(hours) {
    this.playTime += hours;
  }
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
