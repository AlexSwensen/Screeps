// Wrapped to keep locally defined variables from being leaked into the global context.
(function () {
  /*
   require("prototype.source")
   Prototype Extensions for Source type.
   */
  const areaSearch = require('./area.search');

  Source.prototype.miningLocations = function () {

    let search = areaSearch.searchArea(this.room, this.pos, 1, undefined, true);
    return search.filter(location => {
      return (location.terrain && (location.terrain == "plain" || location.terrain == "swamp"));
    });
    // console.log(JSON.stringify(test.length));
  };
  Source.prototype.minerLocations = function () {
    let search = areaSearch.searchArea(this.room, this.pos, 1, LOOK_CREEPS, true);
    console.log(search);
    return search;
  };

})();