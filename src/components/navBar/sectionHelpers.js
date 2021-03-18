const root = document.documentElement;

function changeTheme(clr) {
    let obj = {};

    if ( clr === 'yellow' ) {
        obj.mainClr = "#FFC914";
        obj.accentClr = "#fd5e30";
        obj.titleClr = "#FF7F51";
        obj.fontClr = "#44423f";
    }
    if ( clr === 'blue' ) {
        obj.mainClr = "#2c699a";
        obj.accentClr = "#457b9d";
        obj.titleClr = "#219ebc";
        obj.fontClr = "#e5e5e5";
    }
    if ( clr === 'green' ) {
        obj.mainClr = "#61c9a8";
        obj.accentClr = "#0F7173";
        obj.titleClr = "#51907b";
        obj.fontClr = "#4b4b4b";
    }

    root.style.setProperty('--main-accent-clr', obj.mainClr);
    root.style.setProperty('--dark-accent-clr', obj.accentClr);
    root.style.setProperty('--title-clr', obj.titleClr);
    root.style.setProperty('--header-font-clr', obj.fontClr);

}


function changeViewMode(form, formSetter, modeSetter) {
    let obj = {};

    if ( form ) {
        obj.fontSize = 0.9 + 'rem';
        obj.maxWidth = 800 + 'px';
        obj.pointerBorder = 'none';
        obj.headerBorder = 'none';
        obj.pointerHover = 'none';
        obj.btnDisplay = 'none';
        obj.headerBtn = 'none';
        formSetter(false);
        modeSetter('Editing mode');
    } else {
        obj.fontSize = 1 + 'rem';
        obj.maxWidth = 900 + 'px';
        obj.pointerBorder = 2 + "px solid white";
        obj.headerBorder = 2 + "px solid var(--main-accent-clr)";
        obj.pointerHover = 2 + "px solid #ffe877";
        obj.btnDisplay = 'block';
        obj.headerBtn = 'inline-block';
        formSetter(true);
        modeSetter('Preview mode');
    }

    root.style.setProperty('--global-font-size', obj.fontSize);
    root.style.setProperty('--content-width', obj.maxWidth);
    root.style.setProperty('--pointer-border', obj.pointerBorder);
    root.style.setProperty('--header-pointer-border', obj.headerBorder);
    root.style.setProperty('--pointer-hover', obj.pointerHover);
    root.style.setProperty('--btn-display', obj.btnDisplay);
    root.style.setProperty(' --header-settings-display', obj.headerBtn);
}


export { changeTheme, changeViewMode };