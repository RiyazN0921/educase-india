# School Management API Documentation

## Base URL

`http://localhost:9000`

## Endpoints

### 1. Add School API

- **Method:** POST
- **URL:** `/api/schools/addSchool`
- **Headers:**
  - `Content-Type: application/json`
- **Body (JSON Example):**

```json
{
  "name": "Greenwood International School",
  "address": "123 Main Street, NY",
  "latitude": 40.712776,
  "longitude": -74.005974
}
```

- **Success Response (201 Created):**

```json
{
  "success": true,
  "message": "School added successfully",
  "data": {
    "id": 1,
    "name": "Greenwood International School",
    "address": "123 Main Street, NY",
    "latitude": 40.712776,
    "longitude": -74.005974
  }
}
```

---

### 2. List Schools API

- **Method:** GET
- **URL:** `/api/schools/listSchools?latitude=40.712776&longitude=-74.005974`
- **Query Parameters:**
  - `latitude`: User's latitude
  - `longitude`: User's longitude
- **Success Response (200 OK):**

```json
{
  "success": true,
  "message": "Schools fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "Greenwood International School",
      "address": "123 Main Street, NY",
      "latitude": 40.712776,
      "longitude": -74.005974,
      "distance": 0.0
    },
    {
      "id": 2,
      "name": "Sunrise High School",
      "address": "456 Park Avenue, NY",
      "latitude": 40.714352,
      "longitude": -74.006935,
      "distance": 0.2
    }
  ]
}
```
