USE hr;
SELECT * FROM employees;
-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(SALARY) AS MAX FROM employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT (MAX(SALARY) - MIN(SALARY)) AS DIFERENCA FROM employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT JOB_ID AS TRABALHO, AVG(SALARY) AS MEDIA_SALARIO FROM employees
GROUP BY JOB_ID;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(SALARY) AS Soma FROM employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT MAX(SALARY) AS 'o maior salário',
	   MIN(SALARY) AS 'o menor salário',
       SUM(SALARY) AS 'a soma de todos os salários',
       ROUND(AVG(SALARY), 2) AS 'média dos salários'
FROM employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT JOB_ID AS PROFISSAO, COUNT(*) FROM employees
WHERE JOB_ID = 'IT_PROG';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT JOB_ID AS TRABALHO, SUM(SALARY) AS SALARIO FROM employees
GROUP BY JOB_ID;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID AS TRABALHO, SUM(SALARY) AS SALARIO FROM employees
WHERE JOB_ID = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID AS TRABALHO, ROUND(AVG(SALARY), 2) AS SALARIO FROM employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY SALARIO DESC;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT ROUND(AVG(SALARY), 2) AS 'média dos salários', department_id AS 'Numero Func' FROM employees
WHERE department_id > 10
GROUP BY department_id;
