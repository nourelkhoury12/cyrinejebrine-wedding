<script>
  const bride = "Olivia";
  const groom = "Teddy";
  import OrhcidLeft from "$lib/assets/orchid-left.png"
  import OrhcidRight from "$lib/assets/orchid-rigth.png"
  import { fade, fly } from 'svelte/transition';
  import Image from "$lib/assets/image.png"
  import Rose from "$lib/assets/rose.png"
</script>

<div class="wedding-card">

    <div class="card-paper"></div>

    <img src={OrhcidLeft} in:fly={{ y: -30, duration: 1000 }} alt="" class="floral-decoration top-orchid"/>
    <img src={OrhcidRight} in:fly={{ y: -30, duration: 1000 }} alt="" class="floral-decoration top-orchid-left"/>

    <div class="card-header">
        <p class="card-save-date" in:fade={{ duration: 1000 }}>The Wedding Of</p>
        <span class="beginning" in:fade={{ duration: 1000 }}>Cyrine & Jebrine</span>
        <p class="card-save-date" in:fade={{ duration: 1000 }}>SAVE THE DATE</p>
        <div class="wedding-date" in:fade={{ duration: 1200 }}>
            <div class="date">
                <span>13</span>
                <div class="divider"></div>
                <span>AUGUST</span>
                <div class="divider"></div>
                <span>2026</span>
            </div>
        </div>
    </div>
</div>
    
<style>


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
    width: 48%;
    top: -6%;
    left: -6%;
    opacity: 0.70;
}

.top-orchid-left {
    width: 48%;
    top: -6%;
    left: 55%;
	opacity: 0.70;
    
}

.card-header {
    position: relative;
    z-index: 2;
    margin-top: 28%;
    text-align: center;
}




.card-save-date {
    margin-top: 1.2rem;
    font-family: "Cinzel", serif;
    font-size: clamp(.8rem,1vw,1rem);
    letter-spacing: .35em;
    color: var(--accent);
}

/* ===========================
   Wedding Date
=========================== */


.date {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.2rem;
    margin-top: 1.2rem;
	font-family: "Gothic A1", sans-serif;
	font-size: 1.2rem;
	font-weight: 500;
	color: var(--accent);
	letter-spacing: 2px;
}

.divider {
	width: 1px;
	height: 35px;
	background: var(--accent);
	opacity: 0.7;
}

</style>