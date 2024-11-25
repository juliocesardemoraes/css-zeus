import { tasks } from "./mock/data";
import getFormattedDate from "./utils";

const pomolist = document.getElementById("pomolist");

for (let i = 0; i < tasks.length; i++) {
  pomolist.innerHTML += `
       <li class="py-3 sm:py-4">
              <div class="flex items-center">
              ${getFormattedDate()}
                    <img class="icon" src="${
                      tasks[i].completed === true ? "/check.svg" : "/xmark.svg"
                    }" />

                <div class="flex-1 min-w-0 ms-4">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    ${tasks[i].title}
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    ${tasks[i].description}

                  </p>
                </div>
                <div
                  class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                >
                  Pomo: ${tasks[i].pomodoros}
                </div>
              </div>
            </li>
  `;
}
