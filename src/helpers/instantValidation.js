// identify whether a field should be validated
// ie. true if the field is neither readonly nor disabled,
// and has either "pattern", "required" or "aria-invalid"

function shouldBeValidated(field) {
    return !(field.getAttribute("disabled") || field.disabled) &&
        (field.getAttribute("pattern") || field.getAttribute("required"));
}

// field testing and validation function
function instantValidation(field) {
    // if the field should be validated
    if (shouldBeValidated(field)) {
        console.log('field name is ' + field.name + ' and it should be validated')
        // the field is invalid if:
        // it's required but the value is empty
        // it has a pattern but the (non-empty) value doesn't pass
        let invalid =
            (field.getAttribute("required") && !field.value) ||
            (field.getAttribute("pattern") &&
                field.value &&
                !new RegExp(field.getAttribute("pattern")).test(field.value));

        // add or remove the attribute is indicated by
        // the invalid flag and the current attribute state
        if (!invalid && field.getAttribute("aria-invalid")) {
            field.removeAttribute("aria-invalid");
            console.log('field is valid');
            return true;

        } else if (invalid && !field.getAttribute("aria-invalid")) {
            field.setAttribute("aria-invalid", "true");
            console.log('field is invalid');
            return false;
        }
    }
}

export default instantValidation