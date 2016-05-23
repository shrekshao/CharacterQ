(function() {
    'use strict'
    
    var CharacterQ = window.CharacterQ;
    
    // a character data is stored as a json file
    // {... components: {hair: url1, face: url2, ...}}
    
    
    /**
     * @param {*} params
     * @param {string} params.modelID
     * @param {string} params.modelURL
     */
    
    var character = CharacterQ.character = function(params) {
        //var modelID = params.modelID === undefined ? 'default-model-id' : params.modelID;
        
        //this.object3D = new THREE.Object3D();
    }
    
    CharacterQ.loadCharacter = function(characterJson) {
        for( item in CharacterQ.ComponentType) {
            if( characterJson[item] ) {
                
            }
        }
    };
    
    
})();