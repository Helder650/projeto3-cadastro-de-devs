const devForm = document.getElementById("devForm")
const addtech = document.getElementById("add-technology")
const technologiesContainer = document.getElementById("add-tech")
const devs = []
let techCounter = 0

addtech.addEventListener("click", () => {
    techCounter++
    const newTechRow = document.createElement("div")
    newTechRow.classList.add("techRow")

    const techInput = document.createElement("input")
    techInput.type = "text"
    techInput.name = "technology"
    techInput.placeholder = "Nome da tecnologia"
    techInput.required = true

    const experienceLevels = ["0-2 anos", "3-4 anos", "5+ anos"]
    const experienceGroup = document.createElement("div")
    const nameRadio = "experience-" + techCounter

    let i = 0
    while (i < experienceLevels.length) {
        const level = experienceLevels[i]
        const radio = document.createElement("input")
        radio.type = "radio"
        radio.name = nameRadio
        radio.value = level
        radio.required = true

        const label = document.createElement("label")
        label.append(radio, ` ${level}`)
        experienceGroup.appendChild(label)
        i++
    }

    const removeLine = document.createElement("button")
    removeLine.type = "button"
    removeLine.textContent = "Remover"
    removeLine.addEventListener("click", () => {
        technologiesContainer.removeChild(newTechRow)
    })

    newTechRow.appendChild(techInput)
    newTechRow.appendChild(experienceGroup)
    newTechRow.appendChild(removeLine)
    technologiesContainer.appendChild(newTechRow)
})

devForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = document.getElementById("name").value
    const techRows = document.querySelectorAll(".techRow")
    const technologies = []

    let i = 0
    while (i < techRows.length) {
        const row = techRows[i]
        const techName = row.querySelector("input[name='technology']").value
        const experience = row.querySelector("input[type='radio']:checked")
        if (techName && experience) {
            technologies.push({ tech: techName, experience: experience.value })
        }
        i++
    }

    const dev = { name, technologies }
    devs.push(dev)

    console.log(devs)

    devForm.reset()
    technologiesContainer.innerHTML = ""
})