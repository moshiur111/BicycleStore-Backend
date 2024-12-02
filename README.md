# 🚴 Bi-Cycle Store Backend API  

The **Bi-Cycle Store API** is a backend system built with **Node.js**, **TypeScript**, **Express**, **Mongoose**, and **MongoDB**. It manages bicycles and orders while ensuring inventory accuracy.

---

## 📋 **Features**  

- **Bicycle Management:**  
  - Create, view, update, and delete bicycles.  
- **Order Management:**  
  - Place orders and adjust inventory.  
  - Prevent orders with insufficient stock.  

- **Revenue Calculation:**  
  - Aggregate total revenue from all orders.

- **Error Handling**  
   - Generic error responses with descriptive error messages. 

---
## 🎯 **Purpose**  
This API is designed to manage a bicycle store efficiently, enabling CRUD operations for bicycles, handling inventory, and processing customer orders seamlessly.

---

## 🚀 **Setup Instructions**  

### **Requirements**  
- Node.js 20.15.1
- MongoDB  

### **Steps to Run Locally**  

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/moshiur111/BicycleStore-Backend.git
   cd BicycleStore-Backend
   ```

2. **Install dependencies**:  
   ```bash
   npm install
   ```

3. **Add environment variables**:  
   Create a `.env` file with the following:  
   ```env
   PORT=5000
   MONGO_URI=<Your_MongoDB_Connection_URI>
   ```

4. **Run the server**:  
   ```bash
   npm run start:dev
   ```

## 📚 **API Endpoints**

### **Bicycle Endpoints**  

| **Operation**       | **Method** | **Endpoint**              | **Description**                                |
|----------------------|------------|---------------------------|-----------------------------------------------|
| Create Bicycle       | `POST`     | `/api/products`           | Add a new bicycle to the inventory.          |
| Get All Bicycles     | `GET`      | `/api/products`           | Retrieve a list of all bicycles.             |
| Get Specific Bicycle | `GET`      | `/api/products/:productId`| Retrieve details of a specific bicycle.      |
| Update Bicycle       | `PUT`      | `/api/products/:productId`| Update details of a specific bicycle.        |
| Delete Bicycle       | `DELETE`   | `/api/products/:productId`| Remove a bicycle from the inventory.         |

### **Order Endpoints**  

| **Operation**         | **Method** | **Endpoint**        | **Description**                                  |
|------------------------|------------|---------------------|-------------------------------------------------|
| Place an Order         | `POST`     | `/api/orders`       | Place a new order for a bicycle.                |
| Get All Orders         | `GET`      | `/api/orders`       | Retrieve a list of all orders.                  |
| Calculate Total Revenue| `GET`      | `/api/orders/revenue`| Calculate the total revenue from all orders.    |

---

## 🛠 **Scripts**  

- `npm run start:dev`: Start development server.  
- `npm run build`: Compile TypeScript to JavaScript.  
- `npm start:prod`: Run the production build.  

---

## 🔗 **Repository and Deployment Link**  

- **GitHub Repository Link:** [Bicycle Store Backend](https://github.com/moshiur111/BicycleStore-Backend)  
- **Live Deployment Link:** [Live API Link](#)  
- **Video Explanation:** [Live API Link](#)  

