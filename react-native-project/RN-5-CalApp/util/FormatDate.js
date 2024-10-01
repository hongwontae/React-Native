export function formatDate(date){
    const year = date.getFullYear();
    let month = date.getMonth()+1;
    const day = date.getDate();

    return `${year}-${month}-${day}`
}

export function getDataMinusDays(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}