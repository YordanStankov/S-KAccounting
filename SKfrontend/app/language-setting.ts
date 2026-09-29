const language = {
    bg: 1,
    eng: 2
}

var setting = language.bg;

export function ChangeLanguage(){
    if(setting === language.bg)
        setting = language.eng
    else
        setting = language.bg;
}
export const perm = setting;
export function Handler(){
    if(perm === language.bg)
        return "placeholdersBg"
    else
        return "placeholders.Eng"
}
