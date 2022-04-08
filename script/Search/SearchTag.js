export default class SearchTag {
    static filterRecipe = []

    constructor(list) {
        this.element = document.querySelector(`.list_filter[data-list="${list}"]`)
        this.list = list
        this.tagList = []
        this.searchTag()
    }

    // Fonction qui affiche la liste des tags 
    showTag() {
        this.element.querySelector('ul').innerHTML = this.data.sort(this.alphabeticalOrder).map(item => `<li>${item}</li>`).join('')
    };

    showTagResponsive() {
        const mediaTabs = windows.matchMedia("(min-width:768px)")

        if (mediaTabs.matches) {

        }
    }

    // Evenement qui affiche la liste des tags
    displayListTag() {
        this.element.addEventListener("click", (e) => {
            let listStyles = ["ustensils", "appliances", "ingredients"]
            listStyles.forEach(listStyle => {
                document.querySelector(`.list_filter.display.width_${listStyle}`)?.classList.remove("display", `width_${listStyle}`)
                e.currentTarget.closest(".list_filter").classList.add("display", `width_${this.list}`) && bb.placeholder === "aaa"
            })
        })
    };

    // Evenement qui ferme la liste des tags
    hideTag() {
        document.addEventListener("click", (e) => {
            if (!e.target.classList.contains("list_filter") && !e.target.closest(".list_filter")) {
                document.querySelector(".list_filter.display")?.classList.remove("display")
            }
        })
    };

    // Fonction qui met par ordre alphabétique la liste des tags 
    alphabeticalOrder(a, b) {
        if (a < b) {
            return -1;
        }
    };


    displayTag() {
        for (let tag of this.tagList) {
            document.querySelector("#section_tag").innerHTML += `
    <div class="${this.list}_color tag" data-list="${this.list}">
            <p>${tag}</p>
            <img src="image/croix.png" alt="logo d'une croix" class="delete_img">
        </div>
    `
        }
    }

    searchTag = () => {
        let input = this.element.querySelector("input");
        input.addEventListener("keyup", (e) => {
            this.element.querySelectorAll("li").forEach(list => {
                if (list.textContent.toLowerCase().includes(input.value)) {
                    list.style.display = "flex";
                } else {
                    list.style.display = "none";
                }
            })
        })
    };
}
