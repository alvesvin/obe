<script></script>
<main id="histoire">
    <h2 class="text-center title">Our manifest and history.</h2>
    <div class="content d-flex">
        <a href="http://192.168.25.9:5000/">
            <h3 class="text-center">Simplement audacieux.</h3>
            <div class="quad history">
                <img class="bottle"src="./assets/illustrations/bottle-draw.png" draggable="false" alt="">
            </div>
        </a>
        <a href="http://192.168.25.9:5000/">
            <h3 class="text-center">L'Histoire de la marque.</h3>
            <div class="quad manifest">
                <img class="th-ga"src="./assets/illustrations/th-ga.png" draggable="false" alt="">
            </div>
        </a>
    </div>
</main>
<style scoped>
main{
    min-height: 100vh;
    margin: 0 !important;
    background-color: rgb(19, 19, 19);
    color: #dfe6e9; 
    padding-top: 8vh;
}
.text-center{
    color: #dfe6e9;
}
.title{
    margin-bottom: 8vw;
    color: #dfe6e9;
}
.title::selection{
    background-color:rgb(65, 65, 65);
}
.content{
    height: 50vh;
    justify-content: center;
    align-items: center;
}
.quad{
    display: flex;
    justify-content: center;
    align-items:center;
    width: 33vw;
    height: 30vw;
    background-color: #dfe6e9;
    border-radius: 10px;
    margin: 0 2vw 0 2vw;
    transition: ease 0.3s;
}
.quad:hover{
    width: 35vw;
    height: 32vw;
    transition: ease 0.3s;
}
.th-ga{
    width: 32vw;
}
.bottle{
    width: 34vw;
}
@media screen and (min-width: 1440px) {
    .quad{
        width: 480px;
        height: 450px;
    }
    .th-ga{
        width: 466px;
    }
    .bottle{
        width: 495px;
    }
    .quad:hover{
        width: 500px;
        height: 468px;
    }
}
@media screen and (max-width: 1000px) {
    .content{
        height:auto;
        flex-direction: column !important;
        align-items: center;
    }
    .quad{
        margin-bottom: 5vh;
        width: 60vw;
        height: 55vw;
    }
    .quad:hover{
        width: 65vw;
        height: 57vw;
    }
    .th-ga{
        width: 60vw;
    }
    .bottle{
        width: 60vw;
    }
    h3{
        font-size:4vw;
    }
    .title{
        margin-bottom: 5vh;
    }
}
</style>