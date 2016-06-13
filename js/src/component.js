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

    // CharacterQ.ComponentType = [
    //     'hair',
    //     'face',
    //     'eye',

    // ];
    
    var objLoader = new THREE.OBJLoader();
    var mtlLoader = new THREE.MTLLoader();
    /**
     * @param {CharacterQ.ComponentType} params.type cannot be null
     * @param {String} params.format (obj, gltf, ...)
     * @param {String} params.modelURL
     * @param {String} params.mtlURL
     */
    CharacterQ.Component.loadModel = function (params, onload, onError) {
                
        if(!params.type) {
            console.error('component params type is undefined!');
        }
        
        if(!params.format) {
            console.error('component params format is undefined!');
        }
        
        onError = onError || function (msg) {
            Human.log.error("CharacterQ.Component.loadModel", msg);
            ok();
        };
        

        if (params.format == 'obj') {
            
            //test
            mtlLoader.setBaseUrl(params.baseUrl); //texture base path
            mtlLoader.setPath(params.baseUrl);    //mtl base path
            mtlLoader.load(params.mtlName, function(materials) {
                materials.preload();
                
                objLoader.setMaterials(materials);
                objLoader.setPath(params.baseUrl);
                objLoader.load(params.objName, function(object){
                    // TODO: temp position
                    // should get position / bind to character according to ComponentType
                    object.position.y = -100;
                    CharacterQ.scene.add(object);
                });
            });
        }

        
    }
    
    
})();