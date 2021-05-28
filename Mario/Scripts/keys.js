var keys = {
	bind : function() {
		$(document).on('keydown', function(event) {	
			return keys.handler(event, true);
		});
		$(document).on('keyup', function(event) {	
			return keys.handler(event, false);
		});
	}
	,
	reset : function() {
		keys.left = false;
		keys.right = false;
		keys.accelerate = false;
		keys.up = false;
		keys.down = false;
	},
	unbind : function() {
		$(document).off('keydown');
		$(document).off('keyup');
	}
	,handler : function(event, status) {
		switch(event.keyCode) {
			case 17:
				keys.accelerate = status;
				break;
			case 83:
				keys.down = status;
				break;
			case 68:
				keys.right = status;
				break;
			case 65:
				keys.left = status;			
				break;
			case 87:
				keys.up = status;
				break;
			default:
				return true;
		}
			
		event.preventDefault();
		return false;
	}
	,
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
	
};