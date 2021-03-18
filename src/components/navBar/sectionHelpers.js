function changeTheme(clr) {
    let root = document.documentElement;
    // Default theme is yellow
    let mainClr = "";
    let accentClr = "";
    let titleClr = "";
    let fontClr = "";

    if ( clr === 'yellow' ) {
        mainClr = "#FFC914";
        accentClr = "#fd5e30";
        titleClr = "#FF7F51";
        fontClr = "#44423f";
    }
    if ( clr === 'blue' ) {
        mainClr = "#2c699a";
        accentClr = "#457b9d";
        titleClr = "#219ebc";
        fontClr = "#e5e5e5";
    }
    if ( clr === 'green' ) {
        mainClr = "#61c9a8";
        accentClr = "#0F7173";
        titleClr = "#51907b";
        fontClr = "#4b4b4b";
    }

    root.style.setProperty('--main-accent-clr', mainClr);
    root.style.setProperty('--dark-accent-clr', accentClr);
    root.style.setProperty('--title-clr', titleClr);
    root.style.setProperty('--header-font-clr', fontClr);
}

export default changeTheme