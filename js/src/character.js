(function() {
    'use strict'
    
    var CharacterQ = window.CharacterQ;
    
    /**
     * @param {*} params
     * @param {string} params.modelID
     */
    var character = CharacterQ.character = function(params) {
        var modelID = params.modelID === undefined ? 'default-model-id' : params.modelID;
        
        this.object3D = new THREE.Object3D();
    }
    
    character.prototype.foo = function() {
        
    }
})();