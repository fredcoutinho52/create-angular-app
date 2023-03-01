function formatComponentName(componentName) {
    const nameSplitted = componentName.split("-");
    const capitalized = nameSplitted.map(item => item.charAt(0).toUpperCase() + item.slice(1));
    const nameInPascalCase = capitalized.join("");
    return nameInPascalCase;
}

module.exports = { formatComponentName }
