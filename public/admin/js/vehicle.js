jQuery(document).ready(function() {
	jQuery('.compontent-manager').each(function() {
		var manager		= jQuery( this );
		var display		= manager.find( 'ul.component-display' );
		var toAdd		= manager.find( 'select.toAdd' );
		var add			= manager.find( 'button.add' );
		
		add.click(function() {
			var value	= toAdd.val();
			var option	= toAdd.find( 'option[value='+ value +']' );

			if (value == '') return false;

			var html = [
				'<li>',
				'	<input type="hidden" name="components[]" value="' + value + '" />',
				'	<span> ' + option.text() + '</span>',
				'	<button class="remove btn btn-danger btn-xs">',
				'		<i class="glyphicon glyphicon-remove"></i>',
				'	</button>',
				'</li>'
			];

			display.append( html.join( '' ) );

			toAdd.val( '' );

			return false;
		});

		manager.on('click', 'button.remove', function() {
			var li = jQuery( this ).parents( 'li' );

			li.remove();

			return false;
		});
	});
});