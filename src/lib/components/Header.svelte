<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
   
    import { language } from "$lib/stores/languages";
    import { translations } from "$lib/i18n/translations";
import bgImage from "$lib/assets/backgd.png"
    let visible = $state(false);

    onMount(() => {
        visible = true;
    });
</script>

{#if visible}
<div in:fade={{ duration: 3000 }} style={`background-image: url(${bgImage});`} class="hero mx-auto  max-w-3xl items-center text-center  p-10 shadow-[0_20px_50px_rgba(196,138,151,0.12)]">
    <div class="top-bar">
        <div class="language">
            <span class:active={$language === "en"} onclick={() => language.set("en")}>
                En
            </span>
            <span class:active={$language === "ar"} onclick={() => language.set("ar")}>
                Ar
            </span>
        </div>
    </div>

    <div class="center ">
        <div class="glass py-24 items-center justify-center space-y-12">
        {#if $language === "en"}
            <p class="quote text-lg text-[#ad676e]">{translations[$language].quote}</p>
            <div class="names text-[100px] text-[#ad676e]">
                <h1>{translations[$language].jebrine}</h1>
                <div class="and">{translations[$language].and}</div>
                <h1>{translations[$language].cyrine}</h1>
            </div>
            <div class="date ">
                <p>{translations[$language].this_will_happen}</p>
                <div class="divider"></div>
                <h2>{translations[$language].sunday}</h2>
                <div class="divider"></div>
                <h3>13&nbsp;&nbsp;•&nbsp;&nbsp;9&nbsp;&nbsp;•&nbsp;&nbsp;2026</h3>
            </div>
        {:else}
            <div class="arabic-invitation" dir="rtl">
	<p class="arabic-quote">
		نبقى قلوبًا متحدة بالمحبة والرحمة والسلام
		<br />
		طوال حياتنا
	</p>

	<div class="arabic-names">
		<h1>جبريل</h1>

		<span class="arabic-and">و</span>

		<h1>سيرين</h1>
	</div>

	<div class="arabic-date">
		<p class="celebration">سيحدث هذا</p>

		<div class="small-divider"></div>

		<p class="day">الأحد</p>

		<p class="date">١٣ • ٩ • ٢٠٢٦</p>
	</div>
</div>
        {/if}
        </div>
    </div>
</div>
{/if}


<style>
.arabic-invitation {
	direction: rtl;
	text-align: center;
}

.arabic-quote {
	margin: 0 auto;

	font-family: 'Amiri', serif;
	font-size: clamp(1.25rem, 4vw, 1.7rem);
	font-weight: 400;
	line-height: 1.8;

	color: #8f5a60;
}

.arabic-names {
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 3.5rem;
}

.arabic-names h1 {
	margin: 0;

	font-family: 'Aref Ruqaa', 'Amiri', serif;
	font-size: clamp(4.8rem, 15vw, 7.5rem);
	font-weight: 400;
	line-height: 0.9;

	color: #9d6268;

	text-shadow:
		0 2px 12px rgba(255, 255, 255, 0.7);
}

.arabic-and {
	margin: 1rem 0;

	font-family: 'Amiri', serif;
	font-size: 3rem;
	font-weight: 400;

	color: #bc8589;
}

.arabic-date {
	margin-top: 4.5rem;

	font-family: 'Amiri', serif;
	color: #75464c;
}

.celebration {
	margin: 0;

	font-size: 1.3rem;
	font-weight: 400;
}

.small-divider {
	width: 55px;
	height: 1px;

	margin: 0.8rem auto 1.2rem;

	background: rgba(157, 98, 104, 0.45);
}

.day {
	margin: 0 0 0.7rem;

	font-size: 1.7rem;
	font-weight: 500;
}

.date {
	margin: 0;

	font-family: 'Amiri', serif;
	font-size: 1.3rem;
	letter-spacing: 0.15em;
}
.hero {
  
    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.top-bar {
    display: flex;
    justify-content: flex-end;
}

.language {
    display: flex;
    gap: 6px;

    padding: 6px;

    background: rgba(255, 255, 255, 0.9);

    border-radius: 999px;

    backdrop-filter: blur(15px);

    box-shadow:
        0 10px 25px rgba(0, 0, 0, 0.15);
}

.language span {
    padding: 8px 18px;

    border-radius: 999px;

    cursor: pointer;

    font-size: 14px;

    color: #B06A73;

    transition: 0.25s;
}
</style>