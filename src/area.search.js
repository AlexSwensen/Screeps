const constants = require('constants');

let areaSearch = {
  /**
   * Search near a position, optionally for a thing.
   * @param room {Room}
   * @param targetPos {RoomPosition}
   * @param areaOffset {Number}
   * @param thing {String} - LOOK_*
   * @param asArray {Boolean}
   * @returns {*}
   */
  searchArea: function (room, targetPos, areaOffset, thing = undefined, asArray = false) {
    if (thing) {
      return this.searchAreaFor(room, thing, targetPos, areaOffset, thing, asArray);
    } else {
      return this.showArea(room, targetPos, areaOffset, asArray);
    }
  },
  /**
   *
   * @param room {Room}
   * @param targetPos {RoomPosition}
   * @param areaOffset {Number}
   * @param [asArray] {Boolean}
   * @returns {Array|Object}
   */
  showArea: function (room, targetPos, areaOffset, asArray = false) {
    const area = this.createArea(room, targetPos, areaOffset);
    return room.lookAtArea(area.top, area.left, area.bottom, area.right, asArray);
  },
  searchAreaFor: function (room, thing, areaObj, asArray = false) {
    return room.lookForAtArea(thing, areaObj.top, areaObj.left, areaObj.bottom, areaobj.right, asArray);
  },
  /**
   *
   * @param room {Room}
   * @param targetPos {RoomPosition}
   * @param areaOffset {Number}
   * @returns {{top: (*|Number), right: (*|Number), bottom: (*|Number), left: (*|Number)}}
   */
  createArea: function (room, targetPos, areaOffset) {
    if (!(areaOffset > 0)) {
      // console.error('Area must be greater than 0');
      // return?
    }
    const areaObj = {
      top: this.sanitizeBoundCoord(targetPos.y + areaOffset),
      right: this.sanitizeBoundCoord(targetPos.x + areaOffset),
      bottom: this.sanitizeBoundCoord(targetPos.y - areaOffset),
      left: this.sanitizeBoundCoord(targetPos.x - areaOffset)
    };

    return areaObj;

  },

  /**
   * Sanitizes a boundary room coordinate to actually be a real coordinate.
   * @param value {Number}
   * @returns {Number}
   */
  sanitizeBoundCoord: function (value) {
    if (value > constants.roomTrueSize) {
      return constants.roomTrueSize;
    }
    if (value < 0) {
      return 0;
    }
    else {
      return 0;
    }
  }
};

module.exports = areaSearch;