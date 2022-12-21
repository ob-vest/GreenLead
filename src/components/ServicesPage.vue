<template lang="">
  <div class="flex flex-col justify-center items-center">
    <TitleWithUnderline class="mb-10" title="Løsninger og services" />

    <div class="grid md:grid-cols-2 gap-10">
      <router-link
        :to="{
          name: 'Service',
          params: {
            service: items[0].title,
          },
        }"
        service="items[0].title"
        tag="button"
      >
        <ServiceCard
          title="Vandkraftinvestering i Grønland"
          description="INVESTORRÅDGIVNING, TEKNISK-ØKONOMISK RÅDGIVNING, HJÆLP TIL
        AT FORSTÅ DET POLITISKE MILJØ"
        />
      </router-link>
      <router-link
        :to="{
          name: 'Service',
          params: {
            service: items[1].title,
          },
        }"
        service="items[0].title"
        tag="button"
      >
        <ServiceCard
          title="Varmebatterier til procesanlæg og varmecentraler"
          description="Elektrificering af gas og olie, via magnesiumsten i varmebatteriløsninger"
        />
      </router-link>
      <router-link
        :to="{
          name: 'Service',
          params: {
            service: items[2].title,
          },
        }"
        service="items[0].title"
        tag="button"
      >
        <ServiceCard
          title="Energirådgivning og optimering"
          description="HELHEDSLØSNINGER MED SOL, VIND, ISOLERING & ENERGI STORAGE "
        />
      </router-link>
      <router-link
        :to="{
          name: 'Service',
          params: {
            service: items[3].title,
          },
        }"
        service="items[0].title"
        tag="button"
      >
        <ServiceCard
          title="Forsyningsrådgivning"
          description="PRÆCIS RÅDGIVNING MÅLRETTET FORSYNGSSELSKABER"
        />
      </router-link>
      <router-link
        :to="{
          name: 'Service',
          params: {
            service: items[4].title,
          },
        }"
        service="items[0].title"
        tag="button"
      >
        <ServiceCard
          title="Nationale energisystemer"
          description="NATIONALE, SAMFUNDSØKONOMISKE ANALYSER"
        />
      </router-link>
      <router-link
        :to="{
          name: 'Service',
          params: {
            service: items[5].title,
          },
        }"
        service="items[0].title"
        tag="button"
      >
        <ServiceCard
          title="Projektudvikling til den grønne omstilling"
          description="ENERGISYSTEMER TIL FORSYNING OG INDUSTRI"
        />
      </router-link>
    </div>

    <h1 class="mt-10 font-bold">Fandt du ikke hvad du ledte efter?</h1>
    <GetInTouchButton />
  </div>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";
import GetInTouchButton from "./GetInTouchButton.vue";
import TitleWithUnderline from "./TitleWithUnderline.vue";
export default {
  components: { ServiceCard, GetInTouchButton, TitleWithUnderline },
  data() {
    return {
      items: [
        {
          title: "Vandkraftinvestering i Grønland",
        },
        {
          title: "Varmebatterier til procesanlæg og varmecentraler",
        },
        {
          title: "Energirådgivning og optimering",
        },
        {
          title: "Forsyningsrådgivning",
        },
        {
          title: "Nationale energisystemer",
        },
        {
          title: "Projektudvikling til den grønne omstilling",
        },
      ],
    };
  },
};
</script>
