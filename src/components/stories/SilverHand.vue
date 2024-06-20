<template>
    <div class="section-history-item">
        <SectionTitle>Knight of the Silver Hand</SectionTitle>
        <SectionText>
            Troubles began to stir in Lordaeron. Orcs broke free of their internment camps, and
            there was distressing news of a plague that had gripped the northlands. Arthas and Uther
            were sent to Strahnbrad to defend the town from orcish raids. The young prince defeated
            the black drake Searinox to retrieve its heart for the dwarf Feranor Steeltoe to forge
            into an Orb of Fire. Arthas used this magical item to help defeat the orcs and kill the
            Blackrock clan blademaster leading the raids.
        </SectionText>
        <SectionSubtitle> Plague of Undeath </SectionSubtitle>
        <SectionText>
            Weeks later a more vile threat arose in the form of the Plague of Undeath. Jaina and
            Captain Falric were sent to help Arthas, now 24 years old, investigate the strange
            disease. They fought against the undead at an infested granary, then encountered the
            necromancer Kel'Thuzad in the town of Brill and pursued him to Andorhal. Kel'Thuzad had
            already infected the stored grain in Andorhal and shipped it out to outlying villages.
            Before Arthas killed him, Kel'Thuzad spoke of Mal'Ganis, a nathrezim demon who led the
            Scourge. Jaina and Arthas traveled north to confront him in Stratholme.
        </SectionText>
        <SectionText>
            Along the way, Arthas and Jaina stopped at Hearthglen where they hoped to rest. Instead,
            they were warned of an approaching army of undead. Arthas ordered Jaina to find Uther
            and seek his aid while he remained behind to defend the town. To his horror, Arthas
            discovered that the plague was not merely a means of mass murder, but rather the means
            of turning innocent townsfolk into undead creatures. Arthas' forces barely held out and
            were on the verge of defeat when Uther arrived with reinforcements and saved the
            village.
        </SectionText>
        <SectionText>
            While traveling to Stratholme, Arthas was met by the enigmatic prophet Medivh. He gave
            him the same advice he gave Terenas — to travel west to Kalimdor, as fighting the undead
            would speed up the delivery of Lordaeron to them. Arthas argued that his place was with
            his people, and vowed that he would not abandon them. Jaina suggested that the prophet
            might be right, but Arthas paid her no heed and continued to Stratholme
        </SectionText>
        <SectionFigure
            :src="Kelthuzad"
            caption="Arthas and Jaina encountering Kel'Thuzad"
        />
        <SectionSubtitle>Culling of Stratholme</SectionSubtitle>
        <SectionText>
            When he arrived at Stratholme, Arthas found that the grain had already been distributed.
            He knew the people of Stratholme would soon become undead, and ordered Uther and his
            knights to purge the entire city. Horrified, Uther rebuked him by saying he would not
            follow such an order even if Arthas were already king. Proclaiming that Uther had
            committed treason, Arthas relieved him of his command and suspended his paladins from
            service. Several soldiers, such as Sir Thomas Thomson, left with Uther — as did Jaina —
            while those who remained loyal to Arthas joined him in slaughtering the infected
            citizens.
        </SectionText>
        <SectionText>
            As Arthas began to slay the citizens of Stratholme, he was met by Mal'Ganis himself, who
            was working to claim their souls. Arthas sought to destroy them before Mal'Ganis could
            reach them, and eventually demanded a final showdown with the dreadlord. Mal'Ganis
            slipped away, however, vowing to meet him in Northrend. Arthas then set fire to
            Stratholme, and those fires burn to this day.
        </SectionText>
        <SectionFigure
            :src="Stratholme"
            caption="Arthas starting to kill the citizens"
        />
    </div>
</template>

<script setup>
import SectionText from "../section/SectionText.vue";
import SectionTitle from "../section/SectionTitle.vue";
import SectionSubtitle from "../section/SectionSubtitle.vue";
import SectionFigure from "../section/SectionFigure.vue";

import Kelthuzad from "/src/assets/images/kelthuzad.webp";
import Stratholme from "/src/assets/images/stratholme.webp";
</script>
