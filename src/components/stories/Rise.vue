<template>
    <div class="section-history-item">
        <SectionTitle :src="Stormwind" borderColor="var(--accent-color)">Rise of the Lich King</SectionTitle>
        <SectionText paragraph>
            Arthas was inducted into the Knights of the Silver Hand at the young age of 19. The
            ceremony was held in the Cathedral of Light in Stormwind City, and was attended by
            prominent figures such as Genn Greymane, Thoras Trollbane, Daelin Proudmoore, and Jaina
            Proudmoore, whom Arthas had not seen since childhood. Archbishop Alonsus Faol led the
            initiation process, which included four of the five original paladins: Uther, Tirion
            Fordring, Saidan Dathrohan, and Gavinrad the Dire. Arthas was presented with the holy
            warhammer called Inv hammer 04 [Light's Vengeance] by Gavinrad and had the ceremonial
            silver plates placed upon his shoulders by Uther. While in Stormwind, Arthas visited the
            newly crowned king, Varian Wrynn, and sparred with him while recounting old memories. He
            also met the recently born prince, Anduin Wrynn, who gripped his finger.
        </SectionText>
        <div class="section-history-img">
            <figure>
                <img src="/src/assets/images/elven-forest.webp" />
                <figcaption>Elven Forest</figcaption>
            </figure>
        </div>
        <div>
            <SectionText>
                Arthas once visited Durnholde Keep and saw the famous orc gladiator Thrall. He
                stayed in the keep during the night and Aedelas sent Taretha to Arthas' chamber to
                please him. However, Arthas only talked with her and he noticed that Taretha
                reminded him of Jaina Proudmoore, whom he had begun to fall in love with. Later on,
                he rode on Invincible only to have an accident which caused Invincible to suffer a
                mortal wound. Arthas had no other option than to kill his beloved steed in order to
                stop its suffering, an act which would haunt him for the rest of his life.
            </SectionText>

            <SectionDivider />
            <SectionText>
                Arthas once stayed in Dalaran so he could spend time with Jaina. During his visit,
                Antonidas organized a banquet for Arthas and Kael'thas, who happened to be there at
                the same time. At the banquet, Arthas and Antonidas spoke of the orcs' strange
                lethargy, Terenas's health, Stormwind, the young Anduin Wrynn, and Arthas'
                relationship status. Kael'thas, who was also fond of Jaina, was upset when he saw
                Arthas kissing her.
            </SectionText>
            <SectionDivider />
            <SectionText>
                Having grown into a strong, confident young man, Arthas was headstrong and somewhat
                arrogant, though none could dispute his bravery and tenacity. Arthas came to be
                considered one of the finest swordsmen in Lordaeron, and was famed for
                counterattacking and defeating the forest troll warbands of Zul'Aman when they began
                raiding the settlements along the border of Quel'Thalas.
            </SectionText>
        </div>
        <div class="section-history-img">
            <figure>
                <img src="/src/assets/images/arthas-crown-prince.jpg" />
                <figcaption>Arthas</figcaption>
            </figure>
        </div>
        <SectionText>
            Later on, Arthas invited Jaina to Lordaeron to celebrate the festivals of Noblegarden
            and Hallow's End. During that time Arthas revealed that he was courting Jaina to the
            public. Eventually, however, Arthas began to question whether the two of them were ready
            to be together. Arthas abruptly ended the relationship so Jaina could focus on her
            magical studies in Dalaran and Arthas could focus on his commitments to Lordaeron.
        </SectionText>
        <SectionDivider />
        <SectionText>
            During the trial of Tirion Fordring in Stratholme, Arthas served as one of the four
            jurors. Like the other judges, he was shocked when Tirion admitted his guilt, which led
            the paladin to his excommunication and his exile.
        </SectionText>
    </div>
</template>

<script setup>
import SectionText from "/src/components/section/SectionText.vue";
import SectionTitle from "/src/components/section/SectionTitle.vue";
import SectionDivider from "/src/components/section/SectionDivider.vue";
import Stormwind from "/src/assets/images/section/rise/stormwind.webp";
</script>
