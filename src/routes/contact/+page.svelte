<script>
    import { lang } from "../state.svelte";
</script>

<div class="container">
    <p>
        {lang.contactMessage}
        <a href="mailto:marcel.beck@mbodm.com">marcel.beck@mbodm.com</a>
    </p>
</div>

<style>
    .container {
        height: 100%; /* fill layout main container */
        display: flex; /* is's a flexbox container which centers its content horizontally and vertically */
        justify-content: center;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: var(--primary-color);
    }
</style>
