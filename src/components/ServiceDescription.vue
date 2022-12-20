<template>
  <div class="flex flex-col justify-center text-center mx-4">
    <h1 class="text-3xl mb-5">{{ service }}</h1>
    <p class="text-left text-gray-300">{{ serviceText }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serviceText: String,
    };
  },
  props: {
    // title: String,
    service: String,
  },
  mounted() {
    switch (this.service) {
      case "Vandkraftinvestering i Grønland":
        this.serviceText =
          "Folkene bag GreenLead har igennem de sidste 5 år arbejdet med at realisere vandkraftinvesteringer i Grønland. Det er i den tid blevet til vedtagelsen af 4 vandkraftværker i det grønlandsk parlament fra 0,2MW til 55 MW i effektstørrelse - en anlægspakke på ca. 3,1 mia. DKK. I Grønland er der katalogiseret 66 forskellige vandkraftpotentialer på den grønlandske vestkyst, med hydrologiske data tilbage fra 70'erne. Vi har et stort kendskab til disse potentialer, samt de mange forhold som man bør gøre sig bekendt med i forhold til geografi og geologi, gletcherpåvirkning, søkabler og transmission, befolkningsnærhed, afsætningsmuligheder, lokale kompetencer til drift og sideindustri, og meget mere. ​ Yderlige har vi fra GreenLead stor kendskab til den politiske proces som ligger forud for undersøgelsestilladelser og udnyttelsestilladelser, samt hvordan dialogen omkring Impact Benefit Analysis (IBA) gribes an, så både Grønland og Investor opnår størst mulig sucess. Yderligere har vi drevet virksomhed og været borgere i Grønland i en lang årrække fra 2012 - 2021 hvorved vi har opnået stort kendskab til forretningsmiljøet, kulturen, lokale kontakter, logistik, issituationer, det grønlandske tærren og meget mere som er helt essensielt for at drive virksomhed i Grønland. ​ Vi kan hjælpe din virksomhed med at finde det rigtige vandkraftprojekt, designe en aftager af energien, og sikre økonomi og bæredygtighed i dit projekt. ​ Grønland er på mange måder som Klondike var i 1896 før the Gold rush - fyldt med fantastiske økonomiske muligheder. Grønland er blot ikke opdaget endnu på den store verdensscene.";
        break;

      default:
        break;
    }
  },
};
</script>
<style lang=""></style>
