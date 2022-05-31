<script>

  const participants = [
    './participants-logos/Agence nationale de la recherche, ANR (France).jpeg',
    './participants-logos/Deutsche Forschungsgemeinschaft, DFG (Germany).png',
    './participants-logos/Fonds zur Förderung der wissenschaftlichen Forschung, FWF (Austria) .png',
    './participants-logos/Forskningsråd, RCN (Norway) .png',
    './participants-logos/Fundação para a Ciência e Tecnologia, FCT (Portugal) .jpeg',
    './participants-logos/Research Foundation Flanders - FWO.png',
    './participants-logos/NWO logo - RGB.jpg',
    './participants-logos/Romania Executive Agency for Higher Education, Research, Development and Innovation Funding of Romania, UEFISCDI (Romania) .png',
    './participants-logos/UK Research and Innovation, UKRI (UK) .png',
  ]
</script>


<div class="flex flex-wrap gap-8 container mx-auto my-20">
  <h2 class="text-2xl font-medium mb-10">Participants so far</h2>
  <div class="flex flex-wrap gap-8 container mx-auto">
    {#each participants as logo}
      <img class="max-h-[60px]" src="{logo}" alt="{logo}"/>
    {/each}
  </div>
</div>









