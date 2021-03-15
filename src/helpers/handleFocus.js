// When user starts editing any section, when input field is focused,
// all of the text is selected

function handleFocus (e) {
    e.target.select();
}

export default handleFocus
