module.exports = function main(inputs) {
    // write your code here...
	var distance=inputs['distance'];
	var parking=inputs['parkTime']*0.25;
	var price=6;
	if (distance<=2)price+=parking;
		else if(distance<=8)price+=(distance-2)*0.8+parking;
			else price+=0.8*6+1.2*(distance-8)+parking;
    return Math.round(price);
};
