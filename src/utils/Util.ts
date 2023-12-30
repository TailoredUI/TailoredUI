const getIndent = (level:number) => {
    let result = '',
        i = level * 4;
    if (level < 0) {
        throw 'Level is below 0';
    }
    while (i--) {
        result += ' ';
    }
    return result;
};

export const formatHtml = (html: string) => {
    html = html.trim();
    const tokens = html.split(/</);
    let result = '',
        indentLevel = 0;

    for (let i = 0, l = tokens.length; i < l; i++) {
        const parts = tokens[i].split(/>/);
        if (parts.length === 2) {
            if (tokens[i][0] === '/') {
                indentLevel--;
            }
            result += getIndent(indentLevel);
            if (tokens[i][0] !== '/') {
                indentLevel++;
            }

            if (i > 0) {
                result += '<';
            }

            result += parts[0].trim() + '>\n';
            if (parts[1].trim() !== '') {
                result += getIndent(indentLevel) + parts[1].trim().replace(/\s+/g, ' ') + '\n';
            }

            if (parts[0].match(/^(img|hr|br)/)) {
                indentLevel--;
            }
        } else {
            result += getIndent(indentLevel) + parts[0] + '\n';
        }
    }
    return result;
};


export function previewJsx(componentHtml:string) {
    let clonedHtml = componentHtml
  
    clonedHtml = clonedHtml.replace(/class=/g, 'className=')
    clonedHtml = clonedHtml.replace(/for=/g, 'htmlFor=')
    clonedHtml = clonedHtml.replace(/viewBox=/g, 'viewBox=')
    clonedHtml = clonedHtml.replace(/fill-rule=/g, 'fillRule=')
    clonedHtml = clonedHtml.replace(/fill-opacity=/g, 'fillOpacity=')
    clonedHtml = clonedHtml.replace(/clip-rule=/g, 'clipRule=')
    clonedHtml = clonedHtml.replace(/stroke-linecap=/g, 'strokeLinecap=')
    clonedHtml = clonedHtml.replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    clonedHtml = clonedHtml.replace(/stroke-width=/g, 'strokeWidth=')
    clonedHtml = clonedHtml.replace(/stroke-dasharray=/g, 'strokeDasharray=')
    clonedHtml = clonedHtml.replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
    clonedHtml = clonedHtml.replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    clonedHtml = clonedHtml.replace(/stroke-opacity=/g, 'strokeOpacity=')
    clonedHtml = clonedHtml.replace(/tabindex=/g, 'tabIndex=')
    clonedHtml = clonedHtml.replace(/<!--/g, '{/*')
    clonedHtml = clonedHtml.replace(/-->/g, '*/}')
  
    return clonedHtml
  }
  
  export function previewVue(componentHtml:string) {
    const newComponentHtml = `<template>\n${componentHtml}</template>`
    const formattedComponentHtml = newComponentHtml
      .split('\n')
      .map((codeLine) => {
        if (codeLine.includes('<template>') || codeLine.includes('</template>')) {
          return codeLine.trim()
        }
  
        return `  ${codeLine}`
      })
      .join('\n')
  
    return formattedComponentHtml
  }