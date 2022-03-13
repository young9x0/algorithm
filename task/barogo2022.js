const drinkType = {
    cola: 1100,
    water: 600,
    coffee: 700,
  },
  inputType = {
    isCoin: false, //동전을 투입했을 때 값이 true로 바뀐다
    isBill: false, //지폐를 투입했을 때 값이 true로 바뀐다
    isCard: false, //카드를 카드리더기에 읽혔을 때 값이 true로 바뀐다
  },
  checkedPaymentAvailable = {
    isAvailableCoin: false, //사용 가능한 동전을 투입했을 때 값이 true로 바뀐다
    isAvailableBill: false, //사용 가능한 지폐을 투입했을 때 값이 true로 바뀐다
    isAvailableCard: false, //사용 가능한 카드를 카드리더기에 읽혔을 때 값이 true로 바뀐다
  },
  cashType = [100, 500, 1000, 5000, 10000]; //투입 또는 배출 가능한 현금의 종류

let isReady = false, //음료 종류를 고를 수 있도록 버튼이 활성화되면 값이 true로 바뀐다
  isExit = false, //잔돈이 남은 상태 또는 카드리더기로 사용 가능한 카드가 정상적으로 읽힌 상태에서 사용자가 반환레버를 돌렸을 때 값이 true로 바뀐다
  coinInputType = 0, //사용자가 동전투입구를 통해 넣은 동전의 값
  billInputType = 0, //사용자가 지폐투입구를 통해 넣은 지폐의 값
  availableCashAmount = 0, //현재 자판기에서 사용가능한 금액
  resultForCoin = [], //자판기 동전배출구로 나올 동전 하나 또는 여러 개, 예를 들어 [100, 100, 500]와 같은 값이 들어갈 수 있다
  resultForBill = [], //자판기 지폐배출구로 나올 지폐 하나 또는 여러 개, 예를 들어 [1000, 10000, 5000]와 같은 값이 들어갈 수 있다
  resultForDrink = []; //자판기 음료배출구로 나올 음료 하나 또는 여러 개, 예를 들어 ['cola', 'coffee']와 같은 값이 들어갈 수 있다

function pushToResult(resultType, idx) {
  //동전 또는 지폐 반환한다
  while (availableCashAmount >= cashType[idx]) {
    resultType.push(cashType[idx]);
    availableCashAmount -= cashType[idx];
  }
}

function calcReturnTypeCash(idx) {
  //반환할 현금 종류 계산한다
  while (idx > -1) {
    if (availableCashAmount >= cashType[idx]) {
      if (availableCashAmount > cashType[1]) {
        pushToResult(resultForBill, idx);
      } else {
        pushToResult(resultForCoin, idx);
      }
    }
    idx--;
  }
}

function turnReturnLever() {
  //사용자가 반환 레버를 돌렸을 때 반환할 수 있는 현금의 최대값을 찾는다
  isReady = false;
  if (!inputType.isCard && !!availableCashAmount) {
    if (availableCashAmount < cashType[1]) {
      calcReturnTypeCash(0);
    } else if (availableCashAmount < cashType[2]) {
      calcReturnTypeCash(1);
    } else if (availableCashAmount < cashType[3]) {
      calcReturnTypeCash(2);
    } else if (availableCashAmount < cashType[4]) {
      calcReturnTypeCash(3);
    } else if (availableCashAmount >= cashType[4]) {
      calcReturnTypeCash(4);
    }
  }
}

function clickDrinkTypeButton(choosedDrinkType) {
  //사용자가 자판기의 음료 선택 버튼 중 하나를 눌렀을 때 사용가능한 금액에서 선택한 음료값 빼고 잔액 확인하기, 잔액이 없으면 바로 모든 프로세스를 종료한다
  if (availableCashAmount >= drinkType[choosedDrinkType]) {
    resultForDrink.push(choosedDrinkType);
    availableCashAmount = availableCashAmount - drinkType[choosedDrinkType];
    if (availableCashAmount > 0 && availableCashAmount < drinkType.water) {
      isReady = false;
    } else {
      isReady = false;
      isExit = true;
    }
  }
}

//step1. 사용자가 자판기에 넣은 동전, 지폐 또는 카드의 유효성 검사를 실시한다. 유효성 검사에서 통과하면 isReady가 true가 되고 실패하면 isExit가 true로 바뀐다.
//실패 시 동전 또는 지폐의 경우 해당 반환구로 사용자가 투입한 현금을 그대로 반환한다.
if (inputType.isCoin) {
  if (checkedPaymentAvailable.isAvailableCoin) {
    availableCashAmount += coinInputType;
    if (availableCashAmount >= drinkType.water) {
      isReady = true;
    }
  } else {
    resultForCoin.push(coinInputType);
    isExit = true;
  }
} else if (inputType.isBill) {
  if (checkedPaymentAvailable.isAvailableBill) {
    isReady = true;
    availableCashAmount += billInputType;
  } else {
    resultForBill.push(billInputType);
    isExit = true;
  }
} else if (inputType.isCard) {
  if (checkedPaymentAvailable.isAvailableCard) {
    isReady = true;
  } else {
    isExit = true;
  }
}

//step2. 자판기의 유효성 검사를 통과한 후(isReady가 true인 상태) 음료 선택 버튼이 활성화되면 동전 또는 지폐의 경우 사용자가 선택한 음료에 따라 반환 금액을 계산한다.
//카드의 경우 해당 음료를 음료 배출구로 반환 후 모든 프로세스를 종료한다.
if (isReady) {
  let choosedDrinkType = ''; //사용자가 선택한 음료 이름, 예를 들어 콜라 버튼을 클리하면 choosedDrinkTyped의 값이 'cola'가 된다

  if (choosedDrinkType !== '') {
    if (!inputType.isCard) {
      clickDrinkTypeButton(choosedDrinkType);
    } else {
      resultForDrink.push(choosedDrinkType);
      isReady = false;
      isExit = true;
    }
  }
}
//음료 선택 전 또는 후에 사용자가 반환 레버를 돌리면 언제라도 모든 프로세스를 종료하고 현재 사용가능 금액을 해당 배출구로 반환한다.
if (isExit) {
  turnReturnLever();
}

//step3. 사용자가 반환 레버를 돌리거나 잔액이 없는 경우 반환할 값이 있을 때 해당 배출구로 음료 또는 현금을 반환한 후 모든 프로세스를 종료한다.
if (isExit && !availableCashAmount) {
  resultForCoin.length > 0 && console.log('동전 배출구', resultForCoin);
  resultForBill.length > 0 && console.log('지폐 배출구', resultForBill);
  resultForDrink.length > 0 && console.log('음료 배출구', resultForDrink);
  isExit = false;
}
