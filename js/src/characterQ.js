(function(){
    'use strict';
    
    var CharacterQ = window.CharacterQ = {};
    
    CharacterQ.init = function() {
        var scene = CharacterQ.scene = new THREE.Scene();
        //CharacterQ.camera = new THREE.PerspectiveCamera();
        
        var container = CharacterQ.container = document.getElementById('mainContainer');
        //container.width = window.innerWidth;
        //container.height = window.innerHeight;
        
        var renderer = CharacterQ.renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild(renderer.domElement);
        
        
        
        
        
        
        // ---- temp test
        
        // camera
        var camera = CharacterQ.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
		camera.position.z = 250;

        // light
        var ambient = new THREE.AmbientLight( 0x444444 );
        scene.add( ambient );

        var directionalLight = new THREE.DirectionalLight( 0xffeedd );
        directionalLight.position.set( 0, 0, 1 ).normalize();
        scene.add( directionalLight );
        
        // model
        var onProgress = function ( xhr ) {
            if ( xhr.lengthComputable ) {
                var percentComplete = xhr.loaded / xhr.total * 100;
                console.log( Math.round(percentComplete, 2) + '% downloaded' );
            }
        };

        var onError = function ( xhr ) { };

        THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setBaseUrl( 'obj/male02/' );
        mtlLoader.setPath( 'obj/male02/' );
        mtlLoader.load( 'male02_dds.mtl', function( materials ) {

            materials.preload();

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials( materials );
            objLoader.setPath( 'obj/male02/' );
            objLoader.load( 'male02.obj', function ( object ) {

                object.position.y = - 95;
                scene.add( object );

            }, onProgress, onError );

        });

        
        //test
        animate();
        CharacterQ.Component.loadModel({type:CharacterQ.ComponentType.handholding});
        
        window.addEventListener( 'resize', CharacterQ.onWindowResize, false );
        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    }
    
    //temp test
    function animate() {

        requestAnimationFrame( animate );
        render();

    }

    function render() {
        var camera = CharacterQ.camera;
        var scene = CharacterQ.scene;
        var renderer = CharacterQ.renderer;
        
        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY - camera.position.y ) * .05;

        camera.lookAt( scene.position );

        renderer.render( scene, camera );

    }
    
    
    var mouseX = 0, mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    function onDocumentMouseMove( event ) {

        mouseX = ( event.clientX - windowHalfX ) / 2;
        mouseY = ( event.clientY - windowHalfY ) / 2;

    }
    
    // TODO: canvas resize
    CharacterQ.onWindowResize = function() {
        var camera = CharacterQ.camera;
        
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        CharacterQ.renderer.setSize( window.innerWidth, window.innerHeight );
    }
})();