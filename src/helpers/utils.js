function toShortDate (dateString) {
    if (!(dateString || dateString instanceof Date)) {
        return "";
    }

    let date = new Date(dateString)

    return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
} 

export {
    toShortDate
}