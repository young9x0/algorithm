-- https://velog.io/@rkio/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-SQL-%ED%8A%B9%EC%A0%95-%ED%98%95%EC%A7%88%EC%9D%84-%EA%B0%80%EC%A7%80%EB%8A%94-%EB%8C%80%EC%9E%A5%EA%B7%A0-%EC%B0%BE%EA%B8%B0
SELECT COUNT(ID) AS COUNT
FROM ECOLI_DATA
WHERE GENOTYPE & 2 = 0
  AND (GENOTYPE & 1 = 1 or GENOTYPE & 4 = 4);

-- 2진수 변환 --
GENOTYPE(10진수) : 15
=> GENOTYPE(2진수) : 1111

3번 형질(10진수) : 4
=> 3번 형질(2진수) : 0100

--- 비트 연산 ---
      1111
    & 0100
    -------
      0100

-- 최종 연산 결과 --
-- 2진수를 10진수로 다시 변환하기
0100(2진수) -> 4(10진수)


