const skillBarContainer = document.getElementById("skillBarContainer");
let percentageBar;
const skill = [
    {
        Tecnologia: 'CSS',
        porcentaje: 65,
    },
    {
        Tecnologia: 'HTML',
        porcentaje: 79,
    },
    {
        Tecnologia: 'JavaScript',
        porcentaje: 70,
    },
    {
        Tecnologia: 'Node.js',
        porcentaje: 55,
    },
    {
        Tecnologia: 'React-JS',
        porcentaje: 30,
    }
]
 
function showBars() {
  skill.forEach((element) => {
    skillBarContainer.innerHTML += ` 
       <div class="about-information2-content2-item">
        <div class="about-information2-content2-item-bar">
          <div class="about-information2-content2-item-bar-text">${element.Tecnologia}</div>
        </div>
        <div class="about-information2-content2-item-porcentage">${element.porcentaje}%</div>
       </div>`;
  });

  percentageBar = document.querySelectorAll('.about-information2-content2-item-bar');
  percentageBar.forEach((element, index)=>{
    element.style.width = `${skill[index].porcentaje}%`
  })
}


export {showBars};
