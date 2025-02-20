SELECT FOOD_TYPE, REST_ID, REST_NAME, MAX(FAVORITES) AS FAVORITES
FROM rest_info
GROUP BY FOOD_TYPE
ORDER BY FOOD_TYPE desc;

-- GROUP BY를 쓰면 임의로 최상단에 있는 TYPE,ID,NAME을 가져오고 FAVORITES 만 MAX 로 가져와서 오답이 나오게 된다.
-- https://velog.io/@yuureru/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4SQL-%EC%A6%90%EA%B2%A8%EC%B0%BE%EA%B8%B0%EA%B0%80-%EA%B0%80%EC%9E%A5-%EB%A7%8E%EC%9D%80-%EC%8B%9D%EB%8B%B9-%EC%A0%95%EB%B3%B4-%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0

-- 2. 1번 경우와 일치하는 식당 정보 구하기
select food_type, rest_id, rest_name, favorites from rest_info
where (favorites) in
-- 1. food_type 별 즐겨찾기 수가 가장 많은 경우 구하기
(select max(favorites) from rest_info
group by food_type
)
order by food_type desc