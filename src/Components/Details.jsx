import React from "react";

const Details = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh] w-full bg-orange-50 text-black">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
              </th>
              <th scope="col" class="px-6 py-3">
                Awardname
              </th>
              <th scope="col" class="px-6 py-3">
                Awardyear
              </th>
              <th scope="col" class="px-6 py-3">
                Laureates
              </th>
              <th scope="col" class="px-6 py-3">
                Motivation
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
        <nav
          class="flex items-center justify-between pt-4"
          aria-label="Table navigation"
        >
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span class="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span class="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul class="inline-flex -space-x-px text-sm h-8">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Details;
