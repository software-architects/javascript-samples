var MyLib;
if (!MyLib) MyLib = {};
(function() {
	function privateFunction() {
		return 42;
	};
	
	// explicitely define public interface
	MyLib.publicFunction = function() {
		var p = privateFunction();
		return p * 3;	
	};
})();

