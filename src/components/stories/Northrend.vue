<template>
    <div class="section-history-item">
        <SectionTitle>Northrend</SectionTitle>
        <SectionText paragraph>
            Arthas followed Mal'Ganis with a detachment of his troops. They arrived a month later in
            Daggercap Bay. As they searched for a proper place to set up camp, Arthas' men came
            under gunfire before being recognized by the dwarven explorers' guild. Arthas was
            shocked to come upon his good friend and former mentor Muradin Bronzebeard. At first,
            Muradin thought Arthas was leading a rescue party sent to save his men, who had been
            besieged by the undead as they searched for the runeblade Frostmourne, but Arthas
            admitted it was mere coincidence. Together they destroyed the nearby undead camp, but
            there was still no sign of Mal'Ganis.
        </SectionText>
        <SectionDivider secondary/>
        <SectionText>
            As Muradin and Arthas continued their search for Frostmourne, an emissary from Lordaeron
            arrived in a zeppelin and spoke to Captain Luc Valonforth. He bore orders from Uther and
            Terenas, instructing Arthas and his men to return home. When Arthas returned to his
            base, the men had abandoned their posts and were making their way through the forest
            towards their ships. Arthas had no intention of leaving before Mal'Ganis was destroyed.
            With the help of some indigenous mercenaries, he managed to reach and burn his ships
            before his men got to them. When his men arrived, Arthas betrayed the mercenaries by
            accusing them of destroying the ships. To Muradin's disgust, they were promptly killed.
            Arthas told his men they had no means of going home, and the only way they were leaving
            Northrend was through victory.
        </SectionText>
        <SectionSubtitle>Frostmourne</SectionSubtitle>
        <SectionText>
            Arthas and his troops continued to press on to Draktharon Keep in search of Frostmourne.
            As he arrived, Mal'Ganis appeared to him, and foretold his death. Arthas went to search
            for Frostmourne with Muradin, leaving his captain to defend the camp.
        </SectionText>
        <SectionFigure :src="Frostmourne" caption="Claming Frostmourne" />
        <SectionText>
            Using an ancient waygate Arthas, Muradin, and a small group of men traveled to the
            vicinity of the fabled runeblade. Arthas was soon confronted by the Guardian, who tried
            to keep him from Frostmourne, apparently for his own protection. The Guardian fell, and
            Arthas and Muradin claimed their prize. Muradin, reading an inscription, reported that
            the blade was cursed. He pleaded with Arthas to forget his desire for vengeance and lead
            his men home, but Arthas was adamant. Arthas asked the spirits of the cavern for the
            sword to be released from its icy prison, proclaiming that he would "give anything or
            pay any price, if only they will help him save his people". When the weapon broke free,
            Muradin was struck by a rogue shard of ice, rendering him unconscious. Arthas moved to
            help Muradin, but was dissuaded by the call of Frostmourne in his mind. Arthas discarded
            his holy warhammer, Light's Vengeance, then picked Frostmourne up and returned to his
            base, leaving Muradin for dead. With Frostmourne in hand, Arthas defeated Mal'Ganis's
            army, destroyed his base, and finally confronted the demon.
        </SectionText>
        <SectionFigure :src="Malganis" caption="Arthas strike Mal'Ganis " />
        <SectionText>
            Mal'Ganis told him that the voice he was now hearing was that of the Lich King and asked
            what he was telling him. Arthas replied that voice was instructing him to destroy
            Mal'Ganis, much to the dreadlord's surprise. After slaying the dreadlord, Arthas fled
            into the frozen north, leaving his troops to fend for themselves. Arthas soon lost the
            last remnants of his sanity. Arthas was unaware that Mal'Ganis had survived their
            encounter.
        </SectionText>
    </div>
</template>

<script setup>
import SectionText from "../section/SectionText.vue";
import SectionTitle from "../section/SectionTitle.vue";
import SectionSubtitle from "../section/SectionSubtitle.vue";
import SectionFigure from "../section/SectionFigure.vue";
import SectionDivider from "/src/components/section/SectionDivider.vue";

import Frostmourne from "/src/assets/images/frostmourne.webp";
import Malganis from "/src/assets/images/malganis.webp";
</script>
