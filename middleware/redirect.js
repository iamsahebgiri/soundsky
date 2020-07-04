export default function () {
  console.log("middleware...")
  if (screen.width <= 699) {
    window.location = "https://google.com";
  }
}