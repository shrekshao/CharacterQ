(function() {
    'use strict'
    
    var CharacterQ = window.CharacterQ;
    
    // a character data is stored as a json file
    // {... components: {hair: {'url': url1, 'transform': {'pos': {x:1,y:200,..}, 'scale': {...}}}, face: url2, ...}}
    

    
    CharacterQ.loadCharacter = function(characterJson) {
        // parse through the character json and load related part
        for( item in CharacterQ.ComponentType) {
            if( characterJson[item] ) {
                
            }
        }
    };

    CharacterQ.Character = function () {
        //this.components['weapon'] = 'sword';
        this.components = {};

        // base body componenet (skeleton)
    }
    
    CharacterQ.Character.prototype.loadComponent = function (params) {
        params.character = this;
        CharacterQ.Component.loadModel(params);
    };
    
})();