var AUDIOPATH = 'Content/audio/';
var BASEPATH   = 'Content/';
var DIV        = '<div />';
var CLS_FIGURE = 'figure';
var CLS_MATTER = 'matter';

var directions = {
	none  : 0,
	left  : 1,
	up    : 2,
	right : 3,
	down  : 4,
};
var mario_states = {
	normal : 0,
	fire  : 1,
};
var size_states = {
	small : 1,
	big   : 2,
};
var ground_blocking = {
	none   : 0,
	left   : 1,
	top    : 2,
	right  : 4,
	bottom : 8,
	all    : 15,
};
var collision_type = {
	none       : 0,
	horizontal : 1,
	vertical   : 2,
};
var death_modes = {
	normal : 0,
	shell  : 1,
};
var images = {
	enemies : BASEPATH + 'enemies.png',
	sprites : BASEPATH + 'sprites.png',
	objects : BASEPATH + 'objects.png',
	peach   : BASEPATH + 'princess.png',
};
var constants = {
	interval        : 15,
	bounce          : 20,
	cooldown        : 40,
	gravity         : 1.5,
	start_lives     : 10,
	max_width       : 500,
	max_height      : 20,
	jumping_v       : 30,
	walking_v       : 3,
	mushroom_v      : 2,
	ballmonster_v   : 3,
	spiked_turtle_v : 2,
	small_turtle_v  : 3,
	big_turtle_v    : 3,
	shell_v         : 5,
	shell_wait      : 20,
	star_vx         : 3,
	star_vy         : 10,
	bullet_v        : 10,
	max_coins       : 500,
	pipeplant_count : 120,
	pipeplant_v     : 2,
	invincible      : 15000,
	invulnerable    : 15000,
	blinkfactor     : 2,
};
var mushroom_mode = {
	mushroom : 0,
	plant    : 1,
};
var c2u = function(s) {
	return 'url(' + s + ')';
};
var q2q = function(figure, opponent) {
	if(figure.x > opponent.x + 16)
		return false;		
	else if(figure.x + 16 < opponent.x)
		return false;		
	else if(figure.y + figure.state * 32 - 4 < opponent.y)
		return false;		
	else if(figure.y + 4 > opponent.y + opponent.state * 32)
		return false;
		
	return true;
};
Math.sign = function(x) {
	if(x > 0)
		return 1;
	else if(x < 0)
		return -1;
		
	return 0;
};