export default class Post {
    constructor(titlePost, tetxPost, img) {
        this.title = titlePost;
        this.text = tetxPost;
        this.img = img;
        this.date = new Date();
    }

    toString () {
        return `<h2> ${this.title} </h2> 
        <p> ${this.text} </p>
        <img src="${this.img}"> </img>
        <p> ${this.date.toJSON()} </p>`;
    }
}