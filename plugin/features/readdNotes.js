_OKCP.readdNotes = function(){
    if ($('#note_string').text() === '') {
		$('#actions .action_options').append('<a class="UI-change-btn" href="javascript:Profile.loadWindow(\'edit_notes\', 244); return false;">Add Note</a>');
    }
};