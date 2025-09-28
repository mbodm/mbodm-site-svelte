<script>
    import { lang } from "../state.svelte";
</script>

<div class="container">
    <img src="/avatar.jpg" alt="avatar_image" />
    <p>{lang.aboutMessage}</p>
</div>

<style>
    .container {
        height: 100%; /* fill layout main container */
        margin-top: 15px;
        margin-left: 15px;
    }
</style>
