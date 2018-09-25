
(function() {
  'use strict';

  // class defintion 
  class AboutCtrl{
    constructor(){
      // example of building an object 
      this.angularVersion = {
        // @ts-ignore
        number: angular.version.full,
        // @ts-ignore
        codename: angular.version.codeName,
        // using an ES6 string literal 
        // @ts-ignore
        shortForm: `${angular.version.full} - "${angular.version.codeName}"`
      }
     
      this.name = this.loadTitle();
      this.version = this.angularVersion;
    }

    // just a function example
    loadTitle() {
      return 'Dashboard About View';
    }
  }
  // @ts-ignore
  angular.module('plunker').controller('About.Ctrl', AboutCtrl);

}());
