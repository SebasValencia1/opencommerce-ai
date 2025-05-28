## Product Search

* the user will write the description of his product in naturlal languages ex: 'I need a special shoe for runninig' or 'computer for software development' --> This input pass throw an LLM who will return a Json with the following caracteristics :

--name
--category
--description


---> then the applicatuon will vectorize this object 
---> the the application will retrieve the most relevant category in the database using the vectors distance. 
---> the application will retrieve the 10 most relevants products with name and description using the vectors distance. 

