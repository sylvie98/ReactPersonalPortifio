import React from 'react'

const Project = () => {
  return (
    <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">MY PORTIFIO</h2>
    </header>

    <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="/cup.jpg"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />
        </a>
      </li>

      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="/house5.jpg"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />
        </a>
      </li>

      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="/steak.jpg"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

        </a>
      </li>

      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="/emojis.PNG"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />
        </a>
      </li>
      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="/image.PNG"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />
        </a>
      </li>
      <li>
        <a href="#" class="group block overflow-hidden">
          <img
            src="/m.PNG"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />
        </a>
      </li>
    </ul>
  </div>
</section>
  )
}

export default Project