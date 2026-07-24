<script lang="ts">
    import BgImage from "$lib/assets/backgd.png";
</script>

<div class="invitation">

    <img
        src={BgImage}
        alt="Wedding Background"
        class="background"
    />

    <!-- Soft overlay -->
    <div class="overlay"></div>

    <!-- Content -->
    <div class="content">

        <!-- Language -->
        <div class="top-bar">

            <div class="language">

                <span class="active">
                    En
                </span>

                <span>
                    Ar
                </span>

            </div>

        </div>

        <!-- Middle -->
        <div class="center">

            <div class="glass">

                <p class="quote">
                    “May our hearts remain united in love,
                    kindness and peace throughout our lives.”
                </p>

                <div class="names">

                    <h1>JEBRINE</h1>

                    <div class="and">&</div>

                    <h1>CYRINE</h1>

                </div>

                <div class="date">

                    <p>This Will Happen</p>

                    <div class="divider"></div>

                    <h2>SUNDAY</h2>

                    <div class="divider"></div>

                    <h3>
                        13&nbsp;&nbsp;•&nbsp;&nbsp;9&nbsp;&nbsp;•&nbsp;&nbsp;2026
                    </h3>

                </div>

            </div>

        </div>

    </div>

</div>

<style>
    .invitation{

    position:relative;

    width:100%;

    height:100vh;

    overflow:hidden;

    font-family: "Cormorant Garamond", serif;
}

.background{

    width:100%;

    height:100%;

    object-fit:cover;

    display:block;
}

/* Makes text easier to read without hiding image */

.overlay{

    position:absolute;

    inset:0;

    background:
    radial-gradient(
        circle at center,
        rgba(0,0,0,.22) 0%,
        rgba(0,0,0,.08) 40%,
        rgba(0,0,0,.12) 100%
    );
}

.content{

    position:absolute;

    inset:0;

    display:flex;

    flex-direction:column;

    padding:25px;
}

.top-bar{

    display:flex;

    justify-content:flex-end;
}

.language{

    display:flex;

    gap:6px;

    padding:6px;

    background:rgba(255,255,255,.90);

    border-radius:999px;

    backdrop-filter:blur(15px);

    box-shadow:0 10px 25px rgba(0,0,0,.15);
}

.language span{

    padding:8px 18px;

    border-radius:999px;

    cursor:pointer;

    font-size:14px;

    color:#B06A73;

    transition:.25s;
}

.language .active{

    background:#BE8A8A;

    color:white;
}

.center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.glass {
    width: min(520px, 100%);
    min-height: 72vh;          /* Makes the glass taller */
    max-height: 820px;

    padding: 48px 34px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly; /* Distributes content vertically */

    border-radius: 32px;

    background: rgba(255,255,255,.08);

    /* backdrop-filter: blur(4px); */

    border: 1px solid rgba(255,255,255,.18);

    text-align: center;
}

.quote {
    color: #fffdf8;

    font-size: 1rem;
    line-height: 2;

    letter-spacing: .18em;

    text-transform: uppercase;

    font-weight: 600;

    max-width: 92%;

    margin: 0 auto 30px;

    text-shadow: 0 2px 6px rgba(0,0,0,.35);
}

.names {
    margin: 28px 0;
}

.names h1 {
    color: white;

    font-size: 3.35rem;

    letter-spacing: .30em;

    font-weight: 300;

    margin: 0;

    line-height: 1.25;

    text-shadow: 0 4px 12px rgba(0,0,0,.35);
}

.and {
    margin: 26px 0;

    font-size: 2.4rem;

    color: #fff8f4;

    font-style: italic;

    text-shadow: 0 2px 6px rgba(0,0,0,.35);
}

.date {
    margin-top: 20px;
}


.date p {
    color: #F8F1F1;

    font-size: 1rem;

    letter-spacing: .14em;

    text-transform: uppercase;

    margin-bottom: 16px;
}

.divider {
    width: 180px;

    height: 1px;

    margin: 18px auto;

    background: rgba(255,255,255,.45);
}

.date h2 {
    color: #D98181;

    font-size: 1.8rem;

    letter-spacing: .30em;

    font-weight: 500;

    margin: 0;
}

.date h3 {
    color: white;

    font-size: 1.95rem;

    letter-spacing: .34em;

    font-weight: 400;

    margin-top: 22px;

    text-shadow: 0 2px 6px rgba(0,0,0,.35);
}

@media (max-width:640px) {

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
        font-size: .82rem;

        letter-spacing: .15em;

        line-height: 1.9;

        max-width: 96%;
    }

    .names h1 {
        font-size: 2.45rem;

        letter-spacing: .20em;
    }

    .and {
        font-size: 2rem;

        margin: 20px 0;
    }

    .date p {
        font-size: .85rem;
    }

    .divider {
        width: 150px;
    }

    .date h2 {
        font-size: 1.3rem;
    }

    .date h3 {
        font-size: 1.45rem;

        letter-spacing: .22em;
    }
}
</style>