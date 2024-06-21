<template>
    <div class="section-history-item">
        <SectionTitle>Champion of the Lich King</SectionTitle>
        <SectionText paragraph>
            In Northrend, Arthas became the first of the Lich King's death knights. He was given a
            suit of saronite armor, and slew nearly all of his own men before raising them as
            undead. Some among them, notably Falric, Marwyn and Thassarian, were raised as death
            knights in Arthas' service.
        </SectionText>
        <SectionSubtitle>Betrayal</SectionSubtitle>
        <SectionFigure :src="Homecoming" caption="Being awaited by his father">
            Terenas: Ah, my son. I knew you would be victorious. The whispers through the blade
            speak to Arthas.
        </SectionFigure>
        <SectionText
            >Arthas returned to Lordaeron months later, and the kingdom rejoiced at the return of
            its champion. Flanked by Falric and Marwyn, Arthas entered the imperial chamber and
            knelt before the throne. After telling his father that he no longer needed to bear the
            weight of his crown, Arthas walked up to Terenas and ran Frostmourne through his heart.
            The king's bloodied, broken crown remains lost to this day. As he drew Frostmourne,
            Arthas remembered the words of his old friend Varian describing his own father and king
            Llane being stabbed in the heart.</SectionText
        >
        <SectionFigure :src="Betrayal" caption="After the murder">
            Terenas: What is this? What are you doing, my son? <br />
            Arthas: Succeeding you, Father... This kingdom shall fall, and from the ashes shall
            arise a new order that will shake the very foundations of the world.
        </SectionFigure>

        <SectionText>
            Arthas then unleashed the Scourge upon the Capital City. He soon found Vivian, wife of
            the fallen hero Killoren. Sensing a conflict within Thassarian, Arthas ordered
            Thassarian to kill Vivian - his mother - in order to prove his loyalty.
        </SectionText>
        <SectionDivider/>
        <SectionText>
            Leaving Falric and Marwyn to oversee his forces in the city, Arthas ran to the Balnir
            Farmstead. There he used his necromantic powers to raise his faithful steed Invincible
            into undeath, allowing it to serve as his mount once again.
        </SectionText>

        <SectionText>
            A few days later, Arthas appeared in Vandermar Village at the bidding of his new master,
            the Lich King. There he met Tichondrius the Darkener, a dreadlord like Mal'Ganis.
            Thinking that the dreadlord was Mal'Ganis out for revenge, Arthas immediately threatened
            him, only to discover that this dreadlord had come to congratulate Arthas for his
            efforts. When spoken to Arthas said he no longer felt remorse for any of his actions,
            though deep in his heart he knew this was a lie. Tichondrius explained that the sword
            was designed to steal souls, and that Arthas' own soul was the first one it had claimed.
        </SectionText>

        <SectionDivider/>

        <SectionText>
            Tichondrius tasked Arthas with gathering the members of the vile Cult of the Damned that
            were hiding in Vandermar, learning that Kel'Thuzad had expected him, much to his
            surprise. They aided him with their magical abilities as he traveled to Andorhal where
            he was to recover Kel'Thuzad's corpse. Arthas initially asked as to why they couldn't
            reanimate him on the spot, only to be informed by a cultist that a being like Kel'Thuzad
            required a powerful energy source. He confronted the paladin guarding the crypt,
            Gavinrad the Dire, who had given Arthas his holy warhammer at his induction ceremony
            into the Silver Hand. After killing Gavinrad, he recovered the remains of the
            necromancer. This brought Kel'Thuzad's ghost into being, and he secretly instructed
            Arthas not to trust the dreadlords. Arthas quietly contemplated this.
        </SectionText>

        <SectionDivider/>

        <SectionText>
            Kel'Thuzad's remains were badly decomposed and needed to be taken to the mystical
            Sunwell in Quel'Thalas to be revived. To ensure that the remains would survive the trip,
            Arthas was tasked with taking a special urn that was being held by the Knights of the
            Silver Hand. Arthas killed two paladins, Ballador the Bright and Sage Truthbearer, who
            both condemned Arthas' betrayal. He then faced Uther the Lightbringer, who explained
            that the urn held the ashes of his father, King Terenas. The two engaged in a duel with
            Uther initially having the upper hand, knocking Arthas down and sending Frostmourne
            flying from his hands. As Arthas awaited the killing blow, the sword seemed to find its
            own way into his hands and he was granted more power by the Lich King. The battle began
            to turn in Arthas' favor. Eventually, Uther, covered in blood from his wounds, fell to
            his knees and told Arthas he hoped there was a special place in hell waiting for him.
            Arthas replied that they would never know because he intended to live forever, then
            delivered the killing blow. He seized the urn and blasphemed his father's remains by
            throwing them, which suddenly swarmed on him with the wind, choking him and burning his
            eyes. Arthas had the remains of Kel'Thuzad placed within the urn, and then began the
            long journey to Quel'Thalas.
        </SectionText>
    </div>
</template>

<script setup>
import SectionText from "../section/SectionText.vue";
import SectionTitle from "../section/SectionTitle.vue";
import SectionSubtitle from "../section/SectionSubtitle.vue";
import SectionFigure from "../section/SectionFigure.vue";
import SectionDivider from "/src/components/section/SectionDivider.vue";

import Homecoming from "/src/assets/images/homecoming.webp";
import Betrayal from "/src/assets/images/betrayal.webp";
</script>
