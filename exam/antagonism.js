const element = [
  '질소',
  '인',
  '칼륨',
  '칼슘',
  '마그네슘',
  '붕소',
  '철',
  '구리',
  '몰리브덴',
  '망간',
  '아연',
];
let soil_contain = [];
let push_element = 4;
let lastIdx = soil_contain.length;
const selectBox = document.getElementById('element_select_box');
const button = document.querySelector('button');

let selected_element = '';
selectBox.addEventListener('change', function () {
  selected_element = selectBox.options[selectBox.selectedIndex].value;

  element.filter((el, i) => {
    if (el === selected_element) {
      return (push_element = i);
    }
  });
});

button.addEventListener('click', function () {
  soil_contain.push(element[push_element]);
  const soil = document.getElementById('soil');
  const show_element = document.createElement('div');
  show_element.className = 'selected_element';
  show_element.textContent = element[push_element];
  soil.appendChild(show_element);

  const log = document.getElementById('result_log');
  const show_text = document.createElement('div');
  show_text.className = 'stack_minus';

  soil_contain.forEach((state, i) => {
    console.log(soil_contain[i]);
  });
  for (let i = 0; i < soil_contain.length; i++) {
    if (
      soil_contain[i] === element[0] &&
      element[push_element] === element[2]
    ) {
      show_text.textContent = `${element[0]}가 ${element[2]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[0] &&
      element[push_element] === element[5]
    ) {
      show_text.textContent = `${element[0]}가 ${element[5]}가 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[0] &&
      element[push_element] === element[4]
    ) {
      show_text.className = 'stack_plus';
      show_text.textContent = `${element[0]}가 ${element[4]}이 토양에 흡수되는 것을 돕고 있습니다.`;
      log.appendChild(show_text);
    }
    //p
    if (
      soil_contain[i] === element[1] &&
      element[push_element] === element[6]
    ) {
      show_text.className = 'stack_minus';
      show_text.textContent = `${element[1]}이 ${element[6]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[1] &&
      element[push_element] === element[2]
    ) {
      show_text.textContent = `${element[1]}이 ${element[2]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[1] &&
      element[push_element] === element[7]
    ) {
      show_text.textContent = `${element[1]}이 ${element[7]}가 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[1] &&
      element[push_element] === element[4]
    ) {
      show_text.className = 'stack_plus';
      show_text.textContent = `${element[1]}이 ${element[4]}이 토양에 흡수되는 것을 돕고 있습니다.`;
      log.appendChild(show_text);
    }
    //k
    if (
      soil_contain[i] === element[2] &&
      element[push_element] === element[3]
    ) {
      show_text.className = 'stack_minus';
      show_text.textContent = `${element[2]}이 ${element[3]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[2] &&
      element[push_element] === element[4]
    ) {
      show_text.textContent = `${element[2]}이 ${element[4]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[2] &&
      element[push_element] === element[5]
    ) {
      show_text.textContent = `${element[2]}이 ${element[5]}가 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[2] &&
      element[push_element] === element[6]
    ) {
      show_text.className = 'stack_plus';
      show_text.textContent = `${element[2]}이 ${element[6]}이 토양에 흡수되는 것을 돕고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[2] &&
      element[push_element] === element[8]
    ) {
      show_text.className = 'stack_plus';
      show_text.textContent = `${element[2]}이 ${element[8]}이 토양에 흡수되는 것을 돕고 있습니다.`;
      log.appendChild(show_text);
    }
    //Ca
    if (
      soil_contain[i] === element[3] &&
      element[push_element] === element[4]
    ) {
      show_text.className = 'stack_minus';
      show_text.textContent = `${element[3]}이 ${element[4]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[3] &&
      element[push_element] === element[10]
    ) {
      show_text.textContent = `${element[3]}이 ${element[10]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[3] &&
      element[push_element] === element[5]
    ) {
      show_text.textContent = `${element[3]}이 ${element[5]}가 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[3] &&
      element[push_element] === element[6]
    ) {
      show_text.textContent = `${element[3]}이 ${element[6]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[3] &&
      element[push_element] === element[2]
    ) {
      show_text.textContent = `${element[3]}이 ${element[2]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[3] &&
      element[push_element] === element[9]
    ) {
      show_text.textContent = `${element[3]}이 ${element[9]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    }
    //Mg
    if (
      soil_contain[i] === element[4] &&
      element[push_element] === element[2]
    ) {
      show_text.className = 'stack_minus';
      show_text.textContent = `${element[4]}이 ${element[2]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[4] &&
      element[push_element] === element[3]
    ) {
      show_text.textContent = `${element[4]}이 ${element[3]}가 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[4] &&
      element[push_element] === element[10]
    ) {
      show_text.textContent = `${element[4]}이 ${element[10]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[4] &&
      element[push_element] === element[6]
    ) {
      show_text.textContent = `${element[4]}이 ${element[6]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[4] &&
      element[push_element] === element[1]
    ) {
      show_text.className = 'stack_plus';
      show_text.textContent = `${element[4]}이 ${element[1]}이 토양에 흡수되는 것을 돕고 있습니다.`;
      log.appendChild(show_text);
    }
    if (
      soil_contain[i] === element[6] &&
      element[push_element] === element[1]
    ) {
      show_text.className = 'stack_minus';
      show_text.textContent = `${element[6]}이 ${element[1]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    }
    if (
      soil_contain[i] === element[7] &&
      element[push_element] === element[6]
    ) {
      show_text.textContent = `${element[7]}가 ${element[6]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    } else if (
      soil_contain[i] === element[7] &&
      element[push_element] === element[8]
    ) {
      show_text.textContent = `${element[7]}가 ${element[8]}이 토양에 흡수되는 것을 방해하고 있습니다.`;
      log.appendChild(show_text);
    }
  }
});
