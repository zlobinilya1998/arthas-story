<script setup>
import Video from "/src/components/shared/Video.vue";
</script>
<template>
    <div class="intro-video">
        <div class="info-card">
            <h3 class="arthas-title">Arthas Menethil</h3>
            <h4 class="arthas-title">The Lich King</h4>
        </div>
        <Video />
    </div>
    <div class="intro-background">
        <div class="intro-top" />
        <div class="intro-bottom" />
        <div class="intro-content">
            <img
                class="intro-content-img"
                src="https://static.wikia.nocookie.net/wowpedia/images/b/bc/Warcraft_III_Box_-_Arthas.jpg"
            />
            <div>
                <div class="intro-description">
                    Prince Arthas Menethil was born to King Terenas Menethil II and Queen Lianne
                    Menethil, four years before the start of the First War. The young prince grew up
                    in a time when the lands of Azeroth were ravaged by war, the Alliance was
                    crumbling, and darker clouds still loomed on the horizon. As a young child,
                    Arthas became best friends with Varian Wrynn and often sparred with him, though
                    Arthas was less experienced. He also watched as his future steed, Invincible,
                    grew up. As a youth, Arthas was trained in combat by Muradin Bronzebeard, the
                    brother of the dwarven king Magni Bronzebeard, and became an adept swordsman. At
                    the same time he learned the ways of the Light under the tutelage of Uther the
                    Lightbringer. He also developed an interest in Jaina Proudmoore when she was
                    staying in Lordaeron while on her way to Dalaran, where she would be studying.
                    Some time later, Terenas arranged a political marriage for Arthas' sister Calia
                    with Daval Prestor. Calia was distraught by the decision and hoped Arthas would
                    marry for love rather than politics.
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.info-card {
    position: absolute;
    top: 100px;
    right: 150px;
    max-width: 300px;
    padding: 20px;
}

.arthas-title {
    text-shadow: black 1px 0 10px;
    color: var(--main-color);
    letter-spacing: 0.1em;
    font-size: 3em;
    text-align: center;
    font-family: Folkard, sans-serif;
    margin: 0;
}

.arthas-description {
    font-family: Folkard, sans-serif;
}

.intro {
    &-video {
        position: relative;
        min-height: 100vh;
    }
    &-background {
        position: relative;
        padding: 5em 0;
        background-image: url("https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt68767eb2e400c81d/6527ba4ba954472098f3f1f1/Cloud_Desktop.jpg");
        @media (max-width: 600px){
            padding: 2em 0;
        }
    }
    &-top {
        position: absolute;
        top: -25px;
        width: 100%;
        height: 80px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt661008ac61a51d63/653018bbaf5c2fb7aca0cb0e/Border_1.png?format=webply&quality=70");
        
        @media (max-width: 600px){
            background-size: 200%;
            top: -45px;
        }
    }

    &-bottom {
        position: absolute;
        bottom: 0px;
        height: 20px;
        width: 100%;
        background-image: url("https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltf52d4b60a1a29098/border_bottom.png?format=webply&quality=70");
    }

    &-content {
        padding: 0 20px;
        display: flex;
        align-items: flex-start;
        gap: 20px;
        font-family: "Folkard", sans-serif;
        &-img {
            object-fit: cover;
            border-radius: 10px;
            border: 1px solid rgba(245, 182, 22, 0.5);
        }

        @media (max-width: 600px){
            padding: 0 1em;
            flex-direction: column;
            align-items: flex-start;

            &-img {
                max-width: 100px;
            }
        }
    }

    &-description {
        margin-top: 5px;
        font-size: 1.3em;
        letter-spacing: 0.1em;
    }
}
</style>
