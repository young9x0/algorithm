function preprocessDate(dates) {
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let arr = [];

  dates.shift();
  dates.map((prev_ymd) => {
    let dd, mm, yyyy;

    if (prev_ymd.length === 13) {
      dd = prev_ymd.substr(0, 2);
      mm = prev_ymd.substr(5, 3);
      yyyy = prev_ymd.substr(9, 5);
    } else {
      dd = prev_ymd.substr(0, 1);
      mm = prev_ymd.substr(4, 3);
      yyyy = prev_ymd.substr(8, 5);
    }

    let num_mm = month.indexOf(mm) + 1;

    if (num_mm < 10) {
      num_mm = `0${num_mm}`;
    } else {
      num_mm = `${num_mm}`;
    }
    if (dd < 10) {
      dd = `0${dd}`;
    } else {
      dd = `${dd}`;
    }

    let change_ymd = `${yyyy}-${num_mm}-${dd}`;
    arr.push(change_ymd);
  });

  return arr;
}

let a = preprocessDate([
  200,
  '20th Oct 2052',
  '6th Jun 1933',
  '26th May 1960',
  '20th Sep 1958',
  '16th Mar 2068',
  '25th May 1912',
  '16th Dec 2018',
  '26th Dec 2061',
  '4th Nov 2030',
  '28th Jul 1963',
]);

console.log(a);
