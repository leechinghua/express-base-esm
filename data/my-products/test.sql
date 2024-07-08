-- 單選(查詢字串QS: brand=Apple)
SELECT * 
FROM my_product
WHERE brand = 'Apple';

-- 複選(查詢字串QS: brand=Apple,Google)

--OR
SELECT * 
FROM my_product
WHERE brand = 'Apple' OR brand ='Google';

-- IN
SELECT * 
FROM my_product
WHERE brand IN ('Apple','Google');

-- 關鍵字(查詢字串QS: name_like=sa)

SELECT * 
FROM my_product
WHERE name LIKE '%sa%';

-- 價格, 5000~15000(查詢字串QS: price_gte5000&price_lte=15000)
-- 數字與時間日期都可以做大小比較
SELECT * 
FROM my_product
WHERE price BETWEEN 5000 AND 15000;
-- 
SELECT * 
FROM my_product
WHERE price BETWEEN 5000 AND 15000;

SELECT *
FROM my_product
WHERE brand IN ('Apple', 'Google')
AND name LIKE '%o%'
AND price >= 5000 AND price <= 15000;

-- 排序 (查詢字串QS: sort=price&order=asc)(順向asc, 逆向desc)

SELECT *
FROM my_product
WHERE brand IN ('Apple', 'Google')
ORDER BY price DESC;


-- 分頁 (查詢字串QS: page=2&perpage=5) (目前page頁, 每頁perpage筆資料)
-- 公式: limit = perpage
--       offset = (page-1) * perpage
SELECT *
FROM my_product
WHERE brand IN ('Apple', 'Google')
ORDER BY price DESC
LIMIT 5 OFFSET 5;

-- 另外需計算在此條件下總共多少筆
SELECT COUNT(*) AS count
FROM my_product
WHERE brand IN ('Apple', 'Google');