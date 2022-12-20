<template lang="">
  <div class="flex flex-col justify-center items-center">
    <h1 class="my-10">Løsninger og services</h1>

    <div class="grid md:grid-cols-2 gap-10">
      <router-link
        :to="{
          name: 'Service',
          params: {
            service: items[0].title,
            description: items[0].description,
          },
        }"
        service="items[0].title"
        tag="button"
      >
        <ServiceCard
          title="Vandkraftinvestering i Grønland"
          description="INVESTORRÅDGIVNING, TEKNISK-ØKONOMISK RÅDGIVNING, HJÆLP TIL AT FORSTÅ DET POLITISKE MILJØ"
          service="INVESTORRÅDGIVNING, TEKNISK-ØKONOMISK RÅDGIVNING, HJÆLP TIL AT FORSTÅ DET POLITISKE MILJØ

Folkene bag GreenLead har igennem de sidste 5 år arbejdet med at realisere vandkraftinvesteringer i Grønland. Det er i den tid blevet til vedtagelsen af 4 vandkraftværker i det grønlandsk parlament fra 0,2MW til 55 MW i effektstørrelse - en anlægspakke på ca. 3,1 mia. DKK.

I Grønland er der katalogiseret 66 forskellige vandkraftpotentialer på den grønlandske vestkyst, med hydrologiske data tilbage fra 70'erne. Vi har et stort kendskab til disse potentialer, samt de mange forhold som man bør gøre sig bekendt med i forhold til geografi og geologi, gletcherpåvirkning, søkabler og transmission, befolkningsnærhed, afsætningsmuligheder, lokale kompetencer til drift og sideindustri, og meget mere.

​

Yderlige har vi fra GreenLead stor kendskab til den politiske proces som ligger forud for undersøgelsestilladelser og udnyttelsestilladelser, samt hvordan dialogen omkring Impact Benefit Analysis (IBA) gribes an, så både Grønland og Investor opnår størst mulig sucess.

 

Yderligere har vi drevet virksomhed og været borgere i Grønland i en lang årrække fra 2012 - 2021 hvorved vi har opnået stort kendskab til forretningsmiljøet, kulturen, lokale kontakter, logistik, issituationer, det grønlandske tærren og meget mere som er helt essensielt for at drive virksomhed i Grønland. 

​

Vi kan hjælpe din virksomhed med at finde det rigtige vandkraftprojekt, designe en aftager af energien, og sikre økonomi og bæredygtighed i dit projekt.

​

Grønland er på mange måder som Klondike var i 1896 før the Gold rush - fyldt med fantastiske økonomiske muligheder. Grønland er blot ikke opdaget endnu på den store verdensscene.
"
        />
      </router-link>
      <ServiceCard
        title="Hydropower investment in Greenland"
        description="INVESTOR GUIDANCE, TECHNICAL-ECONOMIC ANALYSIS, NAVIGATING THE POLITICAL ENVIRONMENT"
      />
      <ServiceCard
        title="Hydropower investment in Greenland"
        description="INVESTOR GUIDANCE, TECHNICAL-ECONOMIC ANALYSIS, NAVIGATING THE POLITICAL ENVIRONMENT"
      />
      <ServiceCard
        title="Hydropower investment in Greenland"
        description="INVESTOR GUIDANCE, TECHNICAL-ECONOMIC ANALYSIS, NAVIGATING THE POLITICAL ENVIRONMENT"
      />
      <ServiceCard
        title="Hydropower investment in Greenland"
        description="INVESTOR GUIDANCE, TECHNICAL-ECONOMIC ANALYSIS, NAVIGATING THE POLITICAL ENVIRONMENT"
      />
      <ServiceCard
        title="Hydropower investment in Greenland"
        description="INVESTOR GUIDANCE, TECHNICAL-ECONOMIC ANALYSIS, NAVIGATING THE POLITICAL ENVIRONMENT"
      />
    </div>

    <h1 class="mt-10">Så du ikke hvad du ledte efter?</h1>
    <GetInTouchButton />
  </div>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";
import GetInTouchButton from "./GetInTouchButton.vue";
export default {
  components: { ServiceCard, GetInTouchButton },
  data() {
    return {
      items: [
        {
          title: "Vandkraftinvestering i Grønland",
          undertitle:
            "INVESTORRÅDGIVNING, TEKNISK-ØKONOMISK RÅDGIVNING, HJÆLP TIL AT FORSTÅ DET POLITISKE MILJØ",
          description:
            "Folkene bag GreenLead har igennem de sidste 5 år arbejdet med at realisere vandkraftinvesteringer i Grønland. Det er i den tid blevet til vedtagelsen af 4 vandkraftværker i det grønlandsk parlament fra 0,2MW til 55 MW i effektstørrelse - en anlægspakke på ca. 3,1 mia. DKK. Yderlige har vi fra GreenLead stor kendskab til den politiske proces som ligger forud for undersøgelsestilladelser og udnyttelsestilladelser, samt hvordan dialogen omkring Impact Benefit Analysis (IBA) gribes an, så både Grønland og Investor opnår størst mulig sucess. Yderligere har vi drevet virksomhed og været borgere i Grønland i en lang årrække fra 2012 - 2021 hvorved vi har opnået stort kendskab til forretningsmiljøet, kulturen, lokale kontakter, logistik, issituationer, det grønlandske tærren og meget mere som er helt essensielt for at drive virksomhed i Grønland. Vi kan hjælpe din virksomhed med at finde det rigtige vandkraftprojekt, designe en aftager af energien, og sikre økonomi og bæredygtighed i dit projekt. Grønland er på mange måder som Klondike var i 1896 før the Gold rush - fyldt med fantastiske økonomiske muligheder. Grønland er blot ikke opdaget endnu på den store verdensscene.",
        },
      ],
    };
  },
};
</script>
