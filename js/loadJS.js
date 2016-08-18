/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
(function( w ){
	var loadJS = function( srcs, cb ){
		"use strict";
		var ref, script, link, srcs, src, href;

		if( typeof srcs !== "object" ){
			ref = w.document.getElementsByTagName( "script" )[ 0 ];
			script = w.document.createElement( "script" );
			script.src = srcs;
			script.async = true;
			ref.parentNode.insertBefore( script, ref );
		} else {
			for ( src in srcs ) {
				if ( typeof srcs[src] === "object" && srcs[src].length !== "undefined" ) {
					for (var i = 1; i < srcs[src].length; i++) {
						ref = w.document.getElementsByTagName( "head" )[ 0 ];
						link = w.document.createElement( "link" );
						console.log( srcs[src][i] );
						link.href = srcs[src][i];
						link.async = false;
						ref.parentNode.insertBefore( link, ref );
					}
				}
				if ( typeof srcs[src] === "object" && srcs[src].length !== "undefined" ){
					src = srcs[src][0];
				} else {
					src = srcs[src];
				}
				ref = w.document.getElementsByTagName( "script" )[ 0 ];
				script = w.document.createElement( "script" );
				script.src = src;
				script.async = true;
				ref.parentNode.insertBefore( script, ref );
			}
		}

		if (cb && typeof(cb) === "function") {
			script.onload = cb;
		}
		return script;
	};
	// commonjs
	if( typeof module !== "undefined" ){
		module.exports = loadJS;
	}
	else {
		w.loadJS = loadJS;
	}
}( typeof global !== "undefined" ? global : this ));