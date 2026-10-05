export let lang: "bg" | "eng"

 lang = "bg";

export function Switch(){
    return lang = lang === "eng" ? "bg" : "eng";  
}
export function current(){
    return lang;
}
