<script lang="ts">
    import { page } from "$app/state";

    // Added by myself
    import "./global.css";
    import { onMount } from "svelte";
    import { lang } from "./state.svelte";
    onMount(() => lang.change("en"));
    const cssUseDebugColors = false;

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="layout" class:debug={cssUseDebugColors}>
    <header>
        <nav>
            {#if page.url.pathname === "/contact" || page.url.pathname === "/about"}
                <img src="/material_home_black_24dp.svg" alt="home_image" />
                <a href="/">{lang.home}</a>
            {:else}
                <img src="/material_apps_black_24dp.svg" alt="apps_image" />
                <a href="https://github.com/mbodm">GitHub</a>
                <a href="/contact">{lang.contact}</a>
                <a href="/about">{lang.about}</a>
            {/if}
        </nav>
        <nav>
            <img src="/material_language_black_24dp.svg" alt="language_image" />
            <!-- svelte-ignore a11y_invalid_attribute -->
            <a href="" onclick={() => lang.change("en")}>EN</a>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <a href="" onclick={() => lang.change("de")}>DE</a>
        </nav>
    </header>
    <main>
        {@render children?.()}
    </main>
    <footer>
        {#if page.url.pathname === "/"}
            <span>{lang.foooterMessage}</span>
        {/if}
    </footer>
</div>

<style>
    .layout {
        height: 100%; /* fill svelte app container */
        display: flex; /* content from "top to bottom" --> header - main (remaining space) - footer */
        flex-direction: column;
        background-color: var(--secondary-color);
    }

    header {
        display: flex; /* content from "left to right" --> left nav - remaining space - right nav */
        flex-direction: row;
        justify-content: space-between;
        font-size: small;
    }

    main {
        flex: 1; /* fill remaining space inside .layout container ("top to bottom") */
    }

    footer {
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
        font-size: small;
        color: var(--icon-color);
    }

    nav {
        padding: 10px;
    }

    nav > img {
        vertical-align: middle; /* reason --> cause baseline differs for <img> and <a> */
        margin-right: 10px;
    }

    nav > a {
        vertical-align: middle; /* reason --> cause baseline differs for <img> and <a> */
        text-decoration: none;
        color: var(--primary-color);
    }

    /* separator --> only between 2 <a> links */
    nav > a + a {
        border-left: 2px solid var(--icon-color);
        margin-left: 10px;
        padding-left: 10px;
    }

    /* debug colors */

    .layout.debug {
        background-color: lightcoral;
    }

    .layout.debug header {
        background-color: lightgreen;
    }

    .layout.debug main {
        background-color: lightblue;
    }

    .layout.debug footer {
        background-color: lightyellow;
    }

    .layout.debug nav {
        background-color: red;
    }

    .layout.debug nav > img {
        background-color: green;
    }

    .layout.debug nav > a {
        background-color: blue;
    }

    .layout.debug nav > a + a {
        border-left: 2px solid yellow;
    }
</style>
