import React from "react";

function Hovereffect() {
 

  onmousemove = (event) => {
    const cards = document.querySelectorAll(".card");
    const wrapper = document.querySelector(".cards");

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty("--xPos", `${x}px`);
        card.style.setProperty("--yPos", `${y}px`);
      });
  };

  return (
    <section>
      <div class="cards">
        <div class="card">
          <div class="card-content">
            <h2>Ace</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Act</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Algo</h2>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <h2>Astro</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Atl</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Auc</h2>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <h2>Banca</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Bbr</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Bay</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Bcn</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Bcpt</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Bdg</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Bdl</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Bela</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Blitz</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2>Block</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hovereffect;
