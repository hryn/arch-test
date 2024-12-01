<h1 align="center">Archipelago Test</h1>


## 📝 Table of Contents

- [Basic Questions](#basic)
- [Database Questions](#database)
- [Typescript Questions](#typescript)
- [Vue.js](#vue)
- [Website Security Best Practices](#security)
- [Website Performance Best Practices](#performance)
- [Golang](#golang)
- [Tools Rating](#tools)

## 🧐 Basic Questions <a name = "basic"></a>

<b>Imagine you're building a website that allows users to submit photos. One of the requirements is that each photo must be reviewed by a moderator before it can be published. How would you design the logic for this process? What technologies would you use? Do you have any data structure in mind to support this based on your technology of choice to handle those data?</b>

1. Design System
- There is two main workflow for this process. User submission and moderator review.
- The users can upload/submit photos in the frontend interface for user.
- When users submitting, photos will store to a storage, then the metadata photo and user profile will store to database and marked as "Pending".
- For the moderator, I assumed, we have a dashboard CMS to show all data submitted by user.
- Moderator have a capability to approve or reject the photo with a reason as a note.
- When submission approved, the photo will be publish and show to frontend interface.
- When submission rejected, the photo will not show to frontend.

2. Stack Tech
- Frontend: Vue js or React js
- Backend: Go or node js
- Image Storage: S3 AWS
- Database: Postgresql
- Deps: JWT for auth

3. Data structures
- Users: id: uuid, name: varchar, email: varchar, password: varchar, role: enum['user', 'moderator']
- Photos: id: uuid, user_id: uuid, file_url: varchar, status: enum['pending', 'approved', 'rejected'], notes: text, created_at: timestamp, review_by: uuid, review_at: timestamp


## 🏁 Database Questions <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Level 1

Question: Write a SQL query that shows me how many customers there are from Germany!

```
SELECT COUNT(customerID) as germany_customer FROM Customers where Country = 'Germany';
```

### Level 2

Question: Write a query that shows me a list of the countries that have the most customers; from most customers to least customers.  Don’t show countries that have less than 5 customers.

```
SELECT COUNT(customerID) AS Total_customer, Country
FROM Customers
GROUP BY Country
HAVING COUNT(*) >= 5
ORDER BY 1 DESC;
```


### Level 3

Question: Reverse Engineer These Results (tell me the query that we need to write to get these results)

```
SELECT C.CustomerName, COUNT(O.OrderID) as OrderCount,
FORMAT(MIN(O.OrderDate), 'yyyy-MM-dd') as FirstOrder,
FORMAT(MAX(O.OrderDate), 'yyyy-MM-dd') as LastOrder
FROM Orders O
INNER JOIN Customers C ON O.CustomerID = C.CustomerID
GROUP BY C.CustomerName
HAVING COUNT(O.OrderID) >= 5
ORDER BY 4 DESC;
```


## 🧐 Typescript Questions <a name = "typescript"></a>

### Level 1
Make a typescript function that converts any string to Title Case. [> Go to solution](/quiz/level-1-title-case.ts)

### Level 2
Fixing code with Promise
[> Go to solution](/quiz/level-2-promise.ts)

### Level 2.5
Rewrite using Async/Await
[> Go to solution](/quiz/level-2-async.ts)


### Level 3-4
Create a real-time chat between two windows; using web sockets, vuejs and typescript.
[Go to project directory](/quiz/level-2-async.ts) or visit [https://](https://google.com)


## 🧐 Vue.js Questions <a name = "vue"></a>

```
To be honest, I haven't used Vue JS since 2018 and prefer to use React instead. But I'll try to answer the questions based on my knowledge, what I read, and what I tried for the chat project recently.
```

<b>Explain Vue.js reactivity and common issues when tracking changes.</b>
 - Reactivity in Vue js is fundamental concept that enables seamless synchronization between data and UI with tracking. When data changes, the UI is automically updated to reflect the changes.
 - Common issue in reactivity for an example, we can't detect changes in array element directly, so we need to use array methods like push, pop, etc..


<b>Describe data flow between components in a Vue.js app</b>

- Parent component to Child Component: Send data from the parent component to the child component using props.

- Child component to Parent Component: We send data by emitting an event from the Child component and listen to it on the Parent component.

<b>List the most common cause of memory leaks in Vue.js apps and how they can be solved.</b>

- I think, Vue js doesn't have auto-destroy or auto-remove mechanism, so, whenever we using event listener or reactive observer like `watch` and `watchEffect`, we need to remove or stop before unmount.
- If use vue router, we need to clean up after with `beforeRouteLeave` hook.

<b>What have you used for state management</b>

- In 2018, I used Vuex. But, after I read vue js recently, commonly they use Pinia.

<b>What’s the difference between pre-rendering and server side rendering?</b>

- Most difference between pre-render and SSR is about the timing when the HTML file rendered.
- Pre-render will generated HTML to static file, so it will be faster.
- SSR will render the content in the server before serve to the client, so it will be slower but more dynamic.


## 🧐 Website Security Best Practices <a name = "security"></a>

Tell me all the security best practices you can think of - start with the most important ones first.

- First of all, of course we need to secure the communication and encrypt the traffic data with HTTPS.
- Using authentication.
- Using encryption for sensitive data like password with hash.
- Using rate limit for prevent ddos attck.
- Always up to date with technology, at least we know how to prevent when something's happening in this world.

## 🔧 Website Performance Best Practices <a name = "performance"></a>

Tell me all the performance best practices you can think of - start with the most important ones first.

- First of all, we need to choose carefuly the stacks technology that we will to use.
- In backend perspective, we need to aware how to optimize the queries in SQL, indexing, and data structures, alghoritm. We need to aware, when we need leverage caching, queueing/pubsub.
- In frontend perspective, we need to aware the way how we do coding, choose library, choose data type on each variable, and so on. Use minify, non-blocking process like async await when we use javascript, keep our assets like image small size.


## 🎉 Golang <a name = "golang"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References

## 🔧 Tools Rating <a name = "tools"></a>

- Git: 4
- Redis: 4
- VSCode: 4
- Linux: 4
- AWS: 3
- EC2: 4
- Lambda: 3
- RDS: 3
- Cloudwatch: 2
- S3: 4
- Unit testing: 2
- Kanban boards: 4