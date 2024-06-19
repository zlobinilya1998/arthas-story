<template>
    <div>
        <div class="section-background">
            <div class="section-divider" />
            <div class="section-bottom" />
            <div class="section-content">
                <img
                    class="section-content-img"
                    src="https://static.wikia.nocookie.net/wowpedia/images/b/bc/Warcraft_III_Box_-_Arthas.jpg"
                />
                <div>
                    <div class="section-description">
                        Prince Arthas Menethil was born to King Terenas Menethil II and Queen Lianne
                        Menethil, four years before the start of the First War.[10] The young prince
                        grew up in a time when the lands of Azeroth were ravaged by war, the
                        Alliance was crumbling, and darker clouds still loomed on the horizon. As a
                        young child, Arthas became best friends with Varian Wrynn and often sparred
                        with him, though Arthas was less experienced. He also watched as his future
                        steed, Invincible, grew up. As a youth, Arthas was trained in combat by
                        Muradin Bronzebeard, the brother of the dwarven king Magni Bronzebeard, and
                        became an adept swordsman. At the same time he learned the ways of the Light
                        under the tutelage of Uther the Lightbringer. He also developed an interest
                        in Jaina Proudmoore when she was staying in Lordaeron while on her way to
                        Dalaran, where she would be studying. Some time later, Terenas arranged a
                        political marriage for Arthas' sister Calia with Daval Prestor. Calia was
                        distraught by the decision and hoped Arthas would marry for love rather than
                        politics.
                    </div>
                </div>
            </div>
        </div>

        <div class="section-history">
            <div></div>

            <div class="section-history-container">
                <div class="section-history-top">
                    <img height="175px" width="175px" src="/src/assets/images/lordaeron.png" />
                </div>
                <SectionTitle>Rise of the Lich King</SectionTitle>
                <SectionText>
                    Arthas was inducted into the Knights of the Silver Hand at the young age of 19.
                    The ceremony was held in the Cathedral of Light in Stormwind City, and was
                    attended by prominent figures such as Genn Greymane, Thoras Trollbane, Daelin
                    Proudmoore, and Jaina Proudmoore, whom Arthas had not seen since childhood.
                    Archbishop Alonsus Faol led the initiation process, which included four of the
                    five original paladins: Uther, Tirion Fordring, Saidan Dathrohan, and Gavinrad
                    the Dire. Arthas was presented with the holy warhammer called Inv hammer 04
                    [Light's Vengeance] by Gavinrad and had the ceremonial silver plates placed upon
                    his shoulders by Uther. While in Stormwind, Arthas visited the newly crowned
                    king, Varian Wrynn, and sparred with him while recounting old memories. He also
                    met the recently born prince, Anduin Wrynn, who gripped his finger.
                </SectionText>
                <div class="section-history-img">
                    <figure>
                        <img src="/src/assets/images/elven-forest.webp" />
                        <figcaption>Elven Forest</figcaption>
                    </figure>
                </div>
                <SectionText>
                    Arthas once visited Durnholde Keep and saw the famous orc gladiator Thrall. He
                    stayed in the keep during the night and Aedelas sent Taretha to Arthas' chamber
                    to please him. However, Arthas only talked with her and he noticed that Taretha
                    reminded him of Jaina Proudmoore, whom he had begun to fall in love with. Later
                    on, he rode on Invincible only to have an accident which caused Invincible to
                    suffer a mortal wound. Arthas had no other option than to kill his beloved steed
                    in order to stop its suffering, an act which would haunt him for the rest of his
                    life.
                </SectionText>

                <div class="divider" />
                <SectionText>
                    Arthas once stayed in Dalaran so he could spend time with Jaina. During his
                    visit, Antonidas organized a banquet for Arthas and Kael'thas, who happened to
                    be there at the same time. At the banquet, Arthas and Antonidas spoke of the
                    orcs' strange lethargy, Terenas's health, Stormwind, the young Anduin Wrynn, and
                    Arthas' relationship status. Kael'thas, who was also fond of Jaina, was upset
                    when he saw Arthas kissing her.
                </SectionText>
                <div class="divider" />
                <SectionText>
                    Having grown into a strong, confident young man, Arthas was headstrong and
                    somewhat arrogant, though none could dispute his bravery and tenacity. Arthas
                    came to be considered one of the finest swordsmen in Lordaeron, and was famed
                    for counterattacking and defeating the forest troll warbands of Zul'Aman when
                    they began raiding the settlements along the border of Quel'Thalas.
                </SectionText>
                <div class="section-history-img">
                    <figure>
                        <img src="/src/assets/images/arthas-crown-prince.jpg" />
                        <figcaption>Arthas</figcaption>
                    </figure>
                </div>
                <SectionText>
                    Later on, Arthas invited Jaina to Lordaeron to celebrate the festivals of
                    Noblegarden and Hallow's End. During that time Arthas revealed that he was
                    courting Jaina to the public. Eventually, however, Arthas began to question
                    whether the two of them were ready to be together. Arthas abruptly ended the
                    relationship so Jaina could focus on her magical studies in Dalaran and Arthas
                    could focus on his commitments to Lordaeron.
                </SectionText>
                <div class="divider" />
                <div class="section-history-text">
                    During the trial of Tirion Fordring in Stratholme, Arthas served as one of the
                    four jurors. Like the other judges, he was shocked when Tirion admitted his
                    guilt, which led the paladin to his excommunication and his exile.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SectionText from "./SectionText.vue"
import SectionTitle from "./SectionTitle.vue"
</script>

<style lang="scss" scoped>
.section-background {
    position: relative;
    padding: 50px 0;
    background-image: url("https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt68767eb2e400c81d/6527ba4ba954472098f3f1f1/Cloud_Desktop.jpg");
}
.section-divider {
    position: absolute;
    top: -25px;
    width: 100%;
    height: 80px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt661008ac61a51d63/653018bbaf5c2fb7aca0cb0e/Border_1.png?format=webply&quality=70");
}

.section-bottom {
    position: absolute;
    bottom: 0px;
    height: 20px;
    width: 100%;
    background-image: url("https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltf52d4b60a1a29098/border_bottom.png?format=webply&quality=70");
}

.section-content {
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    font-family: Folkard, sans-serif;
    &-img {
        object-fit: cover;
        border-radius: 10px;
        border: 1px solid rgba(245, 182, 22, 0.551);
    }
}

.section-description {
    margin-top: 5px;
}

.section-history {
    position: relative;
    display: flex;
    padding: 0 20px 20px;
    background-position: top;
    background-image: url("https://assets.worldofwarcraft.blizzard.com/static/components/Pane/Pane-dirtDark.ea235926d6487091ac2d6786fd7d2615.jpg");
    &-title {
        color: gold;
        font-weight: 500;
        font-size: 1.5em;
        margin-bottom: 20px;
    }
    &-top {
        margin: 10px 0 50px;
        img {
            margin: 0 auto;
        }
    }
    &-img {
        margin: 25px 0;
        img {
            outline: 1px solid goldenrod;
        }
    }
    &-container {
        max-width: 900px;
        margin: 0 auto;
        font-size: 1em;
        font-family: "Folkard", sans-serif;
        letter-spacing: 0.1em;
        padding-left: 10px;
        .divider {
            border-top: 1px solid rgba(255, 217, 0, 0.25);
            margin: 10px auto;
        }
    }
}
</style>
