class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.classList.add('card');

        const cardLeft = document.createElement('div');
        cardLeft.classList.add('card__left');

        const author = document.createElement('span');
        author.textContent = this.getAttribute('author')? `By ${this.getAttribute('author')}` : 'By Anonymous';

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link');

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('description');

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.classList.add('card__right');

        const newsImg = document.createElement('img');
        newsImg.src = this.getAttribute('image') || './assets/foto-default.jpg';

        cardRight.appendChild(newsImg);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style() {
        const style = document.createElement('style');
        style.textContent = `
        .card {
            display: flex;
            flex-direction: row;
            border: 2px solid gray;
            box-shadow: 9px 9px 27px 0px gray;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > span {
            font-weight: 500;
        }
        
        .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            text-decoration: none;
            color: black;
            font-weight: bold;
        }
        
        .card__left > p {
            color: gray;
        }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);