	//Change the size of icons
	var IconSize = function(marker,area){ //
		var icon = marker.options.icon;
		icon.options.iconSize = [Math.sqrt(area/15)*3, Math.sqrt(area/15)*5];		
		marker.setIcon(icon);
	};


