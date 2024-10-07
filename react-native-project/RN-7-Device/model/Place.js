export default class Place {
    constructor(title, imageUrl, location){
        this.title = title;
        this.imageUrl = imageUrl;
        this.address = location.address;
        this.location = {lat : location.location.lat, lng : location.location.lng};
        this.id = new Date().toString() + Math.random().toString();
    }
}