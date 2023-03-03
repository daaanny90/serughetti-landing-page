<script>
  export let text;
  export let name;
</script>
<section class="overflow-hidden bg-gray-50 py-12 md:py-20 lg:py-24">
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="relative">
      <blockquote class="mt-10">
        <div class="mx-auto max-w-3xl text-center text-xl font-medium leading-9 text-gray-900">
          <p>&ldquo;{text}&rdquo;</p>
        </div>
        <footer class="mt-8">
          <div class="md:flex md:items-center md:justify-center">
            
            <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
              <div class="text-base font-medium text-gray-900">{name}</div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  </div>
</section>