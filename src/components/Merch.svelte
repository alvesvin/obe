<main id="merch">
    <h2 class="text-center">Rejoins le Ôbe Gang!</h2>
    <h2 class="text-center title">#ÔBEGANG</h2>
    <div class="content d-flex">
        <a href="http://192.168.25.9:5000/">
            <div class="quad first"></div>
            <h3 class="text-center">Obê sweatshirt</h3>
            <p class="text-center">€40,00</p>
        </a>
        <a href="http://192.168.25.9:5000/">
            <div class="quad second"></div>
            <h3 class="text-center">Obê sweatshirt 2</h3>
            <p class="text-center">€40,00</p>
            
        </a>
    </div>
</main>

<style scoped>
main{
    min-height: 100vh;
    height:fit-content;
    padding-top: 8vh;
    padding-bottom: 2vw;
}
.title{
    margin-bottom: 8vw;
}
.text-center::selection{
    background-color: rgb(255, 232, 157);
}
.content{
    justify-content: center;
    align-items: center;
}
.quad{
    transition: .8s;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 29vw;
    height: 29vw;
    margin: 0 4vw 1vw 4vw;
}
.quad:hover{
    transition: .4s;
}
.first{
    background-image: url("../assets/merch/clothing-1-1.png");
}
.first:hover{
    background-image: url("../assets/merch/clothing-1-2.png");
}
.second{
    background-image: url("../assets/merch/clothing-2-1.png");
}
.second:hover{
    background-image: url("../assets/merch/clothing-1-2.png");
} 
h3{
    color: #333333;
}
p{
    color: #333333;
}
@media screen and (min-width: 1440px) {
    .quad{
        width: 440px;
        height: 440px;
    }
}
@media screen and (max-width: 1000px) {
    .content{
        height:auto;
        flex-direction: column !important;
        align-items: center;
    }
    .quad{
        width: 60vw;
        height: 60vw;
    }
    a{
        margin-bottom: 5vh;
    }
    .title{
        margin-bottom: 5vh;
    }
}
</style>