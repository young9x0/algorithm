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
let goodToSoil = false;

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
  const good_text = document.createElement('div');
  const bad_text = document.createElement('div');
  let goodToSoilArr = [];
  let badToSoilArr = [];
  good_text.className = 'stack_plus';
  bad_text.className = 'stack_minus';
  let temp_state = '',
    temp_element = '';
  function selectText(goodToSoil) {
    console.log('good:', goodToSoil);
    if (soil_contain.length > 1 && goodToSoil) {
      goodToSoilArr.push(
        `${temp_state}(이/가) ${temp_element}(이/가) 토양에 흡수되는 것을 도와주고 있습니다.`,
      );
    } else if (soil_contain.length > 1 && !goodToSoil) {
      badToSoilArr.push(
        `${temp_state}(이/가) ${temp_element}(이/가) 토양에 흡수되는 것을 방해하고 있습니다.`,
      );
    }
  }
  soil_contain.forEach((state, i) => {
    switch (element[push_element] === element[4]) {
      case state === element[0]:
        temp_state = state;
        temp_element = element[push_element];
        goodToSoil = true;
        selectText(goodToSoil);
        break;
      case state === element[1]:
        temp_state = state;
        temp_element = element[push_element];
        goodToSoil = true;
        selectText(goodToSoil);
        break;
      case state === element[2]:
        temp_state = state;
        temp_element = element[push_element];
        goodToSoil = false;
        selectText(goodToSoil);
        break;
      case state === element[3]:
        temp_state = state;
        temp_element = element[push_element];
        goodToSoil = false;
        selectText(goodToSoil);
        break;

      default:
        null;
    }
    switch (element[push_element] === element[2]) {
      case state === element[0]:
        temp_state = state;
        temp_element = element[push_element];
        goodToSoil = false;
        selectText(goodToSoil);
        break;
      case state === element[1]:
        temp_state = state;
        temp_element = element[push_element];
        goodToSoil = false;
        selectText(goodToSoil);
        break;
      case state === element[3]:
        temp_state = state;
        temp_element = element[push_element];
        goodToSoil = false;
        selectText(goodToSoil);
        break;
      case state === element[4]:
        temp_state = state;
        temp_element = element[push_element];
        goodToSoil = false;
        selectText(goodToSoil);
        break;

      default:
        null;
    }

    good_text.textContent = goodToSoilArr.map((t) => t).join('\n');
    bad_text.textContent = badToSoilArr.map((t) => t).join('\n');
    log.appendChild(good_text);
    log.appendChild(bad_text);

    // if (state === element[0] && element[push_element] === element[2]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[0] && element[push_element] === element[5]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[0] && element[push_element] === element[4]) {
    //   show_text.className = 'stack_plus';
    //   temp_state = state;
    //   temp_element = element[push_element];
    //   goodToSoil = true;
    //   selectText(goodToSoil);
    // }
    // //p
    // if (state === element[1] && element[push_element] === element[6]) {
    //   show_text.className = 'stack_minus';
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[1] && element[push_element] === element[2]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[1] && element[push_element] === element[7]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[1] && element[push_element] === element[4]) {
    //   show_text.className = 'stack_plus';
    //   temp_state = state;
    //   temp_element = element[push_element];
    //   goodToSoil = true;

    //   selectText(goodToSoil);
    // }
    // //k
    // if (state === element[2] && element[push_element] === element[3]) {
    //   show_text.className = 'stack_minus';
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[2] && element[push_element] === element[4]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[2] && element[push_element] === element[5]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[2] && element[push_element] === element[6]) {
    //   show_text.className = 'stack_plus';
    //   temp_state = state;
    //   temp_element = element[push_element];
    //   goodToSoil = true;
    //   selectText(goodToSoil);
    // }
    // if (state === element[2] && element[push_element] === element[8]) {
    //   show_text.className = 'stack_plus';
    //   temp_state = state;
    //   temp_element = element[push_element];
    //   goodToSoil = true;
    //   selectText(goodToSoil);
    // }
    // //Ca
    // if (state === element[3] && element[push_element] === element[4]) {
    //   show_text.className = 'stack_minus';
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[3] && element[push_element] === element[10]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[3] && element[push_element] === element[5]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[3] && element[push_element] === element[6]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[3] && element[push_element] === element[2]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[3] && element[push_element] === element[9]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // //Mg
    // if (state === element[4] && element[push_element] === element[2]) {
    //   show_text.className = 'stack_minus';
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[4] && element[push_element] === element[3]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[4] && element[push_element] === element[10]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[4] && element[push_element] === element[6]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[4] && element[push_element] === element[1]) {
    //   show_text.className = 'stack_plus';
    //   temp_state = state;
    //   temp_element = element[push_element];
    //   goodToSoil = true;
    //   selectText(goodToSoil);
    // }
    // if (state === element[6] && element[push_element] === element[1]) {
    //   show_text.className = 'stack_minus';
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[7] && element[push_element] === element[6]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
    // if (state === element[7] && element[push_element] === element[8]) {
    //   temp_state = state;
    //   temp_element = element[push_element];

    //   goodToSoil = false;
    //   selectText(goodToSoil);
    // }
  });
});
