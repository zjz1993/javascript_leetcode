# Write your MySQL query statement below
# 这道题有两个要点，一是使用MOD函数，这个函数用来计算a%b，二是要按照rating的降序排列
SELECT id,movie,description,rating FROM `cinema` WHERE description != 'boring' AND MOD(id,2) = 1 ORDER BY rating DESC;