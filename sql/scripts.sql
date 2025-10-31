SELECT TOP 10 Id, FirstName, LastName, Email
FROM Customers
ORDER BY CreatedDate DESC

SELECT Id, FirstName, LastName, Email
FROM Customers
WHERE Email LIKE '%@gmail.com'

SELECT MONTH(CreatedDate) AS CreatedMonth, COUNT(*) AS CustomerCount
FROM Customers
WHERE YEAR(CreatedDate) = 2025
GROUP BY MONTH(CreatedDate)

SELECT Email, COUNT(*) AS EmailCount
FROM Customers
GROUP BY Email
HAVING COUNT(*) > 1
