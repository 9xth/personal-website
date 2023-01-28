const stars = document.createElement("div")
stars.classList.add("stars")
stars.setAttribute("id", "stars")
document.body.appendChild(stars)

for (let i = 0; i < 20; i++) {
    const star = document.createElement("div")
    star.classList.add("star")
    document.getElementById("stars").appendChild(star)
}