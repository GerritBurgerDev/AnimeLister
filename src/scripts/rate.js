function ratingLevel(level) {
    for (i = 1; i <= 5; i++){
        id = 30+i;
        document.querySelector("#outlet > home-page").shadowRoot.querySelector("rate-anime").shadowRoot.querySelector("#\\"+id).setAttribute('src', 'assets/images/star.png');
    }
    if (level != 0){
        for (i = 1; i <= level; i++){
            id = 30+i;
            document.querySelector("#outlet > home-page").shadowRoot.querySelector("rate-anime").shadowRoot.querySelector("#\\"+id).setAttribute('src', 'assets/images/checked.png');
        }
    }
} 