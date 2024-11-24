const cards = document.getElementsByClassName("card");

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);

    for (let i = 0; i < entries.length; i++) {
      entries[i].target.classList.toggle("show", entries[i].isIntersecting);
    }
  },
  {
    threshold: 0.1,
  }
);

for (let i = 0; i < cards.length; i++) {
  observer.observe(cards[i]);
}
