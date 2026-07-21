<script>
  const bride = "Olivia";
  const groom = "Teddy";
  import OrhcidLeft from "$lib/assets/orchid-left.png"
  import OrhcidRight from "$lib/assets/orchid-rigth.png"
  import { fade, fly } from 'svelte/transition';

</script>

<div class="wedding-card">
    <div class="card-paper"></div>
    <img src={OrhcidLeft} in:fly={{ y: -30, duration: 1000 }} alt="" class="floral-decoration top-orchid"/>
    <img src={OrhcidRight} in:fly={{ y: -30, duration: 1000 }} alt="" class="floral-decoration top-orchid-left"/>

    <div class="card-header">
        <p class="card-save-date" in:fade={{ duration: 1000 }}>The Wedding Of</p>
        <span class="title" in:fade={{ duration: 1000 }}>Jebrine & Cyrine </span>
        <p class="card-save-date" in:fade={{ duration: 1000 }}>SAVE THE DATE</p>
        <div class="wedding-date" in:fade={{ duration: 1000 }}>
            <div class="date-side">
                <span>SEP</span>
                <span>2026</span>
            </div>
            <div class="date-divider"></div>
            <div class="date-number">13</div>
            <div class="date-divider"></div>
            <div class="date-side">
                <span>SUN</span>
                <span>8 PM</span>
            </div>
        </div>
    </div>
</div>
    
<style>

.title {
    margin-top: 1rem;
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(2rem,5vw,3.5rem);
    letter-spacing: .08em;
    color:#8b4b55;
    font-weight: 400;
}
.wedding-card {
    position: relative;
    width: min(92vw, 720px);
    aspect-ratio: 7 / 10;
    margin: 3rem auto;
    overflow: hidden;
    background: var(--surface);
    border-radius: 18px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, .08);
}


.card-paper {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at top, rgba(255,255,255,.9), transparent 60%),
        linear-gradient(180deg,#fffdfb,#faf7f4);

    opacity: .95;
}



.floral-decoration {
    position: absolute;
    pointer-events: none;
    user-select: none;
}

.top-orchid {
    width: 46%;
    top: -4%;
    left: -3%;
    opacity: .75;
}


.top-orchid-left {
    width: 46%;
    top: -4%;
    right: -3%;
    left: auto;
    opacity: .75;
}

.card-header {
    position: relative;
    z-index: 2;

    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    transform: translateY(-15%);
}




.card-save-date {
    margin-top: 1.2rem;
    font-family: "Cinzel", serif;
    font-size: clamp(.8rem,1vw,1rem);
    letter-spacing: .35em;
    color: var(--accent);
}





.wedding-date {
    margin-top: 2rem;

    display:grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;

    align-items:center;

    width:min(85%,420px);

    color:#8b4b55;
}

.date-side {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    font-family:"Cormorant Garamond", serif;

    font-size:clamp(1rem,2vw,1.25rem);

    letter-spacing:.15em;

    line-height:1.4;
}

.date-number {

    font-family: "Cormorant Garamond", serif;

    font-size: clamp(4rem, 10vw, 5.5rem);

    font-weight: 300;

    line-height: 1;

    color: #8b4b55;

}


.date-divider {

    width: 1px;

    height: 75px;

    background: var(--accent);

    position: relative;

}


/* small gold dots like the reference */

.date-divider::before,
.date-divider::after {

    content: "";

    position: absolute;

    left: 50%;

    transform: translateX(-50%);

    width: 5px;

    height: 5px;

    border-radius: 50%;

    background: var(--accent);

}


.date-divider::before {
    top: 0;
}


.date-divider::after {
    bottom: 0;
}
</style>