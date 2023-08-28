export default function clickKey(charKeyBtn) {
    const input = document.getElementById("input")
    charKeyBtn.addEventListener("click", function () {
      const value = charKeyBtn.dataset.value
      input.value += value
    })
  }