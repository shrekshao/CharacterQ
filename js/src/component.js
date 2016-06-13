(function(){
    'use strict';
    
    //var CharacterQ = window.CharacterQ;
    CharacterQ.Component = {};
    
    CharacterQ.ComponentType = {
        hair: 0,
        face: 1,
        eye: 2,
        nose: 3,
        mouth: 4,
        mustache: 5,
        beard: 6,
        body: 7,
        top: 8,     //clothing
        bottom: 9,  //clothing
        hat: 10,
        handholding: 11,
        back: 12,
        environment:13,
        glasses: 14
    };
    
    var objLoader = new THREE.OBJLoader();
    var mtlLoader = new THREE.MTLLoader();
    /**
     * @param {CharacterQ.ComponentType} params.type cannot be null
     * @param {String} params.format (obj, gltf, ...)
     * @param {String} params.modelURL
     * @param {String} params.mtlURL
     */
    CharacterQ.Component.prototype.loadModel = function (params, onload, error) {
                
        if(!params.type) {
            console.error('component params type is undefined!');
        }
        
        if(!params.url) {
            console.error('component params url is undefined!');
        }
        
        error = error || function (msg) {
            Human.log.error("CharacterQ.Component.loadModel", msg);
            ok();
        };
        
        //this.type = params.type;
        //this.url = params.url;
        var type = params.type;
        var url = params.url;
        
        //test
        mtlLoader.setBaseUrl('obj/sword/');
        mtlLoader.setPath('obj/sword/');
        mtlLoader.load('Sword07_obj.mtl', function(materials) {
            materials.preload();
            
            objLoader.setMaterials(materials);
            objLoader.setPath('obj/sword/');
            objLoader.load('Sword07_obj.obj', function(object){
                object.position.y = -100;
                CharacterQ.scene.add(object);
            });
        });
    }
    
    
})();