// console.log(window.location.hash);
if (window.location.hash.length === 0) {
  window.location.replace(
    "https://discord.com/api/oauth2/authorize?client_id=788365840079781888&redirect_uri=https%3A%2F%2Fmanueltt.github.io%2Fguildcount%2F&response_type=code&scope=guilds%20identify"
  );
}
