<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import BgImage from "$lib/assets/backgd.png";
    import { language } from "$lib/stores/languages";
    import { translations } from "$lib/i18n/translations";

    let visible = $state(false);

    onMount(() => {
        visible = true;
    });
</script>


{#if visible}
    <div class="invitation" in:fade={{ duration: 3000 }}>
        <img src={BgImage} alt="Wedding Background" class="background"/>
        <div class="overlay"></div>

        <div class="content">
            <!-- Language Selector -->
           <div class="top-bar">
                <div class="language">
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <span class:active={$language === "en"} onclick={() => language.set("en")}>
                        En
                    </span>
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <span class:active={$language === "ar"} onclick={() => language.set("ar")}>
                        Ar
                    </span>
                </div>
            </div>

            <!-- Center Content -->
            <div class="center">
                <div class="glass">
                    <p class="quote">{translations[$language].quote}</p>
                    <div class="names">
                        <h1>{translations[$language].jebrine}</h1>
                        <div class="and"> &</div>
                        <h1>{translations[$language].cyrine}</h1>
                    </div>

                    <div class="date">

                        <p>{translations[$language].this_will_happen}</p>
                        <div class="divider"></div>
                        <h2>{translations[$language].sunday}</h2>
                        <div class="divider"></div>
                        <h3>13&nbsp;&nbsp;•&nbsp;&nbsp;9&nbsp;&nbsp;•&nbsp;&nbsp;2026</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}


<style>

.invitation {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-family: "Cormorant Garamond", serif;
}

.background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.overlay {
    position: absolute;
    inset: 0;

    background:
        radial-gradient(
            circle at center,
            rgba(0, 0, 0, 0.22) 0%,
            rgba(0, 0, 0, 0.08) 40%,
            rgba(0, 0, 0, 0.12) 100%
        );
}

.content {
    position: absolute;
    inset: 0;

    display: flex;
    flex-direction: column;

    padding: 25px;
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

.language .active {
    background: #BE8A8A;
    color: white;
}

.center {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
}

.glass {
    width: min(520px, 100%);

    min-height: 72vh;
    max-height: 820px;

    padding: 48px 34px;

    display: flex;
    flex-direction: column;

    justify-content: space-evenly;

    border-radius: 32px;

    background: rgba(255, 255, 255, 0.08);

    border: 1px solid rgba(255, 255, 255, 0.18);

    text-align: center;
}

.quote {
    color: #fffdf8;

    font-size: 1rem;

    line-height: 2;

    letter-spacing: 0.18em;

    text-transform: uppercase;

    font-weight: 600;

    max-width: 92%;

    margin: 0 auto 30px;

    text-shadow:
        0 2px 6px rgba(0, 0, 0, 0.35);
}

.names {
    margin: 28px 0;
}

.names h1 {
    color: white;

    font-size: 3.35rem;

    letter-spacing: 0.30em;

    font-weight: 300;

    margin: 0;

    line-height: 1.25;

    text-shadow:
        0 4px 12px rgba(0, 0, 0, 0.35);
}

.and {
    margin: 26px 0;

    font-size: 2.4rem;

    color: #fff8f4;

    font-style: italic;

    text-shadow:
        0 2px 6px rgba(0, 0, 0, 0.35);
}

.date {
    margin-top: 20px;
}

.date p {
    color: #F8F1F1;

    font-size: 1rem;

    letter-spacing: 0.14em;

    text-transform: uppercase;

    margin-bottom: 16px;
}

.divider {
    width: 180px;

    height: 1px;

    margin: 18px auto;

    background: rgba(255, 255, 255, 0.45);
}

.date h2 {
    color: #D98181;

    font-size: 1.8rem;

    letter-spacing: 0.30em;

    font-weight: 500;

    margin: 0;
}

.date h3 {
    color: white;

    font-size: 1.95rem;

    letter-spacing: 0.34em;

    font-weight: 400;

    margin-top: 22px;

    text-shadow:
        0 2px 6px rgba(0, 0, 0, 0.35);
}

@media (max-width: 640px) {

    .content {
        padding: 18px;
    }

    .glass {
        width: 100%;
        min-height: 68vh;
        padding: 34px 22px;
        justify-content: space-evenly;
    }

    .quote {
        font-size: 0.82rem;
        letter-spacing: 0.15em;
        line-height: 1.9;
        max-width: 96%;
    }

    .names h1 {
        font-size: 2.45rem;
        letter-spacing: 0.20em;
    }

    .and {
        font-size: 2rem;
        margin: 20px 0;
    }

    .date p {
        font-size: 0.85rem;
    }

    .divider {
        width: 150px;
    }

    .date h2 {
        font-size: 1.3rem;
    }

    .date h3 {
        font-size: 1.45rem;
        letter-spacing: 0.22em;
    }
}

</style>