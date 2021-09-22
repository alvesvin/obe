<script></script>
<main id="sommes-nous">
    <h2 class="text-center title">Où Sommes-Nous</h2>
    <div class="d-flex justify-content-center">
        <div class="map">
            <div class="cities">
                <p id="paris">PARIS</p>
                <p id="lyon">LYON</p>
                <p id="marselha">MARSEILLE</p>
                <p id="toulouse">TOULOUSE</p>
            </div>
        </div>
        <h1>dasdasdasd</h1>
    </div>
</main>
<style>
main{
    background-color:rgb(255, 245, 223);
    padding-top: 8vh;
}
.title{
    margin-bottom: 5vw;
}
.map{
    background-image: url("../assets/illustrations/france-map.png");
    background-size: 100% 100%;
    width: 40vw;
    height: 40vw;
}
p{
    position: relative;
    font-size: 1.7vw;
    font-weight: 600;
    transition: 0.3s ease;
    width: fit-content;
}
p:hover{
    cursor: pointer;
    color: #000;
    transform: scale(1.09);
    transition: 0.3s ease;
}
#paris{
    margin-left: 48%;
    margin-top: 30%;
}
#lyon{
    margin-left: 63%;
    margin-top: 20%;
}
#marselha{
    margin-left: 64%;
    margin-top: 15%;
}
#toulouse{
    margin-left: 28%;
    margin-top: -12%;
}

@media screen and (min-width: 1280px) {
    .map{
        width: 480px;
        height: 480px;
    }
    p{
        font-size: 21.8px;
    }
}

</style>
