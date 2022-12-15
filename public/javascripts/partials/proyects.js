export async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return showProjects(data);
}

function showProjects(dataProjects){
    const projects = document.getElementById('projects');
    const template = document.getElementById('TemplateProjects')
    const fragment = new DocumentFragment();
    let technologies = 'ALL';

    document.addEventListener('click', (e)=> {
        if(e.target.matches('.portfolio-filter div')){
            technologies = e.target.textContent;
            itemProjects();
        }
    })

    function itemProjects(){
        let index = [];
        projects.textContent = '';
        dataProjects.forEach((Element, indice) => {
            if (technologies == 'ALL'){
                index.push(indice);
            }
            Element.technologies.forEach(Item => {
                if(technologies == Item){
                    index.push(indice)
                }
            })
        });
        index.forEach(Element => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.portfolio-projects-item-text-title').textContent = dataProjects[Element].name;
            clone.querySelector('.portfolio-projects-item-text-caption').textContent = dataProjects[Element].technologies; 
            clone.querySelector('.portfolio-projects-item').style.backgroundImage = `url(${dataProjects[Element].image.secure_url})`;
            fragment.appendChild(clone);
        })
        projects.appendChild(fragment);
    }

    itemProjects();
}